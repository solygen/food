'use strict';

//http://www.opengtindb.org/index.php
////http://www.codecheck.info/


var content = $(document.body).find('.content');

//add meals
_.each(data.meals, function (meal) {
  var ing = _.map(meal.ingredients, function (ing) {
    return ing.name + (ing.unit ? ' (' + ing.quantity + ' ' + ing.unit + ')' : '');
  });
  var node = $('<tr>')
              .append(
                $('<td>')
                .text(meal.name),
                $('<td>').
                text(ing.join(', '))

              );
  content.append(node);
});

//add separator
content.append($('<hr>'));

//statistics
var hash = {};
_.each(data.meals, function (meal) {
  _.each(meal.ingredients, function (ing) {
    hash[ing.name] = (hash[ing.name] || 0) + 1;
  });
});

var list = [];
_.each(hash, function (count, key) {
  //list = list.concat(key + ' (' +  count + ')');
  list = list.concat('(' +  count + ') ' + key);
});


list.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
})

//draw statistics
_.each(list, function (line) {
  var node = $('<tr>')
              .append(
                $('<td>').
                text(line) 
              );
  content.append(node);
});