## Starting Server
Perform the following steps:
1. Start the development server.
    ```bash
    npm run serve
    ```
1. When startup is complete, the console shows the following message:
    ```
    DONE Compiled successfully in *****ms
    
    App running at:
    - Local:   http://localhost:3000/
    - Network: http://***.***.***.***:3000/
    
    Note that the development build is not optimized.
    To create a production build, run npm run build.
    ```
1. Access the following URL in the Chrome.  
[http://localhost:3000](http://localhost:3000)

## Creating a Production Build
Perform the following command:
```bash
npm run build
```

## Project Map
The following figure is the map of this sample project.

```
- vDashboard
  + public          … Contains resouces of this project.
  - src
    + assets        … Contains source codes that Webpack doesn't need to build.
    + components    … Contains components of Vue.
    + ajax          … Implement the common library for Ajax.
    + router        … Define Vue Router.
    + store         … Define Vuex
    + views         … Define views of this project.
    - App.vue       … Define a base view of this project.
    - main.js       … Entry point.
  - babel.config    … Babel Configuration.
  - package.json    … Define npm packages.
  - vue.config.js   … Vue CLI Configuration.
```

## Views
There are the following views in this sample.

|View Name|File Name|Description|
|:---|:---|:---|
|Login View|``Login.vue``|The view for session authentication with username and password. This view is created and based on [the example of vue-material](https://github.com/vuematerial/examples).|
|Home View|``Home.vue``|The view showing search results.|
|About View|``About.vue``|The view showing this application information.|

## Libraries
This sample uses the following library.

|Library Name|Version|Description|
|:---|:---:|:---|
|vue-cli|5.0.8|The tool for Vue.js Development.|
|Vue.js|2.7.0|JavaScript Framework|
|Vue Router|3.6.5|Library for Routing.|
|Vuex|3.6.2|Flux library for Vue.js|
|axios|0.27.2|library for Ajax.|
|vue-material|1.0.0-beta-14|CSS Framework|
