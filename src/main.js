'use strict';

//http://www.opengtindb.org/index.php
//http://www.codecheck.info/

var recipies = $(document.body).find('.recipies').hide(),
    ing,
    node;
    ingredients = $(document.body).find('.ingredients').hide(),
    hash = {},
    list = [];

$(window).on('hashchange', function() {
    // Alerts every time the hash changes!
    if (location.hash.substr(0, 1) === '#' && location.hash.length > 1) {
      if (location.hash === '#recipies') {
        recipies.show();
        ingredients.hide();
      } else if (location.hash === '#ingredients') {
        ingredients.show();
        recipies.hide();
      } else {
        ingredients.hide();
        recipies.hide();
      }
    }
});




//add meals
_.each(data.meals, function (meal) {
  ing = _.map(meal.ingredients, function (ing) {
    return ing.name + (ing.unit ? ' (' + ing.quantity + ' ' + ing.unit + ')' : '');
  });
  node = $('<tr>')
              .append(
                $('<td>')
                .text(meal.name),
                $('<td>').
                text(ing.join(', '))
              );
  recipies.find('.content').append(node);
});

//count
_.each(data.meals, function (meal) {
  _.each(meal.ingredients, function (ing) {
    hash[ing.name] = (hash[ing.name] || 0) + 1;
  });
});

_.each(hash, function (count, key) {
  list = list.concat({count: count, name: key});
});


list.sort(function(a, b) {
    var attr = 'count';
    if(a[attr] < b[attr]) return 1;
    if(a[attr] > b[attr]) return -1;
    return 0;
})

//draw statistics
_.each(list, function (ingr) {
    node = $('<tr>')
              .append(
                $('<td>')
                .text(ingr.name),
                $('<td>').
                text(ingr.count)
              );
  ingredients.find('.content').append(node);
});
