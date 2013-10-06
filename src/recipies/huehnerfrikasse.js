data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Hühnerfrikassee',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'suppenhuhn'},
                {quantity: 1, name: 'erbsen'},
                {quantity: 1, name: 'sahne'}
            ]
        }
    )
);