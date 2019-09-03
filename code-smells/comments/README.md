# clean-code-school > code smells > comments

<!-- vscode-markdown-toc -->
* 1. [Type of code smell](#Typeofcodesmell)
* 2. [Description](#Description)
	* 2.1. [Recognition](#Recognition)
	* 2.2. [Refactoring](#Refactoring)
* 3. [Code execution](#Codeexecution)
* 4. [Exceptions](#Exceptions)
	* 4.1. [JSDoc](#JSDoc)
	* 4.2. [Swagger](#Swagger)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Typeofcodesmell'></a>Type of code smell

![Dispensables: code that seems to have no purpose should not be there smells like dispensability.](./resources/dispensables.jpeg?raw=true)

##  2. <a name='Description'></a>Description

![Comments may clarify the intent of code but may obscure as well. They are often a sign of bad naming, long methods, or other smells of bad code.](./resources/comments.jpeg?raw=true)

###  2.1. <a name='Recognition'></a>Recognition

  - Comments that explain variables, methods, or steps in methods.

![Context](./resources/context.jpg?raw=true)

###  2.2. <a name='Refactoring'></a>Refactoring

  1. [Extract Method](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/extract-method)
  2. Rename Method / Field
  3. Introduce Assertion


##  3. <a name='Codeexecution'></a>Code execution

To run code smell:

```bash
cd code-smells/comments/before
node before.js
```

To run code with code smell fixed:

```bash
cd code-smells/comments/after
node after.js
```

##  4. <a name='Exceptions'></a>Exceptions

We have to distinguish between comments used to **explain code** and comments used for **documentation**.
Some documentation could even be used for e2e tests and validation.

We'll see some **examples** below:

###  4.1. <a name='JSDoc'></a>JSDoc

[JSDoc old](https://jsdoc.app/) | [JSDoc new](https://devdocs.io/jsdoc/)

Sometimes code is developed as an API for others to be used, so it's important to generate a good documentation so the API can be used.

To **generate an API documentation** from JavaScript code you can use *JSDoc*: [GitHub](https://github.com/jsdoc/jsdoc) | [npm](https://www.npmjs.com/package/jsdoc).

In this example, there is a small API [here](./after/utils_api.js).

The documentation can be generated running:

```bash
cd code-smells/comments
npm run generate-api-docs
```

After running that command, the generated documentation can be checked [here](./after/api/generated/index.html).

###  4.2. <a name='Swagger'></a>Swagger

[Swagger](https://swagger.io/)

To **generate swagger documentation** and UI based on express existing routes you can use *express-swagger-generator*: [GitHub](https://github.com/pgroot/express-swagger-generator) | [npm](https://www.npmjs.com/package/express-swagger-generator).

To **validate** a swagger model you can use *swagger-model-validator*: [GitHub](https://github.com/swagger-model-validator/swagger-model-validator) | [npm](https://www.npmjs.com/package/swagger-model-validator).

In this example, there is a small express server documented with swagger [here](./exceptions/swagger/index.js).

The documentation can be checked by running the server:

```bash
cd code-smells/comments/exceptions/swagger
node index.js
```

And going [here](http://localhost:3000/docs/api).
