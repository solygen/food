data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Linsengemüse',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'linsen'},
                {quantity: 3, name: 'kartoffeln'},
                {quantity: 1, name: 'frühlingszwiebeln'}
            ]
        }
    )
);
