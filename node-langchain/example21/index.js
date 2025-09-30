import { Ollama } from '@langchain/ollama';

const model = new Ollama({
  model: 'llama3.2:1b',
});

try {
  const response = model.invoke({
    question: 'What is an elephant? Answer in one sentence.',
  });
  console.log('Response from model:', await response);
} catch (error) {
  console.error('Error occurred while invoking model:', error);
}
