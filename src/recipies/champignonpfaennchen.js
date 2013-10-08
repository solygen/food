data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Champignonpfännchen',
            flags: '',
            ingredients: [
                {quantity: 2, unit: 'stk',  name: 'zwiebeln'},
				{quantity: 400, unit: 'gramm', name: 'champignons'},
				{quantity: 200, unit: 'gramm', name: 'saure sahne'},
				{quantity: 4, unit: 'stk', name: 'schnittlauch'},
            ]
        }
    )
);
