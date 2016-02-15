var state = {};
var listeners = [];

if (module.hot && module.hot.data) {
  state =  module.hot.data.state || data;
  listeners = module.hot.data.listeners || listeners;
  listeners.forEach(function (listner) {
    listner();
  })
}


var storage = {
  put: function (key, value) {
    state[key] = value;
    listeners.forEach(function (listner) {
      listner();
    })
  },
  subscribe: function(callback) {
    listeners.push(callback);
    return function unsubscribe() {
      var index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  },
  get: function(key) {
    return state[key];
  }
}

module.exports = storage;

if (module.hot) {
  module.hot.dispose(function(_data) {
    _data.state = state;
    _data.listeners = listeners;
  })
}
