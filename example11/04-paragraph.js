import { RunnableLambda } from "@langchain/core/runnables";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const chunkSize = 2000;
const chunkOverlap = 100;

const splitText = new RunnableLambda({
  async func(text) {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize,
      chunkOverlap,
      separators: ["\n\n"],
    });
    const texts = await splitter.splitText(text);
    return texts;
  },
});

const text = `The cat (Felis catus), also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a pet and working cat, but it also ranges freely as a feral cat, avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. Its retractable claws are adapted to killing small prey species such as mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator.

Cat communication includes meowing, purring, trilling, hissing, growling, grunting, and body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It secretes and perceives pheromones. Cat intelligence is evident in its ability to adapt, learn through observation, and solve problems.

Female domestic cats can have kittens from spring to late autumn in temperate zones and throughout the year in equatorial regions, with litter sizes often ranging from two to five kittens. Domestic cats are bred and shown at cat fancy events as registered pedigreed cats. Population control includes spaying and neutering, but pet abandonment has exploded the global feral cat population, which has driven the extinction of bird, mammal, and reptile species.`;

const splits = await splitText.invoke(text);

console.log(splits);
