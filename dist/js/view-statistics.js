//currently unused

define('view-statistics', ['data-recipies'], function (recipies) {

    'use strict';

    return function (data) {
        var node = $(document.body).find('#ingredients').hide(),
            items = [], list,
            summary = { type: {}, sideorder: {}};

        var getMarkup = function () {
            return '<div class="row list-group-item no-margin"><div class="name col s6"></div><div class="count col s6"></div></div>';
        };

        //init
        var init = function () {
            // debug
            //console.log(JSON.stringify(summary, undefined, 4));
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
                    // statistics for type and side order
                    _.each(meal.tags, function (tag) {
                        if (tag.indexOf('sideorder') > -1)
                            summary.sideorder[tag] = (summary.sideorder[tag] || 0) + 1;
                        else
                            summary.type[tag] = (summary.type[tag] || 0) + 1;
                    });

                });

                _.each(hash, function (count, key) {
                    list = list.concat({count: count, name: key});
                });

                list.sort(function (a, b) {
                    var attr = 'count';
                    //var attr = 'name';

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
