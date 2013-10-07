data.meals.push(
    $.extend({},
        templates.meal || {},
        {
            name: 'Gemüsekuchen',
            flags: '',
            ingredients: [
                {quantity: 3, unit: 'stk', name: 'paprika'},
                {quantity: 400, unit: 'g', name: 'mehl'},
                {quantity: 4, unit: 'stk', name: 'frühlingszwiebeln'},
                {quantity: 100, unit: 'g', name: 'gouda'},
                {quantity: 4, unit: 'stk', name: 'eier'}
            ],
			steps: [
				"",
				""
			]
        }
    )
);
