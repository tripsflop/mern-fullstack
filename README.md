# mern-fullstack

# One Repo setup

- mkdir empty `root` dir
- `cd` and `npm init -y`
- add `"workspaces": ["client", "server"]` to `package.json`
- remove `main: index.js`
- add `scripts`:
  - `build: "cd client && npm run build"`
  - `start: "cd server && npm run start"`
- mkdir `server`
  - `cd server` dir
  - `npm init -y`
  - change `main` to `server.js`
  - add `scripts` : `"start": "node ."`
  - `npm install express mongoose dotenv`
  - create "Hello World" `server.js`
  - `require`
    - `path`
    - `express`
    - `mongoose`
  - Configure
    - `dotenv` for `MONGO_URI` and `PORT`
    - `mongoose`
  - Connect to `mongoose` with `MONGO_URI`
  - Add middleware
    - `express.json`
    - `express.static("../client/dist")`
  - Add `app.get("*", (req, res) => res.sendFile(path.resolve("../client/dist", "index.html")));` last route
  - Add `mongoose.connection.once("open", () => app.listen(PORT))`
- Back to `root` dir
- `npm create vite` -> `client` dir
  - `cd client` dir
  - `npm install react-router-dom`
  - Create `<Routes>`
  - Edit `vite.config.js`

```js
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react()],
});
```
