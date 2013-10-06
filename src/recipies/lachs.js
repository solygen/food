data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Lachs',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'lachs'},
                {quantity: 1, name: 'nudeln'},
                {quantity: 1, name: 'sahne'},
                {quantity: 1, name: 'frischkäse'}
            ]
        }
    )
);