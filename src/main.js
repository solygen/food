'use strict';

//http://www.opengtindb.org/index.php
////http://www.codecheck.info/


var content = $(document.body).find('.content');

//add row
_.each(data.meals, function (meal) {
  var ing = _.map(meal.ingredients, function (ing) {
    return ing.name
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