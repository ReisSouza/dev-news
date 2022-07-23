This is a TypeScript [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using the default project configuration defined by [Reis Souza](https://github.com/ReisSouza).

## Getting Started

First, run the install dependences command
```bash
npm install
# or
yarn
```

After, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

run the development prismic:

```bash
npm run slicemachine
# or
yarn slicemachine
```
Open [http://localhost:9999](http://localhost:9999) with your browser to see the result.

run the development Webevents Stripe

yarn stripe

Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=idproject




You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `src/pages/api/hello.js`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Libraries in use

The following libraries were discussed and thought to be the fastest, easiest and simpler approach to quickly develop websites.

- **[Tailwind CSS](https://tailwindcss.com/)** + [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) + [Framer Motion](https://www.framer.com/motion/) + [CLSX](https://github.com/lukeed/clsx)
- **[SWR](https://swr.vercel.app/)** + [Axios](https://github.com/axios/axios)
- **[React Hook Form](https://react-hook-form.com/)** + [Zod](https://github.com/colinhacks/zod) + [Hook Form Devtools](https://react-hook-form.com/dev-tools)
- **[React Use](https://github.com/streamich/react-use)** + [React Aria](https://react-spectrum.adobe.com/react-aria/)

## Linting settings

Linting is done via Eslint with AirBnb TypeScript, Prettier and Next configurations.

There is also a pre-commit hook set up via [Husky](https://typicode.github.io/husky/) that lints all added files using [lint-staged](https://github.com/okonet/lint-staged).

## Project structure

Project should follow the structure below:

```
src
|
+-- assets            # assets folder can contain all the static data such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- context           # all of the global contexts
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries pre configured for the application
|
+-- pages             # next.js pages
|
+-- styles            # global styles
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

Read more details in [Bulletproof React documentation](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md). Just make sure to use `pages` folder instead of the suggested `routes` folder as Next.js uses `pages`.

Also, particular to our setup, components should live in their own folder, exported through an `index.ts` file, with their own CSS module, so that Next.js can work its magic.

---

Project structure, configuration and choice of library largely based on [Bulletproof React](https://github.com/alan2207/bulletproof-react), except for the use of barrel files because it [prevents tree-shaking from working](https://github.com/vercel/next.js/issues/12557).
