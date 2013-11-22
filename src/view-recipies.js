define('view-recipies', ['recipies', 'view-sidepanel'], function (recipies, sidepanel) {

    'use strict';

    $(document.body).find('#shopping').on('click', function (e) {
          location.hash = '';
          var list = $(document.body).find('li.selected').find('.name')
          var meals = [];
          _.each(list, function (node) {
              meals.push(
                  recipies.get('meals', $(node).text())
              );
          });

          var stuff = recipies.ingredients(meals);
          var node = $('<div class="shopping">').append(
              $('<h1>').text('Einkaufsliste')
          );


          var keys = Object.keys(stuff);
          keys = keys.sort();

          _.each(keys, function (name) {
              var ing = stuff[name];
              _.each(ing, function (value, unit) {
                node.append(
                  $('<div>').text(name + ' (' + value + ' ' + unit + ')')
                );
              });
          });
          $(document.body).find('#sidepanel').empty().append(node).show();
          $(document.body).find('#main').css('float', 'left');
    });

    return function () {
        var self = this,
            list, node = $(document.body).find('#recipies'),
            items = [],
            $right = $(document.body).find('#sidepanel'),
            $left = $(document.body).find('#main'),
            meals = recipies.get('meals'),

            fnClick = function (e) {
                var name = $(e.target).hasClass('name') ? $(e.target).text() : $(e.target).find('.name').text(),
                    meal = recipies.get('meals', name);

                //checkbox
                if (e.target.type === 'checkbox') {
                  $(e.target).closest('li').toggleClass('selected');
                } else if (name === '') {
                  return;
                } else {
                  $right
                    .empty()
                    .append(
                      sidepanel(meal)
                    )
                    .show();
                  $left
                    .css('float', 'left');
                }
            },

            getMarkup = function() {
                return '<li class="row"><span class="box"><input type="checkbox" name="selected" value="true"></span><div class="name"></div><div class="ingredients hidden"></div></li>';
            },

            init = function () {
                list = new List('recipies', {item: getMarkup() }, items);
            };

        return {
          data: function () {
              var ing;
              _.each(meals, function (meal) {
                  ing = _.map(meal.ingredients, function (ing) {
                      return ing.name + (ing.unit ? ' (' + ing.quantity + ' ' + ing.unit + ')' : '');
                  });
                  items.push({name: meal.name, ingredients: ing.join(', ')});
              });
              init();
              $('#recipies').find('li').on('click', fnClick);
              return this;
          },
          get: function () {
              return list;
          },
          hide: function () {
              return node.hide();
          },
          show: function () {
              return node.show();
          }
        };
    };

});
