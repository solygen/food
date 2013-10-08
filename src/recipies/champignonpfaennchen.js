data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Champignonpfännchen',
            flags: '',
            ingredients: [
                {quantity: 2, name: 'zwiebeln'},
				{quantity: 1, name: 'champignons'},
				{quantity: 1, name: 'saure sahne'},
				{quantity: 1, name: 'schnittlauch'},
            ]
        }
    )
);
