// Global variables
const DEBUG_MODE = true; // Enable/Disable console logs

/**
 * Logger: enable/disable
 */
(function () {
  if (DEBUG_MODE === false) {
    // Window.alert()
    if (typeof (window.alert) !== 'undefined') {
      window.alert = function () {};
    }
    // Window.console.log()
    if (typeof (window.console) !== 'undefined') {
      window.console.log = function () {};
    }
  }
})();

console.log('Debug mode = true');
