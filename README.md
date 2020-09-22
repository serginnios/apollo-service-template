# apollo-service-template
Simple Microservice Template by Apollo GraphQL

Copy default.env file into .env, set variable values in it and run by `yarn dev`

To Debug using Visual Studio Code use the following configuration:

```{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}\\dist\\app.js",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ],
      "envFile": "${workspaceFolder}/.env"
    }
  ]
}
```
