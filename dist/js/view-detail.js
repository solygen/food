
define('view-detail', [], function () {

    'use strict';

    var stub = function () {
        return $('<ul>').addClass('row ingrediant').append(
                    $('<li>').addClass('col s2 right-align'),
                    $('<li>').addClass('col s2'),
                    $('<li>').addClass('col s8 ')
                );
    };

    return function (meal) {
        var node, ing, steps;

        var link = meal.steps[0] || '';

        // only link
        if (link.indexOf('http://') === 0) {
            return $('<div class="recipe">').append(
                    $('<h1>').text(meal.name),
                    $('<a href="'+ link + '" class="link">').text(link)
                );
        }


        node = $('<div class="recipe row">').append(
                    $('<h1>').text(meal.name),
                    $('<div class="col s5">').append(
                        $('<h3>').text('Zutaten'),
                        ing = $('<div>').addClass('font')
                    ),
                    $('<div class="col s7">').append(
                        meal.steps.length ? $('<h3>').text('Zubereitung') : $(),
                        steps = $('<ol>').addClass('steps')
                    )
                );

        _.each(meal.ingredients, function (obj) {
            var node = stub();
            $(node.children()[0]).text(obj.quantity);
            $(node.children()[1]).text(obj.unit);
            $(node.children()[2]).text(obj.name);
            ing.append(node);
        });

        _.each(meal.steps, function (line) {
            var text = line.replace(/(\([^)]+\))/, '<b>$1</b>');
            steps.append($('<li>').html(text));
        });

        steps.on('click', 'li', function (e) {
            $(e.target).closest('li').toggleClass('done');
        });

        ing.on('click', '.row', function (e) {
            $(e.target).closest('.row').toggleClass('done');
        });

        return node;
    };
});
