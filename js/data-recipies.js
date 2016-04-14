define('data-recipies', [], function () {

    'use strict';

    // client
    //
    // collections:
    //      recipies
    //      ingrediants (base for clones)
    //
    // model
    //      recipe
    //          ingrediants collection (extended from global)
    //
    // node.server handles sync, get, etc.
    // JSON database

    var data = {
            meals: []
        },
        templates = {
            meal: {
                name: 'unknown',
                ingredients: [],
                steps: [],
                tags: []
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

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hähnchen mit Karotten-Paprika-Reis (TM)',
                tags: [
                    'Helles Fleisch'
                ],
                ingredients: [
                    {quantity: 400, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 300, unit: 'gr', name: 'Möhren'},
                    {quantity: 150, unit: 'gr', name: 'Paprika'},
                    {quantity: 35, unit: 'gr', name: 'Öl'},
                    {quantity: 200, unit: 'gr', name: 'Reis'},
                    {quantity: 100, unit: 'ml', name: 'Kondensmilch (4%)'},
                    {quantity: 20, unit: 'gr', name: 'Speisestärke'},
                    {quantity: 15, unit: 'gr', name: 'Schnittlauch'},
                ],
                steps: [
                    'Hähnchenscheiben in eine flache Schale legen',
                    '30g. Öl, 1/2 TL Salz, 1/4 TL Pfeffer,Zitronenschale und 1/2 Paprika Pulver in den Mixtopf geben, 10Sek./St.5 verrühren, über den Hähnchenscheiben verteilen, mischen und 30 Min im Kühlschrank marinieren. Mixtopf spülen.',
                    'Möhren und Paprikastücke in den Mixtopf geben, 4 Sek./St. 5 zerkleinern und in die Varoma-Behälter geben.',
                    'Brühwürfel und 1 TL Öl (5g) in den Mixtopf geben, Gareinsatz einhängen, Reis einwiegen und Wasser über den Reis in den Mixtopf einwiegen.',
                    'Varoma-Behälter aufsetzen, Varoma-Einlegeboden einsetzen, Hähnchenfleisch darauf verteilen, Varoma verschließen und 25Min./Varoma/ St.1 garen.',
                    'Varoma absetzen, Gareinsatz entnehmen, Möhren,Paprika und Reis gemeinsam in eine Schüssel umfühlen und vermishen.Hähnchen ebenfalls umfühlen und alles warm stellen. Mixtopf leeren,Garflüsssigkeit dabei auffangen.',
                    '400g Garflüssigkeit (ggf. mit Wasser auffüllen), Kondensmilch, 1/2 TL Salz, 1/2 TL Pfeffer,1/2 TL Paprikapulver und Speisestärke in den Mixtopf geben und 5 Sec./St. 5 verrühren.',
                    'Schnittlauchröllchen zugeben, 4 Min.30sec./100°C/ St.2 aufkochen, abschmecken und zu Paprika-Möhren-Reis und Hänchen Servieren.'
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/198321083838546/Backofenkartoffeln-einfach-und-lecker.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Backofenkartoffeln',
                tags: [
                    'vegetarisch',
                    'sideorder: kartoffeln'
                ],
                ingredients: [
                    {quantity: 1000, unit: 'gr', name: 'Kartoffeln'},
                    {quantity: 1, unit: 'd', name: 'Paprikapulver'},
                    {quantity: 1, unit: 'd', name: 'Pfeffer'},
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

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Bandnudeln in Lachs-Sahne Soße',
                tags: [
                    'vegetarisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 250, unit: 'gr',  name: 'Bandnudeln'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {quantity: 5, unit: 'gr', name: 'Butter'},
                    {quantity: 10, unit: 'gr', name: 'Zitronensaft'},
                    {quantity: 350, unit: 'gr', name: 'Milch'},
                    {quantity: 1, unit: 'stk', name: 'Brühwürfel'},
                    {quantity: 30, unit: 'gr', name: 'Mehl'},
                    {quantity: 0.5, unit: 'tl', name: 'Salz'},
                    {quantity: 0.5, unit: 'tl', name: 'Muskatnuss'},
                    {quantity: 0.25, unit: 'tl', name: 'Pfeffer'},
                    {quantity: 250, unit: 'gr', name: 'Lachs (TK)'},
                    {quantity: 15, unit: 'gr', name: 'Zitronensaft'},
                    {quantity: 0.25, unit: 'tl', name: 'Dill'}
                ],
                steps: [
                    '250 g Bandnudeln nach Packungsanweisung kochen',
                    '1 Knoblauchzehe (6 Sek | Stufe 6) und mit dem Spatel Knoblauch nach unten schieben',
                    '5 g Butter zugeben (3 Min | Varoma | Stufe 1)',
                    '10 g Zitronensaft, 350 g Milch, 1 Würfel Gemüsebrühe, 30 g Mehl, 1/2 TL Salz, 1/2 TL Muskatnuss und 1/4 TL Pfeffer zugeben und (6 Min | 100 Grad | Stufe 2)',
                    'Lachs in ca. 15 Würfelstücke schneiden',
                    '250 g Lachsstücke, 15 g Zitronensaft und 1 EL Dillspitzen zugeben und (7 Min | 90 Grad | Sanftrührstufe, Linkslauf)'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Porree-Käse-Kaiserschmarn (TM)',
                tags: [
                    'vegetarisch'
                ],
                ingredients: [
                    {quantity: 150, unit: 'gr',  name: 'Porree'},
                    {quantity: 200, unit: 'gr', name: 'Gouda'},
                    {quantity: 3, unit: 'el', name: 'Petersilie'},
                    {quantity: 6, unit: 'stk', name: 'Ei(er)'},
                    {quantity: 1, unit: 'tl', name: 'Salz'},
                    {quantity: 370, unit: 'gr', name: 'Milch'},
                    {quantity: 180, unit: 'gr', name: 'Mehl'},
                    {quantity: 0.25, unit: 'tl', name: 'Muskatnuss'},
                    {quantity: 0.25, unit: 'tl', name: 'Pfeffer'}
                ],
                steps: [
                    'Porree in Ringe schneiden, Gouda in Stücke, Eier trennen',
                    'Porree in den Mixtopf geben, zerkleinern (5 Sek | Stufe 5) und umfüllen',
                    'Gouda in den Mixtopf geben, zerkleinern (5 Sek | Stufe 7) und in eine große Schüssel (ca. 2 l) umfüllen',
                    'Petersilie in den Mixtopf geben, hacken (3 Sek | Stufe 8) und in die große Schüssel umfüllen',
                    'Mixtopf spülen',
                    'Rühraufsatz einsetzen',
                    'Eiweiß und Salz inden Mixtopf geben und (5 Min | Stufe 3.5) steif schlafen',
                    'Rühraufsatz entfernen',
                    'Milch, Eigelb, Mehl, Muskat und Pfeffer in den Mixtopf geben (30 Sek | Stufe 4) mischen, in die große Schüssel geben und mit einer Gabel alles vorsichtig vermischen',
                    'Etwas Öl in einer Pfanne auf dem Herd erhitzen, die Hälfte des Porrees darin anbraten und die Hälfte des Teiges darübergeben.',
                    'Wenn der Teig stockt, Pfannkuchen erst halbieren, dann beide Hälften wenden, mit zwei Gabeln in kleine Stücke teilen, fertig backen, umfüllen und warm stellen',
                    'Mit dem restlichen Porree und Teige genauso verfahren'
                ]
            }
        )
    );

    // http://www.rezeptwelt.de/hauptgerichte-mit-fleisch-rezepte/weltbeste-lasagne/159765
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Lasagne (TM)',
                tags: [
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 150, unit: 'gr',  name: 'Gouda'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 2, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {quantity: 2, unit: 'stk', name: 'Möhren'},
                    {quantity: 2, unit: 'el', name: 'Öl'},
                    {quantity: 500, unit: 'gr', name: 'Hackfleisch'},
                    {quantity: 400, unit: 'gr', name: 'gehackte Tomaten (Dose)'},
                    {quantity: 30, unit: 'gr', name: 'Tomatenmark'},
                    {quantity: 1, unit: 'tl', name: 'Salz'},
                    {quantity: 1, unit: 'tl', name: 'Gemüsebrühe'},
                    {quantity: 2, unit: 'tl', name: 'Zucker'},
                    {quantity: 1, unit: 'tl', name: 'Oregano'},
                    {quantity: 50, unit: 'gr', name: 'Butter'},
                    {quantity: 80, unit: 'gr', name: 'Mehl'},
                    {quantity: 600, unit: 'gr', name: 'Milch'},
                    {quantity: 1.5, unit: 'tl', name: 'Salz'},
                    {quantity: 9, unit: 'stk', name: 'Lasagneplatten'}
                ],
                steps: [
                    'Gouda in Stücke zerkleinern (10 Sek | Stufe 8) und umfüllen',
                    'Zwiebel, Knoblauch und Karotten (8 Sek. | Stufe 5) dann mit dem Spatel runter schieben und nochmal (8 Sek. | Stufe 5)',
                    'Öl hinzugeben und (2 Min. | Stufe 1 | Varoma) andünsten. Backofen auf 200 Grad vorheizen.',
                    'Hackfleisch ohne Öl anbraten, bis keine Flüssigkeit mehr im Topf ist.',
                    'Die gehackte und in Öl gedünstete Karotten-, Zwiebel-, Knoblauchmischung zugeben und mit Hackfleisch vermischen',
                    'Die gehackten Tomaten, das Tomatenmark, Salz, Brühe, Zucker und Oregano',
                    'TM kurz mit kaltem Wasser reinigen.',
                    'Butter schmelzen (2 Min. | 100° | Stufe1 )',
                    'Mehl hinzugeben (Stufe 1 | 100° | 1 Min)',
                    'Milch und Salz hinzufügen und kurz auf Stufe 5 verrühren und bei (8 Min. | 100° | Stufe 2) aufkochen',
                    'Mit dem Spatel unten am Boden umherschieben, da evtl. Butter-Mehl-Reste festsitzen',
                    'noch einmal kurz auf Stufe 5 verrühren abschmecken und evtl. noch 0,5 TL Salz zugeben und nochmal verrühren.',
                    'Den Boden der Auflaufform dick mit Bechamelsoße begießen, ca. 3 Lasagneplatten ohne Vorkochen darauf legen, mit Hackfleischsoße bedecken, darüber etwas Bechamelsoße und ein klein wenig Käse streuen. Dann wieder ca. 3 Lasagneplatten, Hackfleischsoße, Bechamelsoße, etwas Käse.',
                    'Ganz zum Schluss auf die letzte Schicht Bechamelsoße den ganzen restlichen Käse darüber streuen',
                    'In den vorgeheizten Backofen bei 200 Grad Ober- und Unterhitze 30 min. backen.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Möhreneintopf',
                tags: [
                    'vegetarisch',
                    'sideorder: Nudeln'
                ],
                 ingredients: [
                    {quantity: 0.5, unit: 'bund',  name: 'Petersilie'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel'},
                    {quantity: 100, unit: 'gr', name: 'Speckwürfel'},
                    {quantity: 400, unit: 'gr', name: 'Möhren'},
                    {quantity: 200, unit: 'gr', name: 'Kartoffeln'},
                    {quantity: 500, unit: 'gr', name: 'Wasser'},
                    {quantity: 1, unit: 'tl', name: 'gekörnte Brühe'},
                    {quantity: 0.25, unit: 'tl', name: 'Muskat'},
                ],
                steps: [
                    'Petersilie in den Mixtopf geben (5 Sek | Stufe 8) und umfüllen',
                    'Die geviertelte Zwiebel und den Speck in den Mixtopf geben',
                    'Zerkleinern (5 Sek. | Stufe 7) und dünsten (3 Min | Varoma | Stufe 2)',
                    'GEwürfelte Möhren und Kartoffeln zugeben und (10 Sek | Stufe 4) zerkleinern',
                    'Wasser, Brühwürfel und Muskat hinzugeben und (17 Min | 100 Grad | Linkslauf | Stufe 1) garen',
                    'Anschließend die Petersilie mit dem Spatel unterrühren.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Currygeschnetzeltes',
                tags: [
                    'vegetarisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 2, unit: 'stk',  name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'el', name: 'Öl'},
                    {quantity: 500, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 2, unit: 'el', name: 'Curry'},
                    {quantity: 30, unit: 'gr', name: 'Mehl'},
                    {quantity: 30, unit: 'gr', name: 'Tomatenmark'},
                    {quantity: 500, unit: 'gr', name: 'Wasser'},
                    {quantity: 2, unit: 'tl', name: 'gekörnte Brühe'},
                    {quantity: 125, unit: 'gr', name: 'Crème Fraiche'},
                    {quantity: 125, unit: 'gr', name: 'Joghurt'},
                    {quantity: 300, unit: 'gr', name: 'Spätzle'},
                ],
                steps: [
                    'Zwiebeln halbieren und in den Mixtopf geschlossen (4 sek | Stufe 5)',
                    'Öl hinzugeben und (3 min | Varoma | Linkslauf | Stufe 1)',
                    'Fleisch dazu und (5 min  | 100 Grad | Linkslauf | Sanftrührstufe)',
                    'Salz, Pfeffer, Curry, Mehl und Tomatenmark hinzugeben und (2 min  | 100 Grad | Linkslauf | Sanftrührstufe)',
                    'Wasser und Brühe hinzugeben und (10 min | 100 Grad | Linkslauf | Sanftrührstufe)',
                    'Creme Fraiche und Joghurt hinzugeben und (3 min | 100 Grad | Linkslauf | Sanftrührstufe)',
                    'Evtl. noch einmal mit Salz, Pfeffer und Curry abschmecken'
                ]
            }
        )
    );



    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Champignonpfännchen',
                tags: [
                    'vegetarisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 2, unit: 'stk',  name: 'Zwiebel(n)'},
                    {quantity: 400, unit: 'gr', name: 'Champignons'},
                    {quantity: 200, unit: 'gr', name: 'Saure Sahne'},
                    {quantity: 4, unit: 'stk', name: 'Schnittlauch'}
                ]
            }
        )
    );


    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Möhrenuntereinander mit Frikadellen',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: Kartoffeln'
                ],
                ingredients: [
                    {quantity: 300, unit: 'gr', name: 'Hackfleisch'},
                    {quantity: 400, unit: 'gr', name: 'Kartoffeln'},
                    {quantity: 1000, unit: 'gr', name: 'Möhren'},
                    {quantity: 1, unit: 'stk', name: 'Porree'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {quantity: 1, unit: 'stk', name: 'Ei(er)'}
                ],
                steps: [
                    'Möhren und Kartoffeln schälen und in regelmäßige Stücke schneiden. Den Porree in Halbringe schneiden und mit den Möhren- und Kartoffelstücken in einen Topf geben. Mit 1-2 Teelöffeln Gemüsebrühe und ausreichend Wasser zum Kochen bringen.',
                    'In der Zwischenzeit die Zwiebel schälen und in feine Würfel schneiden. Den Knoblauch pressen und zu der Zwiebel in eine Schüssel geben. Hackfleisch, Ei und das Brot hinzugeben und vermengen. Nach belieben mit Gewürzen abschmecken und zu Frikadellen formen. Die Frikadellen in ausreichend Öl braten.',
                    'Mit einem Küchenmesser die Garprobe bei dem Gemüse machen. Ist es gar, die Brühe abschütten und etwas davon auffangen. Nun das Gemüse stampfen und evtl. noch etwas Gemüsebrühe hinzufügen. ',
                    'Mit den Frikadellen servieren. Nach belieben kann das Möhrenuntereinander noch mit Majoran bestreut werden.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Gebratene Nudeln mit Speck und Ei',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Nudeln'},
                    {quantity: 100, unit: 'gr', name: 'Speckwürfel'},
                    {quantity: 4, unit: 'stk', name: 'Ei(er)'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Garnelen/Krabben Pfanne',
                tags: [
                    'Meeresfrüchte',
                    'sideorder: Reis'
                ],
                ingredients: [
                    {quantity: 200, unit: 'gr', name: 'Garnelen'},
                    {quantity: 100, unit: 'gr', name: 'Frischkäse'},
                    {quantity: 300, unit: 'gr', name: 'Reis'},
                    {quantity: 1, unit: 'stk', name: 'Zucchini'},
                    {quantity: 200, unit: 'ml', name: 'Kondensmilch (4%)'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hähnchengulasch',
                tags: [
                    'Helles Fleisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 4, unit: 'stk', name: 'Hähnchenschenkel'},
                    {quantity: 4, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 500, unit: 'gr', name: 'Spagetthi'}
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/993651204647871/Haehnchenbrust-in-Zwiebelsahne.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Hähnchenbrust in Zwiebelsahne',
    //             tags: [
    //                 'Helles Fleisch',
    //                 'sideorder: ???'
    //             ],
    //             ingredients: [
    //                 {quantity: 400, unit: 'gr', name: 'Hähnchenbrustfilet'},
    //                 {quantity: 3, unit: 'stk', name: 'Zwiebel (rot)'},
    //                 {quantity: 200, unit: 'ml', name: 'Sahne'},
    //                 {quantity: 200, unit: 'gr', name: 'Crème Fraiche'}
    //             ],
    //             steps: [
    //                 'Die Hähnchenbrust mit Salz, Pfeffer und Cayennepfeffer würzen und in einer Pfanne in heißem Butterschmalz von beiden Seiten anbraten. Nun in eine gebutterte Auflaufform geben und abdecken. In derselben Pfanne die in Ringe geschnittenen Zwiebel geben und gut anschmoren, dass sie Farbe bekommen. Die fertige Zwiebel über die Hähnchenbrust geben. Sahne und Créme fraíche miteinander verrühren, gut würzen und über das Ganze geben. Den Backofen auf 180° vorheizen und 20-25 Minuten backen.'
    //             ]
    //         }
    //     )
    // );

    //http://www.chefkoch.de/rezepte/407971130376848/Haehnchenschenkel-mit-Ofen-Schmand-Gemuese.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Hähnchenschenkel mit Schmand-Gemüse',
    //             tags: [
    //                 'Helles Fleisch',
    //                 'sideorder: Kartoffeln'
    //             ],
    //             ingredients: [
    //                 {quantity: 4, unit: 'stk', name: 'Hähnchenschenkel'},
    //                 {quantity: 800, unit: 'gr', name: 'Kartoffeln'},
    //                 {quantity: 1, unit: 'stk', name: 'Zucchini'},
    //                 {quantity: 300, unit: 'gr', name: 'Champignons'},
    //                 {quantity: 10, unit: 'stk', name: 'Cherrytomaten'},
    //                 {quantity: 200, unit: 'gr', name: 'Schmand'},
    //                 {quantity: 200, unit: 'gr', name: 'Joghurt'},
    //                 {quantity: 100, unit: 'gr', name: 'Schnittlauch'},
    //                 {quantity: 2, unit: 'stk', name: 'Knoblauchzehe(n)'}
    //             ],
    //             steps: [
    //                 'Den Backofen auf 200 Grad vorheizen. Hähnchenschenkel waschen und trocken tupfen. Die Schenkel großzügig mit Hähnchengewürz, Paprika und der gekörnten Brühe würzen. Achtung, die Schenkel nicht einölen. Anschließend die Kartoffeln schälen und in mundgerechte Stücke schneiden. Die Zucchini putzen, waschen, halbieren und in ca. 1-cm-dicke Scheiben schneiden. Die Champignons putzen und evt. halbieren. Die Tomaten ebenfalls waschen und evt. halbieren. Die Kartoffeln in einer Fettpfanne verteilen und mit Olivenöl beträufeln. Dann mit Salz, Pfeffer und Rosmarin würzen. Über die Fettpfanne einen Grillrost und darauf die Hähnchenschenkel legen. Die Fettpfanne samt Grillrost in den Ofen schieben und ca. 20 Minuten braten/grillen. Nun tropft das leckere Hähnchenfett auf die Kartoffeln, was einen ganz tollen Geschmack gibt. Anschließend das klein geschnittene Gemüse zu den Kartoffeln in die Pfanne geben und nochmals weitere 15 Minuten in den Ofen. In der Zwischenzeit den Schmand und den Joghurt verrühren. Die Knoblauchzehen dazupressen, den Schnittlauch unterrühren und kräftig mit Salz und Pfeffer würzen. Nach ca. 35-40 Minuten die Hähnchenschenkel mit dem Ofengemüse servieren und die Schmandcreme dazureichen.'
    //             ]
    //         }
    //     )
    // );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Helles Filetgulasch a la Patnaik',
                tags: [
                    'Helles Fleisch',
                    'sideorder: ???'
                ],
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 3, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {quantity: 200, unit: 'gr', name: 'Frischkäse'},
                    {quantity: 1, unit: 'etwas', name: 'aus einem Rahmchampignon Gewürzbeutel'},
                    {quantity: 200, unit: 'gr', name: 'Champignons'},
                    {name: 'Sojasauce'},
                    {name: 'Salz'},
                    {name: 'Pfeffer'},
                    {name: 'Paprika'},
                    {name: 'Curry'}
                ],
                steps: [
                    'Hähnchenbrustfilet in Gulaschstücke schneiden und in heißem Butterschmalz anbraten. Kleingeschnittenen Zwiebeln und eine klein gehackte Knoblauchzehe dazugeben und mitbraten. Wenn das Fleisch von allen Seiten angebraten ist, kommt Salz, Pfeffer, Paprikapulver, Curry und ein paar Tropfen Sojasauce dazu. Mit Wasser ablöschen und den Bratensatz loskochen, auf kleiner Flamme mit schrägem Deckel. Dieses Fleisch braucht nicht so lange zum Braten, sonst wird es trocken. Zum Verfeinern nimmt man ebenfalls Frischkäse, Kondensmilch oder saure Sahne. ',
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hühnerfrikassee',
                tags: [
                    'Helles Fleisch',
                    'sideorder: Reis'
                ],
                ingredients: [
                    {quantity: 1, unit: 'stk', name: 'Suppenhuhn'},
                    {quantity: 300, unit: 'gr',  name: 'Erbsen (TK)'},
                    {quantity: 200, unit: 'ml',  name: 'Sahne'}
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/507251145912155/Huhn-mit-Gemuese-in-Kokos-Sosse.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Huhn mit Gemüse in Kokos-Soße',
                tags: [
                    'Helles Fleisch',
                    'sideorder: Reis'
                ],
                time: 40,
                ingredients: [
                    {quantity: 1, unit: 'stk', name: 'Porree'},
                    {quantity: 2, unit: 'stk', name: 'Möhren'},
                    {quantity: 1, unit: 'stk', name: 'Limette(n)'},
                    {quantity: 500, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 1, unit: 'el', name: 'Öl (Sesamöl)'},
                    {quantity: 1, unit: 'tl', name: 'Ingwerpulver'},
                    {quantity: 0.5, unit: 'tl', name: 'Kurkuma'},
                    {quantity: 0.25, unit: 'tl', name: 'Cayennepfeffer'},
                    {quantity: 200, unit: 'gr', name: 'Kokosmilch'},
                    {quantity: 100, unit: 'gr', name: 'Brühe'},
                    {quantity: 3, unit: 'el', name: 'Crème Fraiche'},
                    {name: 'Salz'},
                    {name: 'Pfeffer'},
                    {name: 'Schnittlauch'}
                ],
                steps: [
                    'Gemüse waschen, putzen, Möhren schälen. Alles mit einem großen Messer in feine Stifte (Julienne) schneiden. Die Limette auspressen. Fleisch abbrausen, trockentupfen, in Streifen teilen. Sesamöl in einem großen Wok oder einer großen Pfanne erhitzen. Fleisch darin bei starker Hitze unter Rühren anbraten. Ingwer, Kurkuma, Cayennepfeffer, etwas Salz, Pfeffer zufügen und bei mittlerer Hitze kurz mitbraten. Die Möhren, die Kokosnussmilch und die Brühe zufügen. Alles aufkochen lassen. Die Crème fraiche einrühren. Porree sowie Paprikastreifen hinzufügen und alles ca. 7 Minuten köcheln lassen. Mit 3 EL Limettensaft, etwas Salz, Pfeffer und Cayennepfeffer kräftig abschmecken. Auf Teller anrichten, evtl. mit Schnittlauchhalmen garnieren. Sehr empfehlenswert dazu ist Basmati.',
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Kohlgemüse mit Bratwurst',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: Kartoffeln'
                ],
                ingredients: [
                    {quantity: 1, unit: 'stk', name: 'Broccoli'},
                    {quantity: 5, unit: 'stk', name: 'Bratwurst (grob)'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Lachs',
                tags: [
                    'Meeresfrüchte',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 200, unit: 'gr',  name: 'Lachs'},
                    {quantity: 500, unit: 'gr',  name: 'Nudeln'},
                    {quantity: 400, unit: 'ml',  name: 'Kondensmilch (4%)'},
                    {quantity: 5, unit: 'gr',  name: 'Senf'},
                    {quantity: 5, unit: 'gr',  name: 'Honig'},
                    {quantity: 100, unit: 'gr',  name: 'Frischkäse'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Maultaschen mit warmen Kartoffelsalat',
                flags: '',
                ingredients: [
                    {quantity: 800, unit: 'gr', name: 'Gemüse-Maultaschen (frisch)'}

                ],
                steps: [
                ],
                tags: [
                    'vegetarisch'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Paprika Gehacktes',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: Reis'
                ],
                ingredients: [
                    {quantity: 3, unit: 'stk',  name: 'Paprika'},
                    {quantity: 300, unit: 'gr',  name: 'Champignons'},
                    {quantity: 300, unit: 'gr',  name: 'Hackfleisch'},
                    {quantity: 2, unit: 'stk',  name: 'Zwiebel(n)'},
                    {quantity: 100, unit: 'gr',  name: 'Frischkäse'},
                    {quantity: 200, unit: 'ml',  name: 'Kondensmilch (4%)'},
                    {quantity: 250, unit: 'gr', name: 'Reis'},
                    {name: 'Paprikapulver'}

                ],
                steps: [
                    'Zwiebeln anbraten und danach die Paprika hinzugeben. Mit Kondensmilch und Wasser ablöschen und gar kochen.',
                    'Parallel das Hackfleisch in einer Pfanne anbraten und im Anschluss zu den Zwiebeln und Paprika hinzugeben.',
                    'Zum Abschluss den Frischkäse hinzugeben und ggf. mit etwas Kondensmilch verdünnen.'
                ]
            }
        )
    );

    // http://www.rezeptwelt.de/hauptgerichte-mit-fleisch-rezepte/schnelle-pasta-asciutta-bzw-bolognese-so%C3%9Fe/726901
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Pasta Asciutta',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Hackfleisch'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 10, unit: 'gr', name: 'Öl'},
                    {quantity: 2, unit: 'el', name: 'Mehl'},
                    {quantity: 250, unit: 'ml', name: 'Brühe'},
                    {quantity: 2, unit: 'el', name: 'Tomatenmark'},
                    {name: 'Salz'},
                    {name: 'Pfeffer'},
                    {name: 'Paprikapulver'},
                    {name: 'Oregano'},
                    {name: 'Parmesan'}
                ],
                steps: [
                    'Die Zwiebel schälen, halbieren und in den Mixtopf geben und (5 Sek | Stufe 5) zerkleinern. Mit Spatel nach unten schieben und nochmal bei (5 Sek | Stufe 5) zerkleinern.',
                    'Öl hinzufügen und (2 min | Varoma | Stufe 1) dünsten.',
                    'Hackfleisch in den Mixtopf zugeben und mit Salz, Pfeffer und Paprikapulver kräftig würzen und (5 min | Varoma  | Linkslauf Sanftrührstufe) garen',
                    'Mehl, Brühe, Tomatenmark und Oregano zugeben und (12 min | 100°C | Linkslauf Stufe 1-2) garen',
                    'Zum Schluss noch abschmecken und mit Parmesan garnieren'
                ]
            }
        )
    );

    // http://www.rezeptwelt.de/hauptgerichte-mit-gem%C3%BCse-rezepte/k%C3%BCrbisrisotto/155019
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Kürbisrisotto',
                tags: [
                    'vegetarisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 100, unit: 'gr', name: 'Parmesan (gerieben)'},
                    {quantity: 250, unit: 'gr', name: 'Hokkadiokürbis'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 20, unit: 'gr', name: 'Olivenöl'},
                    {quantity: 250, unit: 'gr', name: 'Risottoreis'},
                    {quantity: 900, unit: 'gr', name: 'Gewmüsebrühe (heiß)'},
                    {quantity: 2, unit: 'tl', name: 'Currypulver'},
                    {quantity: 20, unit: 'gr', name: 'Butter'}
                ],
                steps: [
                    'Kürbis (mit Schale) in Stücke schneiden und Zwiebelhälften (5 sek | Stufe 6) zerkleinern.',
                    'Mit Olivenöl (3 min | 100 Grad | Stufe 1) andünsten.',
                    '250 g Risottoreis zugeben und bei (3 min | 100 Grad | Linkslauf Stufe 1) andünsten.',
                    '900 g heiße Gemüsebrühe und Currypulver zugeben.',
                    'Anschließend ohne Messbecher (20 min | 100 Grad  | Linkslauf Stufe 1) kochen.',
                    'Butter und Parmesan hinzugeben'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Pizza',
                tags: [
                    'Dunkles Fleisch',
                    'Meeresfrüchte'
                ],
                ingredients: [
                    {quantity: 1000, unit: 'gr', name: 'Mehl'},
                    {quantity: 250, unit: 'ml', name: 'Milch'},
                    {quantity: 250, unit: 'ml', name: 'heißes Wasser'},
                    {quantity: 1, unit: 'stk', name: 'Frischhefe'},
                    {quantity: 200, unit: 'gr', name: 'Tomaten (passiert)'},
                    {quantity: 200, unit: 'gr', name: 'Gouda (geraspelt)'},
                    {quantity: 100, unit: 'gr', name: 'Mais'},
                    {quantity: 200, unit: 'gr', name: 'Champignons'},
                    {quantity: 200, unit: 'gr', name: 'Thunfisch'},
                    {quantity: 100, unit: 'gr', name: 'Salami'},
                    {quantity: 1, unit: 'tl', name: 'Salz'},
                    {quantity: 1, unit: 'stk', name: 'Ei(er)'},
                    {name: 'Zucker'}
                ],
                steps: [
                    'Du nimmst eine große Schüssel mischst Du die Hefe rein, das Ei und einen Löffel Zucker und eine Prise Salz vermengen. Dann kommt eine die Milch und das heisses Wasser mit dazu. Umrühren, 2 Minuten stehen lassen. Dann noch einen Schuß Olivenöl. Und und dann mischst Du das Mehl dazu und knetest alles. Eventuell brauchts Du noch etwas mehr Mehl oder Wasser. Den Teig danach ne halbe Stunde stehen lassen.',
                    'Danach machst Du die Pizzasauce: eine kleine Knoblauch klein schneiden. Dann passierte Tomatensauce dazu. Gewürze und wenn Du hast teifgefrorene Kräuter und einen Schuß Olivenöl.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Spinat mit Kartoffeln und Fischstäbchen',
                tags: [
                    'vegetarisch',
                    'sideorder: Kartoffeln'
                ],
                ingredients: [
                    {quantity: 300, unit: 'gr',  name: 'Spinat (TK)'},
                    {quantity: 3, unit: 'stk',  name: 'Ei(er)'},
                    {quantity: 500, unit: 'gr',  name: 'Kartoffeln'},
                    {quantity: 1, unit: 'stk',  name: 'Zwiebel(n)'},
                    {quantity: 4, unit: 'stk',  name: 'Fischstäbchen'},

                ],
                steps: [
                    'Spinat frühzeitig auftauen lassen.',
                    'Backofen vorheizen und Fischstäbchen auf einem Backblech verteilen',
                    'Kartoffel schälen und kochen',
                    'Zwiebeln schälen, in kleine Stücke schneiden und in einer Pfanne glasig dünsten.',
                    'Zwiebeln zum Spinat gehen und erhitzen.'
                ]
            }
        )
    );

    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Spitzkohl mit Kartoffeln',
    //             tags: [
    //                 'Dunkles Fleisch',
    //                 'sideorder: Kartoffeln'
    //             ],
    //             ingredients: [
    //                 {quantity: 2, unit: 'stk', name: 'Spitzkohl'},
    //                 {quantity: 8, unit: 'stk', name: 'Kartoffeln'},
    //                 {quantity: 50, unit: 'ml', name: 'Brühe'},
    //                 {quantity: 2, unit: 'el', name: 'Crème Fraiche'},
    //                 {quantity: 100, unit: 'gr', name: 'Speckwürfel'},
    //                 {quantity: 1, unit: 'stk', name: 'Bratwurst'}
    //             ],
    //             steps: [
    //                 'Die äußeren Blätter vom Spitzkohl entfernen und halbieren. Den Strunk aus der Mitte schneiden. Spitzkohl in STreifen schneiden. Wasser mit Salz zum Kochen bringen, den Spitzkohl 5 Minuten kochen lassen, dann abschütten. Kartoffeln schneiden und 15 Minuten in Brühe garen (beim Abschütten Wasser auffangen). Fett im Topf auslassen und Speckwürfel anbraten. Dann den Spitzkohl und die Kartoffeln dazugeben. Mit Salz, Peffer, Brühe und evtl. Sahnekäase abschmecken. Hackfleisch in seperater Pfanne krümelig anbraten und zum Schluss untermengen.',
    //             ]
    //         }
    //     )
    // );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Rippchen a la Mama',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: Kartoffeln'
                ],
                ingredients: [
                    {quantity: 1, unit: 'kg', name: 'dicke Rippe'},
                    {quantity: 2, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {quantity: 200, unit: 'gr', name: 'Champignons'},
                    {name: 'Bratenfett'},
                    {name: 'getrocknete Pilze'},
                    {name: 'Honig'},
                    {name: 'Sahnekäse'},
                    {name: 'Jägersoße'},
                    {name: 'Salz'},
                    {name: 'Pfeffer'},
                    {name: 'Paprikapulver'},
                    {name: 'Senf'}
                ],
                steps: [
                    'Fleisch waschen und abtrocknen. Fett heiß werden lassen. Fleisch von beiden Seiten würzen, dann mit Senf einreiben. Fleisch scharf anbraten. Zwiebeln achteln und wenn Fleisch braun ist dazugeben. Herd runter schalten (sanft brutzeln). Getrocknete Pilze einweichen und ausdrücken (nur wenige). Knobi dazu. Etwas heißes Wasser dazu (ca. 1 Kaffeetasse). getrocknete Pilze dazu geben und Deckel drauf. Ca. 1-1 1/2 Stunden schmoren. Hin und wieder Wasser dazu. Fleisch rausnehmen und dann Soße abschmecken (Salz, Pfeffer, Parika und Honig).',
                ]
            }
        )
    );

    //http://www.kochbar.de/rezept/266901/Kaese-Spinat-Pfannkuchen.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Test: Käse-Spinat-Pfannkuchen',
                tags: [
                    'vegetarisch'
                ],
                ingredients: [
                ],
                steps: [
                    'http://www.kochbar.de/rezept/266901/Kaese-Spinat-Pfannkuchen.html'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Tomatensauce mit Mozzarella',
                tags: [
                    'vegetarisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [
                    {quantity: 250, unit: 'gr', name: 'Mozzarella'},
                    {quantity: 9, unit: 'stk', name: 'Tomaten'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 2, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {name: 'Basilikum'},
                    {name: 'Thymian'},
                    {name: 'Oregano'}

                ],
                steps: [
                    'Tomaten waschen, halbieren und wie Zwiebel (nur größer) in Würfel schneiden. In einer Pfanne oder einem Topf das Olivenöl erhitzen, die Zwiebel darin glasig dünsten, die gewürfelten Tomaten dazu geben und etwas dünsten. Die gehackten Knoblauchzehen dazu geben und kurz mitdünsten. Mit Salz, Pfeffer und Brühe würzen. Die frischen, gehackten Kräuter (Basilikum, Thymian, Oregano) dazu geben, umrühren und ganz zum Schluss den klein gewürfelten Mozzarella hineingeben. Die Pfanne (Topf) sofort von der Kochstelle nehmen und umrühren. Der Käse soll nicht gleich sofort vollständig schmelzen.'
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/1342861239100533/Tortellini-alla-panna.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Tortellini alla panna',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: Nudeln'
                ],
                ingredients: [

                    {quantity: 800, unit: 'gr', name: 'Tortellini (Frischeregal)'},
                    {quantity: 200, unit: 'gr', name: 'Sahne'},
                    {quantity: 400, unit: 'gr', name: 'Kondensmilch (4%)'},
                    {quantity: 200, unit: 'gr', name: 'Schinken (gekocht)'},
                    {quantity: 2, unit: 'stk', name: 'Ei(er)'},
                    {quantity: 4, unit: 'el', name: 'Parmesan'},
                    {quantity: 1, unit: 'el', name: 'Butter'}
                ],
                steps: [
                    'Die Tortellinis nach Packungsanweisung kochen. Den gewürfelten gekochten Schinken in einer tiefen Pfanne mit Butter kurz anbraten, dann 400ml von der Sahne hineingeben und auf kleiner Stufe köcheln lassen. Wenn die Tortellini gar sind, in die Pfanne zur Schinkensahne geben und weiter köcheln lassen. In der Zwischenzeit in einer kleinen Schüssel das Eigelb, den Parmesan, Muskatnuss, Salz und die restliche 200 ml Sahne verrühren, dann in die Pfanne zu den Tortellinis geben und so lange köcheln lassen, bis die Soße dickflüssig wird. Sofort servieren. Sehr gehaltvoll, aber der Geschmack ist fantastisch. Ab und zu kann man sich´s mal gönnen.'
                ]
            }
        )
    );

    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Überbackenes Hähnchenbrustfilet',
    //             tags: [
    //                 'Helles Fleisch',
    //                 'sideorder: Reis'
    //             ],
    //             ingredients: [
    //                 {quantity: 400, unit: 'gr', name: 'Hähnchenbrustfilet'},
    //                 {quantity: 0.5, unit: 'Dose', name: 'Pfirsichhälften'},
    //                 {quantity: 400, unit: 'ml', name: 'Sahne'},
    //                 {quantity: 200, unit: 'gr', name: 'Champignons'},
    //                 {quantity: 1, unit: 'Beutel', name: 'Zwiebelsuppe'},
    //                 {quantity: 1, unit: 'etwas', name: 'geraspelten Käse'}

    //             ],
    //             steps: [
    //                 'Hähnchenbrustfilets mit einem scharfen Messer der Länge nach durchschneiden. Diese nun in heißem Fett in einer Pfanne von beiden Seiten anbraten und dabei salzen, pfeffern und mit Paprikapulver würzen. Eine Aufluafform einreiben und die gebratenen Filets darin verteilen. Die Pfirsiche vierteln und über die Filets geben. In der heißen Pfanne die Sahne und die Pilze heiß werden lassen. Nun darüber den Beutel Zwiebelsuppe geben und verrühren. Die Pilz-Sahne-Zwiebelsuppe nun noch mit Paprika, Salz, Pfeffer, Sojasauce und Curry würzen und in die Auflaufform geben. Zum Schluss etwas geraspelten Käse darauf verteilen und bei 200 ∞C in den vorgeheizten Backofen schieben. ‹berbacken wird ca. 20 Minuten bedeckt (Deckel oder Aulufolie) und 15 Minuten unbedeckt. ',
    //             ]
    //         }
    //     )
    // );

    //http://www.chefkoch.de/rezepte/1112791217324924/Schnelle-Haehnchenbrust-Zucchini-Pfanne.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Zucchini mit Hähnchenbrust',
                tags: [
                    'Helles Fleisch',
                    'sideorder: Reis'
                ],
                ingredients: [
                    {quantity: 300, unit: 'gr', name: 'Zucchini'},
                    {quantity: 300, unit: 'gr', name: 'Reis'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {quantity: 300, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 200, unit: 'gr', name: 'Saure Sahne'}
                ],
                steps: [
                    'Das Fleisch in Öl rundherum goldbraun anbraten. Zwiebeln und Knoblauch zu geben und ebenfalls anbraten. Zucchinischeiben hinzu fügen und kurz mit anbraten. Mit Salz, Pfeffer, Curry und Koriander würzen.',
                    'Zugedeckt 10-15 Minuten unter mehrmaligem Wenden bei mäßiger Hitze dünsten lassen. Die Zucchinischeiben sollten noch etwas "Biss" haben.',
                    'Die saure Sahne unterrühren und noch einmal abschmecken. Schnittlauch dazu geben und sofort heiß servieren.'
                ]
            }
        )
    );

    //http://www.rezeptwelt.de/backen-herzhaft-rezepte/flammkuchen-els%C3%A4sser-art/30533
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Flammkuchen Elsässer Art',
                tags: [
                ],
                ingredients: [
                    {quantity: 1, unit: 'stk', name: 'Frischhefe'},
                    {quantity: 1, unit: 'tl', name: 'Zucker'},
                    {quantity: 250, unit: 'ml', name: 'Wasser'},
                    {quantity: 450, unit: 'gr', name: 'Mehl'},
                    {quantity: 20, unit: 'ml', name: 'Olivenöl'},
                    {quantity: 1, unit: 'tl', name: 'Salz'},
                    {quantity: 400, unit: 'gr', name: 'Crème Fraiche'},
                    {name: 'Muskat'},
                    {name: 'Salz'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe(n)'},
                    {quantity: 200, unit: 'gr', name: 'Schinkenwürfel'},
                    {quantity: 3, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'bnd', name: 'Schnittlauch'}
                ],
                steps: [
                    'Hefe mit 150g Wasser und dem Zucker in den Mixtopf geschlossen geben, bei (1 Minute | 37° | Stufe 1) vermischenund 10 Min. ruhen lassen.',
                    'Restliches Wasser, Mehl, Salz, Öl hinzugeben und (2  Min | Teigstufe).',
                    'In einer Schüssel ca. 20 Minuten an einem warmen Ort ruhen lassen.',
                    'In dieser Zeit kann der Backofen vorgeheizt werden: 220° Unter-/Oberhitze.',
                    'Den Teig in 2 Teile teilen und jeweils dünn auf einem Blech ausrollen.',
                    'In einer Schüssel Creme Fraiche, etwas Salz, Muskat sowie den fein gehackten Knoblauch verrühren.',
                    'Diese Creme auf dem ausgerollten Teig verteilen und bis zum Rand verstreichen. Schinkenwürfel darauf verteilen.',
                    'Zwiebeln in feine Ringe schneiden und ebenfalls gleichmäßig auf beide Bleche verteilen.',
                    'Schnittlauch in feine Röllchen schneiden und über die Bleche streuen.',
                    'Jedes Blech einzeln auf Unter-/Oberhitze bei 220° für 15-17 Minuten backen.'
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/1112791217324924/Schnelle-Haehnchenbrust-Zucchini-Pfanne.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Gurkenreis mit Hähnchenbrust (TM)',
                tags: [
                    'Helles Fleisch',
                    'sideorder: Reis'
                ],
                ingredients: [
                    {quantity: 1, unit: 'Bund', name: 'Dill'},
                    {quantity: 1000, unit: 'gr', name: 'Wasser'},
                    {quantity: 250, unit: 'gr', name: 'Langkornreis'},
                    {quantity: 2, unit: 'stk', name: 'Salatgurke (geschält)'},
                    {quantity: 50, unit: 'gr', name: 'Crème Légère'},
                    {quantity: 300, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {name: 'Salz'},
                    {name: 'Peffer'}
                ],
                steps: [
                    'Dill in den Mixtopf geben, (2 Sek | Stufe 8) zerkleinern und umfüllen',
                    'Wasser mit 1 TL Salz in den Mixtopf, Reis in den Gareinsatz geben, einhängen und (15 Min | Varoma | Stufe 1) garen.',
                    'Gurke schälen, längs halbieren und ggf. die Kerne mit einem Löffel ausschaben. Gurkenhälften in ca. 1/2 cm dicke Scheiben schneiden, in den Varoma legen, aufsetzen und (9 Min | Varoma | Stufe 1) weitergaren.',
                    'Varoma und Gareinsatz zur Seite stellen, Mixtopf leeren und Garflüssigkeit dabei auffangen.',
                    'Reis, Gurken, Dill, 50 g Garflüssigkeit, 2 Prisen Salz und Pfeffer in den Mixtopf geben und (5 Sek | Linkslauf | Stufe 3) mischen.',
                    'Mit der Putenbrust servieren.'
                ]
            }
        )
    );

    // http://www.rezeptwelt.de/grundrezepte-rezepte/variation-von-finnischer-ofenpfannkuchen-mit-sauerkirschen/619434
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Ofenpfannkuchen mit Sauerkirschen (TM)',
                tags: [
                    'vegetarisch',
                    'sideorder: Reis'
                ],
                ingredients: [
                    {quantity: 1, unit: 'Glas', name: 'Sauerkirschen'},
                    {quantity: 600, unit: 'ml', name: 'Milch'},
                    {quantity: 2, unit: 'stk', name: 'Eier'},
                    {quantity: 30, unit: 'gr', name: 'Butter'},
                    {quantity: 250, unit: 'gr', name: 'Mehl'},
                    {name: 'Salz'},
                    {quantity: 50, unit: 'gr', name: 'Zucker'},
                    {quantity: 4, unit: 'tl', name: 'Zucker'}
                ],
                steps: [
                    'Die Sauerkirschen in einem Sieb gut abtropfen lassen.',
                    'Milch und Eier in den Mixtopf geschlossen geben und (15 Sek. | Stufe 4) verrühren.',
                    'Butter, Zucker, Salz und Mehl hinzugeben und (60 Sek | Stufe 4) bis ein glatter Teig entstanden ist.',
                    'Das Backblech gut mit Backpapier auslegen, das Backpapier sollte über das Backblech gehen oder das Backblech sehr gut einfetten.',
                    'Teig auf das Backblech geben und die gut abgetropften Sauerkirschen in den Teig "plumpsen" lassen, bzw. gut verteilen.',
                    'Mit etwas Zucker bestreuen und das Blech in den vorgeheizten Backofen schieben.',
                    'Backtemperatur 220°C Umluft für ca. 25-30 Minuten'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Zürcher Geschnetzeltes',
                tags: [
                    'Dunkles Fleisch',
                    'sideorder: ???'
                ],
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Kalbschnitzel'},
                    {quantity: 200, unit: 'gr', name: 'Champignons'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'el', name: 'Mehl'},
                    {quantity: 200, unit: 'ml', name: 'Traubensaft'},
                    {quantity: 400, unit: 'ml', name: 'Sahne'}

                ],
                steps: [
                    'Das Geschnetzelte mit Salz und Pfeffer aus der Mühle würzen und in zwei Teile teilen. Eine große Teflonpfanne mit der Hälfte des Erdnussöles sehr gut erhitzen, einen Teil des Fleisches beigeben und kurz (!) anbraten. (nicht zu lange, sonst wird das Fleisch zäh und trocken). Das Fleisch aus der Pfanne nehmen, warm stellen. Mit dem restlichen Fleisch ebenso verfahren. In derselben Pfanne die Butter erhitzen, die Zwiebeln beigeben und dünsten. Die in Scheiben geschnittenen Champignons dazugeben, mit dem Mehl stäuben und vermischen. Weißwein beigeben und zur Hälfte einreduzieren. Den Bratensaft vom Fleisch und den Rahm dazugeben und alles zur gewünschten Konsistenz einkochen. Mit Salz und Pfeffer abschmecken. '
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/344811118790017/Bolognese.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Bolognese',
    //             tags: [
    //                 'Dunkles Fleisch',
    //                 'sideorder: Nudeln'
    //             ],
    //             ingredients: [
    //                 {quantity: 500, unit: 'gr', name: 'Hackfleisch'},
    //                 {quantity: 500, unit: 'gr', name: 'Spagetthi'},
    //                 {quantity: 200, unit: 'gr', name: 'Tomaten (passiert)'},
    //                 {quantity: 2, unit: 'stk', name: 'Zwiebel(n)'},
    //                 {quantity: 3, unit: 'stk', name: 'Möhren'},
    //                 {quantity: 100, unit: 'gr', name: 'Kartoffeln'},
    //                 {quantity: 50, unit: 'gr', name: 'Sellerie'},
    //                 {quantity: 500, unit: 'ml', name: 'Traubensaft'}
    //             ],
    //             steps: [
    //                 'Zwiebel in kleine Würfel schneiden, die Karotten und den Sellerie klein würfeln oder schaben.',
    //                 'Das Hackfleisch anbraten, funktioniert auch ohne Öl, nur der Topf sollte schön heiß sein. Die Zwiebel zufügen und glasig werden lassen.',
    //                 'Jetzt die Karotten, das Sellerie, die klein geschnittene Kartoffel, die Lorbeerblätter und klein gehacktes Knoblauch zufügen, mit ca. 500 ml Gemüsebrüche auffüllen. Ca. 30 Minuten köcheln lassen. Jetzt den Wein aufgießen und die passierten Tomaten zufügen. Die Soße auf kleiner Flamme einkochen lassen, ca. 2 Stunden. Je länger sie kocht, umso besser schmeckt sie. Auf jeden Fall darf die Soße nicht mehr flüssig sein.',
    //                 'Ca. 30 Minuten vor Ende der Kochzeit füge ich den restlichen Kräutern hinzu und schmecke die Soße evt. mit Salz und Pfeffer ab. Da es immer solange kochen muss, mache ich immer gleich die vierfache Menge und friere den Rest ein.',
    //             ]
    //         }
    //     )
    // );
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Fruchteis (TM)',
    //             tags: [
    //                 'vegetarisch'
    //             ],
    //             ingredients: [
    //                 {quantity: 300, unit: 'gr', name: 'Gefrorene Beeren'},
    //                 {quantity: 150, unit: 'gr', name: 'Joghurt (fettarm)'},
    //                 {quantity: 6, unit: 'tl', name: 'Stevia'}
    //             ],
    //             steps: [
    //                 'Stevia in TM geben und 10 sec. bei Stufen 10 pulverisieren',
    //                 'Gefrorene Beeren hinzufügen und 10 se. bei Stufe 5 zerkleinern',
    //                 'Die Masse mit dem Spachtel nach unten schieben',
    //                 'Joghurt hinzugeben und 10 sec. bei Stufe 5 vermengen'
    //             ]
    //         }
    //     )
    // );
    //
    //http://www.chefkoch.de/rezepte/344811118790017/Bolognese.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Gemüsestrudel',
    //             tags: [
    //                 'vegetarisch'
    //             ],
    //             ingredients: [
    //                 {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
    //                 {quantity: 2, unit: 'stk', name: 'Zucchini'},
    //                 {quantity: 2, unit: 'stk', name: 'Möhren'},
    //                 {quantity: 2, unit: 'stk', name: 'Knoblauchzehe(n)'},
    //                 {quantity: 2, unit: 'el', name: 'Crème Fraiche'},
    //                 {quantity: 1, unit: 'stk', name: 'Ei(er)'},
    //                 {quantity: 100, unit: 'gr', name: 'Schinken (gekocht)'},
    //                 {quantity: 1, unit: 'stk', name: 'Blätterteig'}
    //             ],
    //             steps: [
    //                 'Zwiebel, Knoblauch, Karotten fein schneiden und andünsten. Zum Schluss Zucchini beigeben und noch 10 Min. weiterdünsten. Die Masse überkühlen lassen. Dann mit Ei, Creme fraiche, Salz und Pfeffer abschmecken. Auf den Blätterteig Schinkenblätter auslegen, Fülle darauf geben, einrollen. Mit Ei bestreichen und ca. 30 Min. backen. ',
    //             ]
    //         }
    //     )
    // );
    //http://www.chefkoch.de/rezepte/237101096472618/Gruenkohl-wie-ihn-Mutter-kochte.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Gulasch',
    //             tags: [
    //                 'Dunkles Fleisch',
    //                 'sideorder: Kartoffeln'
    //             ],
    //             ingredients: [
    //                 {quantity: 800, unit: 'gr', name: 'Kartoffeln'},
    //                 {quantity: 1000, unit: 'gr', name: 'Gulasch'},
    //                 {quantity: 3, unit: 'stk', name: 'Zwiebeln'},
    //                 {quantity: 1, unit: 'stk', name: 'Knoblauchzehe(n)'},
    //                 {quantity: 1, unit: 'el', name: 'Senf'},
    //                 {quantity: 0.5, unit: 'stk', name: 'Gulaschgewürz (Packung)'},
    //                 {quantity: 1, unit: 'el', name: 'Frischkäse'},
    //                 {quantity: 100, unit: 'ml', name: 'Kondensmilch (4%)'},
    //                 {name: 'Paprikapulver'},
    //                 {name: 'Chillipulver'},
    //                 {name: 'Pfeffer'}
    //             ],
    //             steps: [
    //                 'Das Fleisch vor dem Braten in einer Schüssel mit dem Paprikapulver und Pfeffer und einem EL Senf vermengen. Fett in einem Topf heiß werden lassen, dann das Fleisch anbraten. Nach einigen Minuten die in Achtel geschnittenen Zwiebeln und die klein gehackte Knoblauchzehe dazu geben und weiter anbraten. Wenn das Fleisch angebraten ist wird es mit etwas Wasser abgelöscht, damit der Bratensatz losgekocht wird. Nun die Temperatur kleiner stellen und den Deckel auf Kippe darauf legen. Immer mal wieder nachshen, ob noch etwas Wasser nachgegossen werden muss. Nach ca. 45 Minuten müsste es gar sein. Probieren! Nun das Gulaschgewürz einstreuen und schauen ob genug S¥ße entstanden ist, sonst noch etwas Wasser dazu. Zum Schluss mit dem Sahnekäse und dwer Kondensmilch (man kann auch Sahne nehmen) abschmecken.',
    //             ]
    //         }
    //     )
    // );
    //
    //
    //
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Gurkensuppe',
    //             tags: [
    //                 'vegetarisch'
    //             ],

    //             ingredients: [
    //                 {quantity: 1, unit: 'stk', name: 'Gurken'},
    //                 {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
    //                 {quantity: 200, unit: 'gr', name: 'Frischkäse'},
    //                 {quantity: 200, unit: 'ml', name: 'Brühe'}
    //             ]
    //         }
    //     )
    // );
     //http://www.chefkoch.de/rezepte/267151103108036/Hackfleischspinatsauce.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Hackfleischspinatsauce',
    //             tags: [
    //                 'Dunkles Fleisch',
    //                 'sideorder: Nudeln'
    //             ],
    //             ingredients: [
    //                 {quantity: 400, unit: 'gr', name: 'Nudeln'},
    //                 {quantity: 300, unit: 'gr', name: 'Hackfleisch'},
    //                 {quantity: 3, unit: 'stk', name: 'Knoblauchzehe(n)'},
    //                 {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
    //                 {quantity: 300, unit: 'gr', name: 'Spinat (TK)'},
    //                 {quantity: 2, unit: 'stk', name: 'Schmelzkäse (Scheibe)'},
    //             ],
    //             steps: [
    //                 'Das Hackfleisch in einer Pfanne mit wenig Öl anbraten und dabei mit etwas Salz & Pfeffer würzen. Die Zwiebel würfeln und dazu geben. Den Knoblauch durch die Presse dazudrücken oder fein hacken und dazugeben. Alles gut anbraten bis es Farbe genommen hat. Dann den Spinat dazu und auftauen lassen. Mit etwas (soviel wie man Sauce haben möchte) Sahne aufgießen und den Käse reinzupfen, aufkochen lassen. Abschmecken mit Salz & Pfeffer - fertig. Dazu Nudeln und Salat.'
    //             ]
    //         }
    //     )
    // );
    //
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Keema',
    //             tags: [
    //                 'Dunkles Fleisch',
    //                 'sideorder: Kartoffeln'
    //             ],
    //             ingredients: [
    //                 {quantity: 1000, unit: 'gr', name: 'Hackfleisch'},
    //                 {quantity: 3, unit: 'stk', name: 'Zwiebel(n)'},
    //                 {quantity: 1, unit: 'stk', name: 'Koblauchzehen'},
    //                 {quantity: 3, unit: 'stk', name: 'Kartoffel(n)'},
    //                 {quantity: 1, unit: 'Tasse', name: 'Erbsen (TK)'},
    //                 {quantity: 3, unit: 'stk', name: 'Tomaten'},
    //                 {quantity: 100, unit: 'gr', name: 'Saure Sahne'},
    //                 {quantity: 2, unit: 'stk', name: 'Lorbeerblätter'},
    //                 {quantity: 0.5, unit: 'Stange', name: 'Zimt'},
    //                 {quantity: 3, unit: 'Kapseln', name: 'Kardamon'},
    //                 {quantity: 4, unit: 'stk', name: 'Nelken'},
    //                 {quantity: 1, unit: 'el', name: 'Kurkuma'},
    //                 {quantity: 0.5, unit: 'el', name: 'Ingwer'},
    //                 {quantity: 100, unit: 'gr', name: 'Wasser'}
    //             ],
    //             steps: [
    //                 'Gehacktes in dem Öl gut anbraten, dann die gewürfelten Kartoffeln ebenfalls mit anbraten. Lorbeerblätter, Kardamon, Nelken und Zimt zugeben. Zwiebeln und Knoblauch ebenfalls mit anbraten. Nun Kurkuma, Paprika, Ingwer und die gewürfelten Tomaten dazu. Das Wasser dazugießen, damit nichts anbrät und etwas köcheln lassen. Gferorene Erbsen und die saure Sahne dazu. Köcheln lassen, bis die Kartoffeln gar sind. Abschmecken mit Salz und Pfeffer.'
    //             ]
    //         }
    //     )
    // );
   // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Konfetti Gemüsekuchen',
    //             tags: [
    //                 'vegetarisch'
    //             ],
    //             ingredients: [
    //                 {quantity: 3, unit: 'stk', name: 'Paprika'},
    //                 {quantity: 400, unit: 'gr', name: 'Mehl'},
    //                 {quantity: 200, unit: 'gr', name: 'Frühlingszwiebeln'},
    //                 {quantity: 100, unit: 'gr', name: 'Gouda'},
    //                 {quantity: 4, unit: 'stk', name: 'Ei(er)'}
    //             ],
    //             steps: [
    //                 'Mehl mit Trockenhefe vermischen. Wasser, Salz und Öl dazu mischen und gehen lassen (ca. 15 Minuten).',
    //                 'Paprika putzen und fein würfeln. Frühlingszwiebeln putzen und in Ringe schneiden. Öl in einer Pfanne erhitzen. Paprikawürfel darin kurz andünsten und anschließend abkühlen lassen.',
    //                 'Teig auf einem gefetteten Blech ausrollen. Eier, Schmand und Käse miteinander verrühren mit Salz und Pfeffer würzen. Eier-Schmandcreme auf den Teig geben. Paprikawürfel und Frühlingszwiebeln darüber streuen.',
    //                 'Im vorgeheizten Backofen (E-Herd: 175°C, Gas: Stufe 2) ca. 40-45 Min. backen.'
    //             ]
    //         }
    //     )
    // );
    //
    //
    //
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Linsengemüse',
    //             tags: [
    //                 'vegetarisch',
    //                 'sideorder: Kartoffeln'
    //             ],
    //             ingredients: [
    //                 {quantity: 400, unit: 'gr', name: 'Linsen (Dose)'},
    //                 {quantity: 500, unit: 'gr', name: 'Kartoffeln'},
    //                 {quantity: 200, unit: 'gr', name: 'Frühlingszwiebeln'}
    //             ]
    //         }
    //     )
    // );
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Omlett',
    //             tags: [
    //                 'Dunkles Fleisch'
    //             ],
    //             ingredients: [
    //                 {quantity: 2, unit: 'stk', name: 'Ei(er)'},
    //                 {quantity: 1, unit: 'stk', name: 'Tomaten'},
    //                 {quantity: 200,  unit: 'gr', name: 'Gekochter Schinken'},
    //                 {quantity: 125, unit: 'gr', name: 'Mozzarella'},
    //                 {quantity: 200, unit: 'ml', name: 'Sahne'},
    //             ]
    //         }
    //     )
    // );
    //
     // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Milchreis',
    //             flags: '',
    //             ingredients: [
    //                 {quantity: 1000, unit: 'ml', name: 'Soja-/Kuhmilch'},
    //                 {quantity: 200,  unit: 'gr', name: 'Milchreis'},
    //                 {quantity: 1, unit: 'el', name: 'Honig'},
    //                 {name: 'Salz'},
    //             ],
    //             steps: [
    //                 'Die Milch mit dem Salz, dem Abrieb der Zitrosnenschale und dem Zucker in einen Topf geben und bei schwacher Hitze aufkochen. Milchreis hinzugeben, kräftig rühren und erneut aufkochen lassen. Bei schwacher Hitze den Reis etwa 30-35 Minuten in dem halb geschlossenem Topf quellen lassen, immer wieder rühren.'
    //             ],
    //             tags: [
    //                 'vegetarisch'
    //             ]
    //         }
    //     )
    // );
    //
    //http://www.chefkoch.de/rezepte/726401175430167/Porreegemuese.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Porreegemüse',
    //             tags: [
    //                 'vegetarisch',
    //                 'sideorder: ???'
    //             ],
    //             ingredients: [
    //                 {quantity: 1000, unit: 'gr', name: 'Lauch/Porree'},
    //                 {quantity: 200, unit: 'ml', name: 'Sahne'},
    //                 {quantity: 1, unit: 'el', name: 'Butter'},
    //                 {quantity: 1, unit: 'tl', name: 'Gemüsebrühe'}
    //             ],
    //             steps: [
    //                 'Das Grün des Porrees großzügig wegschneiden, danach die übrigbleibenden Stangen gründlich säubern. Diese anschließend in der Länge halbieren und in feine Scheibchen schneiden. Butter in einer großen Pfanne erhitzen und das Gemüse hinzufügen. Bei mäßiger Hitze so lange garen, bis der Porree weich ist. Mit 1-2 Tl Gemüsebrühe, etwas schwarzem Pfeffer und eventuell etwas Gemüsesalz würzen. Zum Schluss den Becher Sahne hinzufügen und etwas einkochen lassen.'
    //             ]
    //         }
    //     )
    // );
    //http://www.chefkoch.de/rezepte/401131129151622/Tandoori-Fleisch-in-raffinierter-Joghurtsosse.html
    // data.meals.push(
    //     $.extend({},
    //         templates.meal || {},
    //         {
    //             name: 'Tandoori',
    //             tags: [
    //                 'Helles Fleisch',
    //                 'sideorder: ???'
    //             ],
    //             ingredients: [
    //                 {quantity: 500, unit: 'gr', name: 'Hähnchenbrustfilet'},
    //                 {quantity: 250, unit: 'gr', name: 'Joghurt'},
    //                 {quantity: 200, unit: 'gr', name: 'Schmand'},
    //                 {quantity: 200, unit: 'gr', name: 'Kokosmilch'},
    //                 {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
    //                 {quantity: 1, unit: 'stk', name: 'Paprika'},
    //                 {quantity: 4, unit: 'tl', name: 'Tandoori Masala'},
    //                 {quantity: 2, unit: 'stk', name: 'Knoblauchzehe(n)'},
    //                 {quantity: 1, unit: 'stk', name: 'Brühwürfel'}
    //             ],
    //             steps: [
    //                 'Zwiebel in Streifen schneiden und andünsten. Knoblauch, gefrorene Paprika (verkocht nicht so schnell), 1 Brühwürfel und Tandoori-Gewürz hinzugeben, von der Platte nehmen und abkühlen lassen. Fleisch in Streifen schneiden und rundum anbraten. Gemüse inkl. Sud mit Schmand, Joghurt und Kokosmilch verrühren. Das gebratene Fleisch hinzugeben. Mit Zitronensaft und vielleicht einem weiteren Brühwürfel abschmecken. Alles in eine Auflauf-Form geben und über Nacht ziehen lassen, mind. aber 3-4 Stunden. Danach in den Backofen geben und ca. 30-40 Minuten bei 180°C im Backofen backen lassen. Offene Auflaufformen mit Alufolie abdecken.'
    //             ]
    //         }
    //     )
    // );

    //sort
    data.meals.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase())
          return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase())
          return -1;
        return 0;
    });

    return {

        get: function (type, name) {
            var list = data[type] || data.meals;
            if (name) {
                return _.find(list, function (item) {
                    return item.name === name;
                });
            } else {
                return list;
            }
        },

        ingredients: function (list) {
            var hash = {};
            _.each(list, function (meal) {
                _.each(meal.ingredients, function (ing) {
                    hash[ing.name] = hash[ing.name] || {};
                    ing.unit = ing.unit || '';
                    hash[ing.name][ing.unit] = hash[ing.name][ing.unit] || 0;
                    hash[ing.name][ing.unit] = hash[ing.name][ing.unit] +  (ing.quantity || 1);

                });
            });
            return hash;
        }

    };
});
