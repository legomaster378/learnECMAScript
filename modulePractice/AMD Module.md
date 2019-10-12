# AMD module

Whereas CommonJS is targeted at a server execution model, where there is no penalty for loading everything into memory at once, the Asynchronous Module Definition (AMD) system of module definition is specifically targeted at a browser execution model, where there are penalties from increased network latency.

The general strategy of AMD is for modules to declare their dependencies, and the module system running in the browser will fetch the dependencies on demand and execute the module that depends on them once they have all loaded.

One of ECMAScript 6’s most significant introductions was a specification for modules. The specification in many ways is simpler than its predecessor module loaders, and native browser support means that loader libraries and other preprocessing is not necessary. In many ways, ES6 module system unifies the best features of AMD and CommonJS into a single specification.
