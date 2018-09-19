/* global requirejs */

requirejs.config({
  'baseUrl': 'js/lib',
  'paths': {
    'app': '../app',
    'jquery': '//code.jquery.com/jquery-3.3.1.min'
  }
});

// Load the main app module to start the app
requirejs(['app/main']);
