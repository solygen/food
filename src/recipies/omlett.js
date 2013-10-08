data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Omlett',
            flags: '',
            ingredients: [
                {quantity: 2, name: 'eier'},
				{quantity: 1, name: 'tomaten'},
				{quantity: 1, name: 'gekochter schinken'},
				{quantity: 1, name: 'mozarella'},
				{quantity: 1, name: 'sahne'},				
            ]
        }
    )
);
