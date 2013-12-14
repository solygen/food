//currently unused

define('view-statistics', ['recipies'], function (recipies) {

    'use strict';

    return function (data) {
        var list, node = $(document.body).find('#ingredients').hide(), items = [];

        var getMarkup = function () {
            return '<div class="row list-group-item"><div class="name col-md-3"></div><div class="count col-md-2"></div></div>';
        };

        //init
        var init = function () {
            list = new List('ingredients', {item: getMarkup() }, items);
        };

        return {
            data: function () {
                var hash = {}, list = [];
                //count
                _.each(recipies.get('meals'), function (meal) {
                    _.each(meal.ingredients, function (ing) {
                        hash[ing.name] = (hash[ing.name] || 0) + 1;
                    });
                });

                _.each(hash, function (count, key) {
                    list = list.concat({count: count, name: key});
                });


                list.sort(function (a, b) {
                    var attr = 'count';
                    if (a[attr] < b[attr]) return 1;
                    if (a[attr] > b[attr]) return -1;
                    return 0;
                });

                //draw statistics
                _.each(list, function (ingr) {
                    items.push({name: ingr.name, count: ingr.count});
                });
                init();
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
