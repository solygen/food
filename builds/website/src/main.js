requirejs.config({
    paths: {
        framework: '../lib'
    }
});

define('main', ['recipies', 'view-recipies'], function (data, listview, statistics) {

    'use strict';

    //http://www.opengtindb.org/index.php
    //http://www.codecheck.info/

    var hash = {},
        rec = listview().data();
        //ing = statistics().data();

    $(window).on('hashchange', function () {
        if (location.hash.substr(0, 1) === '#' && location.hash.length > 1) {
            if (location.hash === '#recipies') {
                rec.show();
                //ing.hide();
            } else {
                rec.show();
                //ing.hide();
            }
        }
    });
});
