data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Gurkensuppe',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'gurken'},
                {quantity: 1, name: 'zwiebeln'}
            ]
        }
    )
);