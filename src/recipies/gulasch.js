data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Gulasch',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'gulasch'},
                {quantity: 1, name: 'pilze'},
                {quantity: 1, name: 'zwiebeln'}
            ]
        }
    )
);