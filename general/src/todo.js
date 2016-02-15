var storage = require('./storage');

function render() {
  var data = storage.get('todo');

  var $ul = document.createElement('ul');
  $ul.id = 'ul';

  if (data) {
    for (var i = 0; i < data.length; i++ ) {
      var $li = document.createElement('li');
      $li.innerHTML = data[i] + '!!';
      $ul.appendChild($li);
    }

    var $previousUl = document.getElementById('ul');
    if ($previousUl) {
      document.getElementById('content').replaceChild($ul, $previousUl);
    } else {
      document.getElementById('content').appendChild($ul);
    }
  };
}

function handleOnClick() {
  var message =  document.getElementById('input').value ;
  var todo = storage.get('todo') || []; 
  storage.put('todo', [...todo, message]); 
}

var unsubscribe;

function init() {
  unsubscriber = storage.subscribe(render);
  document.getElementById('add').addEventListener('click', handleOnClick);
  render();
}

module.exports = init;

if (module.hot) {
  module.hot.dispose(function() {
    document.getElementById('add').removeEventListener('click', handleOnClick);
    if (unsubscribe) {
      unsubscribe();
    }
  })
}
