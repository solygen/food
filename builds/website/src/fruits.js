define('fruits', [], function () {

    'use strict';

    var data = {
            meals: []
        },
        templates = {
            meal: {
                name: 'unknown',
                flags: '',
                ingredients: [],
                steps: []
            },
            ingredient:  {
                quantity: 1,
                unit: 'stk',
                name: 'unknown',
                price: 0,
                season: '111111111111',
                ean: []
            }
        };

    //http://www.chefkoch.de/rezepte/198321083838546/Backofenkartoffeln-einfach-und-lecker.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Backofenkartoffeln',
                flags: '',
                ingredients: [
                    {quantity: 1000, unit: 'gr', name: 'Kartoffel(n)'},
                    {quantity: 1, unit: 'd', name: 'Paprikapulver'},
                    {quantity: 1, unit: 'd', name: 'Pfeffer, gemahlen'},
                    {quantity: 1, unit: 'd', name: 'Oregano'},
                    {quantity: 1, unit: 'd', name: 'Knoblauchgranulat'},
                    {quantity: 1, unit: 'el', name: 'Olivenöl'}
                ],
                steps: [
                    'Die Kartoffeln schrubben und in Spalten schneiden. Danach gebe ich sie in eine Gefriertüte.Dann das Öl und die Gewürze, je nach Geschmack, dazu. Die Tüte zuhalten oder mit einem Gummi verschließen und kräftig schütteln, so dass alle Kartoffeln etwas von den Gewürzen abbekommen haben.Auf einem Backblech mit Backpapier verteilen und bei 200 Grad Umluft ca. 1/2 bis Stunde backen.'
                ]
            }
        )
    );


});
