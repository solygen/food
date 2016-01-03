define('view-shopping', ['data-recipies'], function (recipies) {

    'use strict';

return {

    init: function (list) {
        $(document.body).find('#shopping').on('click', function (e) {
            location.hash = '';

            var meals = [];

            //add selected to meals
            _.each(list.get(), function (item) {
                var node = $(item.elm);
                if (node.hasClass('selected')) {
                    meals.push(
                        recipies.get('meals', node.find('.name').text())
                    );
                }
            });

            //create shopping list
            var stuff = recipies.ingredients(meals),
                node = $('<div class="shopping">').append(
                    $('<h1>').text('Einkaufsliste')
                ),
                plot = $('<div class="input-field col s12">').append(
                    $('<textarea id="textarea1" class="materialize-textarea" style="height: 132px;">'),
                    $('<label for="textarea1" class="active">').text('Einkaufsliste')
                );

            _.each(meals, function (meal) {
                node.append(
                    $('<div>').text(meal.name)
                );
            });
            node.append('<hr>');

            plot.appendTo(node);

            var keys = Object.keys(stuff);
            keys = keys.sort();

            _.each(keys, function (name) {
                var ing = stuff[name];
                _.each(ing, function (value, unit) {
                    plot.find('textarea').append(name + ' (' + value + ' ' + unit + ')' + '&#xA;');
                });
            });
            $(document.body).find('#sidepanel').empty().append(node).show();
            $(document.body).find('#main').css('float', 'left');
        });
        }
    }

});
