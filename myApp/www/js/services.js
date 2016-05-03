angular.module('starter.services', [])

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      friends.splice(friends.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(chatId)) {
          return friends[i];
        }
      }
      return null;
    }
  };
});
