const lodash = require('lodash');
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];

var value = lodash.find(users, function(o) { return o.age < 40; });
console.log(lodash.filter(users, function(o) { return !o.active; }));