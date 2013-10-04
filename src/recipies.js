data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Linsengemüse',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'linsen'},
                {quantity: 3, name: 'kartoffeln'},
                {quantity: 1, name: 'fruehlingszwiebeln'}
            ]
        }
    )
);

data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Paprika Gehacktes',
            flags: '',
            ingredients: [
                {quantity: 1, name: 'mozarella'},
                {quantity: 3, name: 'paprika'},
                {quantity: 1, name: 'hackfleisch'},
                {quantity: 1, name: 'zwiebel'},
                {quantity: 1, name: 'frischkäse'}
            ]
        }
    )
);