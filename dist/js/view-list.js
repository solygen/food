define('view-list', ['data-recipies', 'view-detail', 'view-statistics', 'view-shopping'], function (recipies, detail, statistics, shopping) {

    'use strict';

    var list;

    // $(document.body).find('#shopping').on('click', function (e) {
    //     location.hash = '';

    //     var meals = [];

    //     //add selected to meals
    //     _.each(list.get(), function (item) {
    //         var node = $(item.elm);
    //         if (node.hasClass('selected')) {
    //             meals.push(
    //                 recipies.get('meals', node.find('.name').text())
    //             );
    //         }
    //     });

    //     //create shopping list
    //     var stuff = recipies.ingredients(meals),
    //         node = $('<div class="shopping">').append(
    //             $('<h1>').text('Einkaufsliste')
    //         ),
    //         plot = $('<div class="input-field col s12">').append(
    //             $('<textarea id="textarea1" class="materialize-textarea" style="height: 132px;">'),
    //             $('<label for="textarea1" class="active">').text('Einkaufsliste')
    //         );

    //     _.each(meals, function (meal) {
    //         node.append(
    //             $('<div>').text(meal.name)
    //         );
    //     });
    //     node.append('<hr>');

    //     plot.appendTo(node);

    //     var keys = Object.keys(stuff);
    //     keys = keys.sort();

    //     _.each(keys, function (name) {
    //         var ing = stuff[name];
    //         _.each(ing, function (value, unit) {
    //             plot.find('textarea').append(name + ' (' + value + ' ' + unit + ')' + '&#xA;');
    //         });
    //     });
    //     $(document.body).find('#sidepanel').empty().append(node).show();
    //     $(document.body).find('#main').css('float', 'left');
    // });


    function compare(a, b) {
        function getKey(item) {
            var str = localStorage.getItem(item.name), dmy, d, now;
            if (str) {
                dmy = str.split('.');
                d = new Date(dmy[2], dmy[1] - 1, dmy[0], 23, 59, 59);
                now = new Date();
                if (d >= now) {
                    d =  new Date(1999, d.getMonth(), d.getDate());
                }
            } else {
                d = new Date('2000-01-01') ;
            }
            return d.toISOString() + '.' + item.name;
        }
        return getKey(a).localeCompare(getKey(b));
    }

    return function () {
        var node = $(document.body).find('#recipies'),
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
                          detail(meal)
                        )
                        .show();
                    $left
                      .css('float', 'left');
                }
            },

            getMarkup = function () {
                return '<li class="row"><div style="float:left; width: 430px;"><span class="box"><input type="checkbox" name="selected" value="true"><label style="vertical-align: middle;"></label></span><div class="name"></div></div><div class="date" style="float:right; font-size: 10pt;"><input type="input" class="datepicker" size="6" style="border: 0px"></div><div class="ingredients hidden"></div></li>';
            },

            init = function () {
                var num = 0;
                //sort
                items.sort(compare);
                //create list
                list = new List('recipies', {item: getMarkup() }, items);
                shopping.init(list);
                // hack to add tag value as class name
                _.each(list.items, function (item) {
                    var tag = $(item.elm).find('.tag').text().replace(' ', '-').toLowerCase();
                    //$(item.elm).addClass(tag);
                    $(item.elm).find('.tag').empty();
                    $(item.elm).find('.tag').addClass(tag);
                    // label ids
                    var id = 'box-' + num++;
                    $(item.elm).find('.box')
                        .find('input').attr('id', id)
                        .end()
                        .find('label').attr('for', id)
                        .append(
                            )
                });

                //add datepicker
                $('.datepicker').each(function (index, node) {
                    var id = $(node).parent().parent().find('.name').text();
                    var value = localStorage.getItem(id);
                    $(node).val(value || '');
                });

                //init datepicker
                $('.datepicker').datepicker({
                    language: "de",
                    autoclose: true,
                    clearBtn: true,
                    todayBtn: true,
                    todayHighlight: true,
                    weekStart: 1
                }).on('changeDate', function (e) {
                   var id = $(e.target).parent().parent().find('.name').text();
                   localStorage.setItem(id, $(e.target).val());
                }).on('clearDate', function (e) {
                   var id = $(e.target).parent().parent().find('.name').text();
                   localStorage.removeItem(id);
                });
            };

        return {
            data: function () {
                var ing;
                _.each(meals, function (meal) {
                    ing = _.map(meal.ingredients, function (ing) {
                        return ing.name + (ing.unit ? ' (' + ing.quantity + ' ' + ing.unit + ')' : '');
                    });
                    items.push({name: meal.name, ingredients: ing.join(', '), tag: meal.tags[0]});
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
