# Code Challenge
## Web client architecture
The web client is built using `Create React App` and TypeScript. Please check [here](web-client/README.md) for more details.

All the React components inside the `src/components` folder we're created as pure functional components. This make tests easier to write and the components easier to understand.

### Styles

SASS is used as it gives more flexibility for writing an scalable CSS architecture.

### Routing
The `react-router` library is used to handle the routing logic.

When navigating to a new page some information is passed using the url query params or path params. This makes the pages self contained and avoid the use of a global state.

### Domain
A `src/domain` folder is created to host all the domain entities to be used by the app. This also includes the `ItemService` interface that defines the allowed operations for interacting with the backend services.

If a component needs to perform an http request, the service is provided as a prop and the component will call the propper method.
This make the components to depend on the interface and not on the http provider used (axios, fetch, etc).

### Error handling
Inside the `src/domain/error` folder a common error class is created to unify all the error responses from the backend.
The components know about this class and all the api http related logic will be hidden.

## Server
The api is built using node and express and TypeScript.

### DTO
Inside the `src/DTO` folder, all the domain transfer objects are defined. This will be the contract with the web client.

Inside this folder the domain error type and the posible error codes are also defined.

### Error handling
A common error handler is created to handle all uncaught exceptions. 

The controllers can also throw app domain error when needed.



