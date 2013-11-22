
define('view-sidepanel', [], function () {

    'use strict';

    var stub = function () {
        return $('<div>').addClass('row').append(
                    $('<div>').addClass('col-md-2 col-lg-1'),
                    $('<div>').addClass('col-md-3 col-lg-2'),
                    $('<div>').addClass('col-md-7 col-lg-9')
                )
    };

    return function (meal) {
        var node, ing, steps;

        node = $('<div>').append(
                    $('<h1>').text(meal.name),
                    $('<h3>').text('Zutaten'),
                    ing = $('<div>').addClass('font'),
                    $('<h3>').text('Zubereitung'),
                    steps = $('<ul>').addClass('steps font')
                );

        _.each(meal.ingredients, function (obj) {
            var node = stub();
            $(node.children()[0]).text(obj.quantity);
            $(node.children()[1]).text(obj.unit);
            $(node.children()[2]).text(obj.name);
            ing.append(node);
        });

        _.each(meal.steps, function (line) {
            steps.append($('<li>').text(line));
        });

        return node;
    };
});
