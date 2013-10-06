data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Bolognese',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'hackfleisch'},
                {quantity: 1, name: 'spagetthi'},
                {quantity: 1, name: 'dosentomaten'},
                {quantity: 1, name: 'zwiebeln'}
            ]
        }
    )
);