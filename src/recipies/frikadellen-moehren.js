data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Frikadellen und Möhren',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'hackfleisch'},
                {quantity: 1, name: 'kartoffeln'},
                {quantity: 1, name: 'moehren'}
            ]
        }
    )
);