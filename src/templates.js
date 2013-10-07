
var templates = {
    meal: {
        name: 'unknown',
        flags: '',
        ingredients: [],
		steps: []
    },
    ingredient:  {
      name: 'unknown',
      unit: 'piece',
      weight: '?',
      price: 0,
      ean: []
    }
};

var data = {
  meals: [],
  ingredients : [
    {
      name: 'mozzarella',
      unit: 'piece',
      weight: '200g',
      price: 0.55,
      ean: [
        '20013295'
      ]
    },
    {
      name: 'paprika',
      unit: 'piece',
      weight: '200g',
      price: 0.50,
      ean: [
        '4712'
      ]
    }
  ],
}
