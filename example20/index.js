import { ChatOllama } from '@langchain/ollama';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';

const chat = new ChatOllama({
  model: 'llama3.2:1b',
});
const parser = new StringOutputParser();

const systemTemplate = `Explain animals in one sentence.`;
const promptTemplate = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['user', '{question}'],
]);

const llmChain = RunnableSequence.from([promptTemplate, chat, parser]);

const animals = ['cow', 'chicken', 'cat'];
const results = await Promise.all(
  animals.map(async (a) => await llmChain.invoke({ question: a }))
);

console.log(results);
