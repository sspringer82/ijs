import { JsonOutputParser } from '@langchain/core/output_parsers';

const parser = new JsonOutputParser();

try {
  const parsed = await parser.parse('{"ok:true}');
} catch (err) {
  console.error('Parser failed:', err.message);
}
