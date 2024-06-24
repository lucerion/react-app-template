# React app template

Packages:

* [React](https://reactjs.org) - library for building user interfaces
* [webpack](https://webpack.js.org) - module bundler. Support CSS, HTML, dotenv and environment variables
* [Babel](https://babeljs.io) - toolchain for converting ECMAScript 2015+ code into a backwards compatible version
    of JavaScript in current and older browsers/environments
* [eslint](https://www.npmjs.com/package/eslint) - linter

## Setup

### Locally

* Install dependencies: `yarn install`
* Run application: `yarn start`
* Open [http://localhost:8000](http://localhost:8000) in your browser.

### Docker

* [Install Docker](https://docs.docker.com/get-docker/) on your machine.
* Build image: `docker build -t react-app-template .`
* Run application: `docker run -p 8000:8000 react-app-template`
* Open [http://localhost:8000](http://localhost:8000) in your browser.

## License

[BSD-3-Clause](LICENSE)
