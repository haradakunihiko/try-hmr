// application entry point.

require('./init');
var todo = require('./todo');

todo();

if (module.hot) {
  module.hot.accept(function(err) {
    if (err) {
      console.error(err);
    }
  });
}
