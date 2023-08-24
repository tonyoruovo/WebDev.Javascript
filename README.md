# Summary
A project for a mock site and includes a sub-project for it's frontend.

# Backend description

On the backend it is a `node` project (project is located in the root of this folder) that uses `express` for it's http/https and REST abstraction and `mongodb` for it's database needs used through the ORM (**O**bject **R**elational **M**apper) `mongoose`.
## Project structure
```
web2
+---server
|   +---controller
|   |   +---home.js
|   |   +---origin.js
|   |   +---signin.js
|   |   \---users.js
|   +---data
|   |   +---models
|   |   |   +---account.js
|   |   |   \---origin.js
|   |   +---connect.js
|   |   +---hasher.js
|   |   \---user.js
|   +---middleware
|   |   +---auth.js
|   |   +---error.js
|   |   \---forceReload.js
|   +---routes
|   |   +---cors.js
|   |   +---home.js
|   |   +---signin.js
|   |   \---users.js
|   \---server.js
+---package-lock.json
+---package.json
+---private_key
+---root.js
```
## `web2/server`
Contains the most of the backend code.

### `web2/server/controller`
This folder houses all the code that setup the registering a user, signing them in and out, managing cross-origin request (from the frontend) and inspect (also monitors security, authourisation and authentication) and consume data. When invalid or malicious requests are sent to this requests are sent to this machine, this code directly resposible for error generating error messages reside here as well.

### `web2/server/data`
Contains database management and data related codes including storing hashes for sensitive data. Alot of the work that codes in `web2/controller` does with the database are delegated to codes in this folder.
#### `web2/server/data/models`
Contains code that defines the schemas and models that are used by the ORM.

### `web2/server/middleware`
Contains code for the middlewares used in `express`. Infact, each middleware has it's own file. The middlewares include:
- **Authourisation** which handles auth.
- **Error** which handles how error are instantiated and which message to map to which code, also decides what error code to send with the response.
- **Force reloader** an unsed reloader for dev purposes only. Currently just redirects a given request.

### `web2/server/routes`
Contains code that manages the routes of this backend such as consuming cors and auth middleware the protect the routes of this api, creating aliases for routes to each accessibility etc.

## Useful files

## `web2/package-lock.json`
Created from `package.json` by `npm` for this project.
## `web2/package.json`
Data relating to this project's structure, such as project name, dependencies, developer dependencies, build commands etc.
## `web2/private_key`
A cryptographic key.
## `web2/root.js`
Provides access to the root of this project's folder.