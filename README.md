# Setup

https://github.com/sspringer82/ijs

```bash
npx create-next-app@latest
```
 => accept the defaults

copy the backend folder from the repository 

```bash
npm install json-server
```

```json
{
  "scripts": {
    "backend": "json-server -p 3001 backend/data.json"
  }
}
```