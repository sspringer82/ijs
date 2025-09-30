# Task: Use LangChain with Ollama and Runnable Sequences with Secure Caching

### Goal

Demonstrate how to use a custom secure in-memory cache with LangChain’s Ollama model to store and retrieve responses using hashed keys.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`

2. **Create a secure cache**

   - Extend `InMemoryCache` from LangChain.
   - Override the `key()` method to hash keys using SHA-256 for added security.

3. **Instantiate the Ollama model**

   - Provide the secure cache instance to the `Ollama` constructor.
   - Choose a model, e.g., `"llama3.2:1b"`.

4. **Invoke the model**

   - Call `invoke()` with a prompt such as `"Tell me a joke"`.
   - Observe first-time latency and cached response on subsequent calls.

5. **Run and verify**

   - Execute the script with Node.
   - Verify that the second call is faster due to caching.
   - Check that outputs are consistent and properly returned from the cache.
