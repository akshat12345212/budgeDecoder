# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Running the local chat proxy

1. Copy `.env.example` to `.env` and set the `VITE_GEMINI_API_KEY` along with your Firebase settings.
2. Start the backend that keeps the Gemini key secret: `npm run proxy`. The proxy listens on the port defined by `PROXY_PORT` and exposes `/api/chat`.
3. In a second terminal, run `npm run dev`. The Vite dev server will proxy `/api` requests to the chat service thanks to `vite.config.js`.

If you deploy the frontend separately, run the proxy on a server or serverless function that also sets `VITE_CHAT_PROXY_URL` to the hosted endpoint and keeps the key out of the browser.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
