This is a [Next.js](https://nextjs.org) project

## Newsletter AI tool

### Getting Started

To run the app you'll need to run the following commands in your terminal:

```bash
yarn
```
> install dependencies

```bash
yarn dev
```
> start the development server

you will also need to set up a `.env` file with the following variables:

```bash
OPENAI_API_KEY=your_openai_api_key
```

You can get your OpenAI API key from [OpenAI's website](https://platform.openai.com/signup).

## Available Scripts
In the project directory, you can run:
```bash
yarn dev
```
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```bash
yarn build
```
Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
```bash
yarn start
```
Runs the app in production mode.\
It will first build the app if it hasn't been built yet, and then start the server.
```bash
yarn lint
```
Runs the linter to check for any code style issues.

```bash
yarn lint:fix
```
Runs the linter and automatically fixes any fixable issues.

```bash
yarn test
```
Runs the test suite using Jest.
It will look for test files with the `.test.*` or `.spec.*` suffix and execute them.

### Structure

The project is structured as follows:
```
src/
├── pages/               # Next.js pages
│   ├── api/             # API routes
│   └── page.tsx         # Custom App component
```

**Components**

Components follow the a controller and view pattern, where the controller handles the logic and the view renders the UI.
```
components/
├── component-name/                      # The name of the component
│   ├── Component.controller.tsx         # The controller component
│   ├── Component.controller.test.ts     # The controller component test file
│   ├── Component.view.tsx               # The view component
│   ├── Component.test.tsx               # The view component test file
│   ├── types.ts                         # The types for the component
│   └── index.ts                         # A barrel file to export the component and types


```

### Dependencies
- **Next.js**: The framework for building the app.
- **React**: The library for building user interfaces.
- **TypeScript**: The language for writing type-safe code.
- **Mantine**: The UI library for building the app's components.
- **OpenAI**: The API for generating AI content.
- **Jest**: The testing framework for running tests.
- **ESLint**: The linter for checking code style and quality.
- **Prettier**: The code formatter for maintaining consistent code style.
