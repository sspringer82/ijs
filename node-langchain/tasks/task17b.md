# Task: Test LangChain Tool `getAnimalFact`

### Goal

Write automated tests for a LangChain tool that provides fun facts about animals.

### Steps

1. **Initialize project**

   - Ensure `"type": "module"` is set in `package.json`.
   - Install required packages:
     - `@langchain/core`
     - `zod`
     - Node's built-in `node:test` module (or another test framework).

2. **Create the tool**

   - Define a `tool` using LangChain’s `tool()` helper.
   - Implement a simple mapping of animal names to fun facts.
   - Add a fallback response for unknown animals.

3. **Write test cases**

   - Verify facts for known animals (`cow`, `chicken`, `cat`).
   - Check that uppercase input is normalized correctly.
   - Confirm fallback behavior for unknown or empty strings.

4. **Run tests**

   - Execute `node --test` or your test runner.
   - Confirm all assertions pass.
