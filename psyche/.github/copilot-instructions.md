# Copilot / AI Agent Instructions for Psyche

This file gives focused, actionable guidance for AI coding agents working in this repository.

Big picture
- **Type & framework:** Angular application (Angular 20) with optional Server-Side Rendering (SSR) using `@angular/ssr` and an Express entrypoint in `src/server.ts`.
- **Entrypoints:** `src/main.ts` (browser/client bootstrap) and `src/main.server.ts` (server bootstrap). The Express server is implemented in `src/server.ts` and exports `reqHandler` for integrations.
- **Build output:** `dist/psyche/browser` (static browser assets) and `dist/psyche/server` (server bundle). The `package.json` script `serve:ssr:psyche` runs `node dist/psyche/server/server.mjs` to serve a built SSR app.

Developer workflows & commands (discoverable)
- Development server: `npm start` -> runs `ng serve` (see `package.json` `start`).
- Build: `npm run build` -> runs `ng build` (see `package.json`). For SSR, the project is configured with `server` and `ssr.entry` in `angular.json` (see `architect.build.options.server` and `ssr.entry`). The built server bundle that `serve:ssr:psyche` expects is under `dist/psyche/server/server.mjs`.
- Tests: `npm test` -> runs `ng test` (Karma). Note: project schematics default to `skipTests: true`, so generated components often omit spec files.

Project structure & patterns to know
- `src/app/` is the application root. The top-level component is `src/app/app.ts` using Angular `signal()` for local state (example: `title = signal('psyche')`).
- Routing: `src/app/app.routes.ts` (client routes) and `src/app/app.routes.server.ts` (server-specific routing hooks). Look at `src/app/vistas/pagina-inicio/pagina-inicio` for a concrete route/component example.
- Components: kept under `src/app/componentes/` (e.g. `navegacion`, `pie-pagina`). Templates are `.html`, styles are `.scss` (see global `src/styles.scss` and per-component scss files).
- SSR integration: `src/server.ts` uses `AngularNodeAppEngine` and `createNodeRequestHandler` from `@angular/ssr/node`. Static assets are served from `dist/.../browser` and all other requests are passed to the Angular engine.

Conventions & decisions reflected in config
- Styles: `inlineStyleLanguage` set to `scss` in `angular.json` and components use `.scss` files.
- Tests: schematics in `angular.json` set `skipTests: true` by default — expect many components without spec files.
- Prettier: configured in `package.json` with `printWidth: 100` and `singleQuote: true` (HTML parser override). Respect these settings when formatting.

Where to make changes
- UI components & views: `src/app/componentes/*` and `src/app/vistas/*`.
- App shell and routing: `src/app/app.ts`, `src/app/app.html`, `src/app/app.routes.ts`.
- Server / API endpoints: add or modify Express handlers inside `src/server.ts`. This file also controls static file serving and the final request handling path for SSR.

Quick examples for agents
- Add a route: update `src/app/app.routes.ts` and place the component under `src/app/vistas/<name>/`.
- Add a server API endpoint: in `src/server.ts` add `app.get('/api/whatever', (req,res)=>{...})` before the `app.use((req,res,next)=>{...})` handler.
- Serve additional static assets: add files to `public/` (they are copied as assets per `angular.json`).

Notes & caveats
- Do not assume all generated components have tests; if adding tests, create Karma/Jasmine specs manually.
- The SSR build/serve flow requires building both browser and server artifacts; the repository already exposes a `serve:ssr:psyche` runner for the server bundle that ends up at `dist/psyche/server/server.mjs`.
- Keep changes minimal and consistent with existing patterns (SCSS, signals, route organization).

If anything here is unclear or you want additional examples (CI script, explicit SSR build commands, or test guidance), tell me which area to expand.
