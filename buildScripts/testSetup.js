//This file isn't transpiled, so must use CommonJS and E55

//Register babel to transpilebefore our tests run.
require('babel-register')();

//Distance webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
