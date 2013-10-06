data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Champignonpfännchen',
            flags: '',
            ingredients: [
                {quantity: 2, name: 'zwiebel'},
				{quantity: 1, name: 'champignon'},
				{quantity: 1, name: 'saure sahne'},
				{quantity: 1, name: 'schnittlauch'},
            ]
        }
    )
);
