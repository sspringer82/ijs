import { tool } from '@langchain/core/tools';
import { Annotation, StateGraph } from '@langchain/langgraph';
import { createInterface } from 'readline/promises';
import { z } from 'zod';
import { writeFile } from 'fs/promises';
const schema = z.object({
    totalPrice: z.number(),
    cart: z.array(z.object({
        image: z.string(),
        name: z.string().optional(),
        price: z.number().optional(),
        quantity: z.number().optional(),
    })),
});
const cartAnnotation = {
    totalPrice: (Annotation),
    cart: (Annotation),
};
const State = Annotation.Root(cartAnnotation);
const detectProduct = tool(async (state) => {
    console.log('Detecting product...');
    const response = await Promise.resolve('{ "name": "apple", "quantity": 1 }');
    const visionModelResponse = JSON.parse(response);
    const clonedState = { ...state };
    clonedState.cart[clonedState.cart.length - 1] = {
        ...clonedState.cart[clonedState.cart.length - 1],
        ...visionModelResponse,
    };
    return clonedState;
}, {
    name: 'detectProduct',
    description: 'Detects a product.',
    schema,
});
async function getProduct(name) {
    return {
        name: 'apple',
        price: 2.99,
    };
}
const calculatePrice = tool(async (state) => {
    console.log('Calculating price...');
    const productWOPrice = state.cart[state.cart.length - 1];
    const { price } = await getProduct(productWOPrice.name);
    const clonedState = { ...state };
    clonedState.cart[clonedState.cart.length - 1].price = price;
    return clonedState;
}, {
    name: 'calculatePrice',
    description: 'Calculates the price of a product.',
    schema,
});
const calculateTotalPrice = tool(async (state) => {
    console.log('Calculating total price...');
    const totalPrice = state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    console.log(`Current total price: ${totalPrice}`);
    return { totalPrice };
}, {
    name: 'calculateTotalPrice',
    description: 'Calculates the total price of the cart.',
    schema,
});
const showCart = tool(async (state) => {
    state.cart.pop();
    const items = state.cart.map((item) => ({
        Product: item.name,
        Quantity: item.quantity,
        Price: item.price,
        Total: item.price * item.quantity,
    }));
    items.push({
        Product: 'Total',
        Quantity: '',
        Price: '',
        Total: state.totalPrice,
    });
    console.table(items);
    return state;
}, {
    name: 'showCart',
    description: 'Shows the cart.',
    schema,
});
const askForNextProduct = tool(async (state) => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const file = await rl.question('Enter the file: ');
    rl.close();
    const clonedState = { ...state };
    clonedState.cart.push({ image: file });
    return clonedState;
}, {
    name: 'askForNextProduct',
    description: 'Asks for the next product.',
    schema,
});
function showCartOrDetectProduct(state) {
    if (state.cart[state.cart.length - 1].image === 'finished') {
        return 'showCart';
    }
    else {
        return 'detectProduct';
    }
}
const graph = new StateGraph(State)
    .addNode('detectProduct', detectProduct)
    .addNode('calculatePrice', calculatePrice)
    .addNode('calculateTotalPrice', calculateTotalPrice)
    .addNode('showCart', showCart)
    .addNode('askForNextProduct', askForNextProduct)
    .addEdge('__start__', 'askForNextProduct')
    .addEdge('detectProduct', 'calculatePrice')
    .addConditionalEdges('askForNextProduct', showCartOrDetectProduct)
    .addEdge('calculatePrice', 'calculateTotalPrice')
    .addEdge('calculateTotalPrice', 'askForNextProduct')
    .addEdge('showCart', '__end__');
const app = graph.compile();
const graphRep = await app.getGraphAsync();
const image = await graphRep.drawMermaidPng();
writeFile('graph.png', new Uint8Array(await image.arrayBuffer()));
app.invoke({ totalPrice: 0, cart: [] });
