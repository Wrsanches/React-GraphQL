# Front

The project was built using [React](https://reactjs.org) v17.0.2 and [axios](https://github.com/axios/axios) for the communication between client and server.

### Dependencies

In addition to the dependencies listed above, the project uses a few other repositories to work properly:

- [Prop Types](https://www.npmjs.com/package/prop-types) - Runtime type checking for React props and similar objects.
- [Styled Components](https://www.npmjs.com/package/styled-components) - Enhance CSS for styling React component.
- [React Router](https://www.npmjs.com/package/react-router) - Declarative routing for React.
- [React Helmet](https://www.npmjs.com/package/react-helmet) - Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.
- [React Redux](https://www.npmjs.com/package/react-redux) - Official React bindings for Redux.
- [Redux Saga](https://www.npmjs.com/package/redux-saga) - An intuitive Redux side effect manager.
- [Redux Persist](https://www.npmjs.com/package/redux-persist) - Persist and rehydrate a redux store.

# Back

The project was built using [Node.js](https://nodejs.org/en) v12.18.1 LTS, [Typescript](https://www.typescriptlang.org) v3.9.7 and [GraphQL](https://graphql.org/).

For this project I tried to use as few libraries as possible to manage what is being done behind and to make the communication between both sides faster. So that the end user feels the least lag possible.

### Dependencies

In addition to the dependencies listed above, the project uses a few other repositories to work properly:

- [TypeORM](https://www.npmjs.com/package/typeorm) - TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8).
- [PG](https://www.npmjs.com/package/pg) - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens.
- [Apollo Server](https://www.npmjs.com/package/apollo-server) - Apollo Server is a community-maintained open-source GraphQL server.

### Test

Run `yarn test`

### Docker

To make a Dockerfile and consequently a build optimized and keeping the image size down, was used "multi-stage builds" feature from Docker (requiring version 17.05 or higher). After the build is finished, it's ideal to remove all the dependencies used on build and keep just the production image, leaving the server clean.
