data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Spinat',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'spinat'},
                {quantity: 1, name: 'kartoffeln'},
                {quantity: 1, name: 'zwiebeln'}
            ]
        }
    )
);