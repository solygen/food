define('recipies', [], function () {

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

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Backofenkartoffeln',
                flags: '',
                ingredients: [
                    {quantity: 3, unit: 'stk', name: 'Kartoffeln'},
                    {name: 'Olivenöl'},
                    {name: 'Paprikapulver (rosenscharf)'}
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/344811118790017/Bolognese.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Bolognese',
                flags: '',
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Hackfleisch'},
                    {quantity: 500, unit: 'gr', name: 'Spagetthi'},
                    {quantity: 200, unit: 'gr', name: 'Tomaten (passiert)'},
                    {quantity: 2, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 3, unit: 'stk', name: 'Karotten'},
                    {quantity: 2, unit: 'stk', name: 'Kartoffeln'},
                    {quantity: 50, unit: 'gr', name: 'Sellerie'},
                    {quantity: 500, unit: 'ml', name: 'Traubensaft'}
                ],
                steps: [
                    'Zwiebel in kleine Würfel schneiden, die Karotten und den Sellerie klein würfeln oder schaben.',
                    'Das Hackfleisch anbraten, funktioniert auch ohne Öl, nur der Topf sollte schön heiß sein. Die Zwiebel zufügen und glasig werden lassen.',
                    'Jetzt die Karotten, das Sellerie, die klein geschnittene Kartoffel, die Lorbeerblätter und klein gehacktes Knoblauch zufügen, mit ca. 500 ml Gemüsebrüche auffüllen. Ca. 30 Minuten köcheln lassen. Jetzt den Wein aufgießen und die passierten Tomaten zufügen. Die Soße auf kleiner Flamme einkochen lassen, ca. 2 Stunden. Je länger sie kocht, umso besser schmeckt sie. Auf jeden Fall darf die Soße nicht mehr flüssig sein.',
                    'Ca. 30 Minuten vor Ende der Kochzeit füge ich den restlichen Kräutern hinzu und schmecke die Soße evt. mit Salz und Pfeffer ab. Da es immer solange kochen muss, mache ich immer gleich die vierfache Menge und friere den Rest ein.',
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Champignonpfännchen',
                flags: '',
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
                flags: '',
                ingredients: [
                    {quantity: 300, unit: 'gr', name: 'Hackfleisch'},
                    {quantity: 400, unit: 'gr', name: 'kartoffeln'},
                    {quantity: 1000, unit: 'gr', name: 'Möhren'},
                    {quantity: 1, unit: 'stk', name: 'Porree'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe'},
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
                flags: '',
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Nudeln'},
                    {quantity: 100, unit: 'gr', name: 'Speckwürfel'},
                    {quantity: 4, unit: 'stk', name: 'Ei(er)'}
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/344811118790017/Bolognese.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Gemüsestrudel',
                flags: '',
                ingredients: [
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 2, unit: 'stk', name: 'Zucchini'},
                    {quantity: 2, unit: 'stk', name: 'Koblauchzehen'},
                    {quantity: 2, unit: 'el', name: 'Crème fraîche'},
                    {quantity: 1, unit: 'stk', name: 'Ei(er)'},
                    {quantity: 100, unit: 'gr', name: 'Schinken (gekocht)'},
                    {quantity: 1, unit: 'stk', name: 'Blätterteig'}
                ],
                steps: [
                    'Zwiebel, Knoblauch, Karotten fein schneiden und andünsten. Zum Schluss Zucchini beigeben und noch 10 Min. weiterdünsten. Die Masse überkühlen lassen. Dann mit Ei, Creme fraiche, Salz und Pfeffer abschmecken. Auf den Blätterteig Schinkenblätter auslegen, Fülle darauf geben, einrollen. Mit Ei bestreichen und ca. 30 Min. backen. ',
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Grünkohl',
                flags: '',
                ingredients: [
                    {quantity: 1000, unit: 'gr',  name: 'TK Grünköhl'},
                    {quantity: 300, unit: 'gr',  name: 'Hackfleisch'},
                    {quantity: 2, unit: 'stk',  name: 'Zwiebel(n)'},
                    {quantity: 3, unit: 'stk',  name: 'Mettwürstchen'},
                    {quantity: 300, unit: 'gr',  name: 'Kassler'},
                    {quantity: 100, unit: 'gr',  name: 'Gänseschmalz'},
                    {quantity: 400, unit: 'gr', name: 'Kartoffeln'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Gulasch',
                flags: '',
                ingredients: [
                    {quantity: 400, unit: 'gr', name: 'Gulasch'},
                    {quantity: 200, unit: 'gr', name: 'Pilze'},
                    {quantity: 4, unit: 'gr', name: 'Zwiebel(n)'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Gurkensuppe',
                flags: '',
                ingredients: [
                    {quantity: 1, unit: 'gr', name: 'Gurken'},
                    {quantity: 1, unit: 'gr', name: 'Zwiebel(n)'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hähnchengulasch',
                flags: '',
                ingredients: [
                    {quantity: 4, unit: 'stk', name: 'Hähnchenschenkel'},
                    {quantity: 4, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 500, unit: 'gr', name: 'Spagetthi'}
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/267151103108036/Hackfleischspinatsauce.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hackfleischspinatsauce',
                flags: '',
                ingredients: [
                    {quantity: 400, unit: 'gr', name: 'Nudeln'},
                    {quantity: 500, unit: 'gr', name: 'Hackfleisch'},
                    {quantity: 3, unit: 'stk', name: 'Knoblauchzehen'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 300, unit: 'gr', name: 'Spinat (TK)'},
                    {quantity: 2, unit: 'stk', name: 'Schmelzkäse (Scheibe)'},
                ],
                steps: [
                    'Das Hackfleisch in einer Pfanne mit wenig Öl anbraten und dabei mit etwas Salz & Pfeffer würzen. Die Zwiebel würfeln und dazu geben. Den Knoblauch durch die Presse dazudrücken oder fein hacken und dazugeben. Alles gut anbraten bis es Farbe genommen hat. Dann den Spinat dazu und auftauen lassen. Mit etwas (soviel wie man Sauce haben möchte) Sahne aufgießen und den Käse reinzupfen, aufkochen lassen. Abschmecken mit Salz & Pfeffer - fertig. Dazu Nudeln und Salat.'
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/993651204647871/Haehnchenbrust-in-Zwiebelsahne.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hähnchenbrust in Zwiebelsahne',
                flags: '',
                ingredients: [
                    {quantity: 400, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 3, unit: 'stk', name: 'Zwiebel (rot)'},
                    {quantity: 200, unit: 'gr', name: 'Sahne'},
                    {quantity: 200, unit: 'gr', name: 'Crème Fraiche'}
                ],
                steps: [
                    'Die Hähnchenbrust mit Salz, Pfeffer und Cayennepfeffer würzen und in einer Pfanne in heißem Butterschmalz von beiden Seiten anbraten. Nun in eine gebutterte Auflaufform geben und abdecken. In derselben Pfanne die in Ringe geschnittenen Zwiebel geben und gut anschmoren, dass sie Farbe bekommen. Die fertige Zwiebel über die Hähnchenbrust geben. Sahne und Créme fraíche miteinander verrühren, gut würzen und über das Ganze geben. Den Backofen auf 180° vorheizen und 20-25 Minuten backen.'
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/407971130376848/Haehnchenschenkel-mit-Ofen-Schmand-Gemuese.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hähnchenschenkel mit Schmand-Gemüse',
                flags: '',
                ingredients: [
                    {quantity: 4, unit: 'stk', name: 'Hähnchenschenkel'},
                    {quantity: 800, unit: 'gr', name: 'Kartoffeln'},
                    {quantity: 1, unit: 'stk', name: 'Zucchini'},
                    {quantity: 300, unit: 'gr', name: 'Champignons'},
                    {quantity: 10, unit: 'stk', name: 'Cherrytomaten'},
                    {quantity: 200, unit: 'gr', name: 'Schmand'},
                    {quantity: 200, unit: 'gr', name: 'Joghurt'},
                    {quantity: 100, unit: 'gr', name: 'Schnittlauch (TK)'},
                    {quantity: 2, unit: 'stk', name: 'Knoblauchzehen'}
                ],
                steps: [
                    'Den Backofen auf 200 Grad vorheizen. Hähnchenschenkel waschen und trocken tupfen. Die Schenkel großzügig mit Hähnchengewürz, Paprika und der gekörnten Brühe würzen. Achtung, die Schenkel nicht einölen. Anschließend die Kartoffeln schälen und in mundgerechte Stücke schneiden. Die Zucchini putzen, waschen, halbieren und in ca. 1-cm-dicke Scheiben schneiden. Die Champignons putzen und evt. halbieren. Die Tomaten ebenfalls waschen und evt. halbieren. Die Kartoffeln in einer Fettpfanne verteilen und mit Olivenöl beträufeln. Dann mit Salz, Pfeffer und Rosmarin würzen. Über die Fettpfanne einen Grillrost und darauf die Hähnchenschenkel legen. Die Fettpfanne samt Grillrost in den Ofen schieben und ca. 20 Minuten braten/grillen. Nun tropft das leckere Hähnchenfett auf die Kartoffeln, was einen ganz tollen Geschmack gibt. Anschließend das klein geschnittene Gemüse zu den Kartoffeln in die Pfanne geben und nochmals weitere 15 Minuten in den Ofen. In der Zwischenzeit den Schmand und den Joghurt verrühren. Die Knoblauchzehen dazupressen, den Schnittlauch unterrühren und kräftig mit Salz und Pfeffer würzen. Nach ca. 35-40 Minuten die Hähnchenschenkel mit dem Ofengemüse servieren und die Schmandcreme dazureichen.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Hühnerfrikassee',
                flags: '',
                ingredients: [
                    {quantity: 1, unit: 'stk', name: 'Suppenhuhn'},
                    {quantity: 300, unit: 'gr',  name: 'TK Erbsen'},
                    {quantity: 200, unit: 'ml',  name: 'Sahne'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Kohlgemüse mit Bratwurst',
                flags: '',
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
                name: 'Konfetti Gemüsekuchen',
                flags: 'vegetarisch',
                ingredients: [
                    {quantity: 3, unit: 'stk', name: 'Paprika'},
                    {quantity: 400, unit: 'gr', name: 'Mehl'},
                    {quantity: 4, unit: 'stk', name: 'Frühlingszwiebel(n)'},
                    {quantity: 100, unit: 'gr', name: 'Gouda'},
                    {quantity: 4, unit: 'stk', name: 'Ei(er)'}
                ],
                steps: [
                    'Mehl mit Trockenhefe vermischen. Wasser, Salz und Öl dazu mischen und gehen lassen (ca. 15 Minuten).',
                    'Paprika putzen und fein würfeln. Frühlingszwiebeln putzen und in Ringe schneiden. Öl in einer Pfanne erhitzen. Paprikawürfel darin kurz andünsten und anschließend abkühlen lassen.',
                    'Teig auf einem gefetteten Blech ausrollen. Eier, Schmand und Käse miteinander verrühren mit Salz und Pfeffer würzen. Eier-Schmandcreme auf den Teig geben. Paprikawürfel und Frühlingszwiebeln darüber streuen.',
                    'Im vorgeheizten Backofen (E-Herd: 175°C, Gas: Stufe 2) ca. 40-45 Min. backen.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Lachs',
                flags: '',
                ingredients: [
                    {quantity: 200, unit: 'gr',  name: 'Lachs'},
                    {quantity: 500, unit: 'gr',  name: 'Nudeln'},
                    {quantity: 200, unit: 'ml',  name: 'Sahne'},
                    {quantity: 100, unit: 'gr',  name: 'Frischkäse'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Linsengemüse',
                flags: '',
                ingredients: [
                    {quantity: 400, unit: 'gr', name: 'Linsen (Dose)'},
                    {quantity: 500, unit: 'gr', name: 'Kartoffeln'},
                    {quantity: 200, unit: 'gr', name: 'Frühlingszwiebel(n)'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Omlett',
                flags: '',
                ingredients: [
                    {quantity: 2, unit: 'stk', name: 'Ei(er)'},
                    {quantity: 1, unit: 'Stk', name: 'Tomaten'},
                    {quantity: 200,  unit: 'gr', name: 'Gekochter Schinken'},
                    {quantity: 200, unit: 'gr', name: 'Mozarella'},
                    {quantity: 200, unit: 'ml', name: 'Sahne'},
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
                    {quantity: 3, unit: 'stk',  name: 'Paprika'},
                    {quantity: 300, unit: 'gr',  name: 'Hackfleisch'},
                    {quantity: 2, unit: 'stk',  name: 'Zwiebel(n)'},
                    {quantity: 100, unit: 'gr',  name: 'Frischkäse'},
                    {quantity: 300, unit: 'gr', name: 'Reis'},
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Pasta Asciutta',
                flags: '',
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Hackfleisch'},
                    {quantity: 5, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Bolognese-Fix'},
                    {quantity: 50, unit: 'gr', name: 'Tomatenmark'},
                    {quantity: 1, unit: 'stk', name: 'Pizzatomaten (Dose)'},
                    {quantity: 100, unit: 'gr', name: 'Sahnekäse'},
                ],
                steps: [
                    'Die Zwiebeln in feine Ringe schneiden und in Olivenöl anbraten (nicht braun werden lassen)und dann mit heißem Wasser (ca. 1/2 liter)weich kochen lassen. Währenddessen das Gehackte in Butterfett oder Palmin scharf anbraten, bis es braun ist und mit Salz, Pfeffer, Oregano und Paprika würzen. Danach das Tütchen Bolognese reinstreuen. Wenn die Zwiebeln schön weichgekocht sind, gibst Du das Gehackte dazu. Nun kommen die geschälten Tomaten und das Tomatenmark rein. Alles noch bei kleiner Flamme ca. 30 Minuten köcheln lassen. Zum Schluß gibst Du 1-2 Eßl. Sahnekäse dazu und schmeckst ab.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Pizza',
                flags: '',
                ingredients: [
                    {quantity: 2, unit: 'stk',  name: 'Pizzateig'},
                    {quantity: 50, unit: 'gr',  name: 'Tomatenmark'},
                    {quantity: 200, unit: 'gr',  name: 'Tomaten (passiert)'},
                    {quantity: 200, unit: 'gr',  name: 'Pilze'},
                    {quantity: 300, unit: 'gr', name: 'Gouda'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Pizza (Variante)',
                flags: '',
                ingredients: [
                    {name: 'Olivenöl'},
                    {name: 'Mehl'},
                    {name: 'Trockenhefe'},
                    {name: 'passierte Tomaten'}
                ],
                steps: [
                    'Du nimmst eine große Schüssel mischst Du etwas Hefe rein. ca. 1 kleiner Teelöffel und einen Löffel Zucker und eine Prise Salz, vermengen. Dann kommt eine viertel Tasse Milch und eine viertel Tasse heisses Wasser mit dazu. Umrühren, 2 Minuten stehen lassen. Dann noch einen Schuß Olivenöl. Und und dann mischst Du ca. 3- 3 1/2 Tassen Mehl( große Tassen) dazu und knetest alles. Eventuell brauchts Du noch etwas mehr Mehl oder Wasser. Danach machst Du die Pizzasauce: eine kleine Knoblauch klein schneiden. Dann passierte Tomatensauce dazu.Gewürze und wenn Du hast teifgefrorene Kräuter und einen Schuß Olivenöl.'
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/726401175430167/Porreegemuese.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Porreegemüse',
                flags: 'min-20',
                ingredients: [
                    {quantity: 1000, unit: 'gr', name: 'Lauch/Porree'},
                    {quantity: 200, unit: 'gr', name: 'Sahne'},
                    {quantity: 1, unit: 'el', name: 'Butter'},
                    {quantity: 1, unit: 'tl', name: 'Gemüsebrühe'}
                ],
                steps: [
                    'Das Grün des Porrees großzügig wegschneiden, danach die übrigbleibenden Stangen gründlich säubern. Diese anschließend in der Länge halbieren und in feine Scheibchen schneiden. Butter in einer großen Pfanne erhitzen und das Gemüse hinzufügen. Bei mäßiger Hitze so lange garen, bis der Porree weich ist. Mit 1-2 Tl Gemüsebrühe, etwas schwarzem Pfeffer und eventuell etwas Gemüsesalz würzen. Zum Schluss den Becher Sahne hinzufügen und etwas einkochen lassen.'
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Spinat',
                flags: '',
                ingredients: [
                    {quantity: 300, unit: 'gr',  name: 'Spinat'},
                    {quantity: 500, unit: 'gr',  name: 'Kartoffeln'},
                    {quantity: 1, unit: 'stk',  name: 'Zwiebel(n)'}
                ]
            }
        )
    );

    //http://www.chefkoch.de/rezepte/401131129151622/Tandoori-Fleisch-in-raffinierter-Joghurtsosse.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Tandoori',
                flags: '',
                ingredients: [
                    {quantity: 500, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 250, unit: 'gr', name: 'Joghurt'},
                    {quantity: 200, unit: 'gr', name: 'Schmand'},
                    {quantity: 1, unit: 'Dose', name: 'Kokosmilch'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Paprika'},
                    {quantity: 4, unit: 'tl', name: 'Tandoori Masala'},
                    {quantity: 2, unit: 'stk', name: 'Knoblauchzehe'},
                    {quantity: 1, unit: 'stk', name: 'Brühwürfel'}
                ],
                steps: [
                    'Zwiebel in Streifen schneiden und andünsten. Knoblauch, gefrorene Paprika (verkocht nicht so schnell), 1 Brühwürfel und Tandoori-Gewürz hinzugeben, von der Platte nehmen und abkühlen lassen. Fleisch in Streifen schneiden und rundum anbraten. Gemüse inkl. Sud mit Schmand, Joghurt und Kokosmilch verrühren. Das gebratene Fleisch hinzugeben. Mit Zitronensaft und vielleicht einem weiteren Brühwürfel abschmecken. Alles in eine Auflauf-Form geben und über Nacht ziehen lassen, mind. aber 3-4 Stunden. Danach in den Backofen geben und ca. 30-40 Minuten bei 180°C im Backofen backen lassen. Offene Auflaufformen mit Alufolie abdecken.'
                ]
            }
        )
    );


    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Tomatensauce mit Mozzarella',
                flags: '',
                ingredients: [
                    {quantity: 400, unit: 'gr', name: 'Mozzarella'},
                    {quantity: 9, unit: 'stk', name: 'Tomaten'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 2, unit: 'stk', name: 'Knoblauchzehe'}
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
                flags: '',
                ingredients: [
                    {quantity: 800, unit: 'gr', name: 'Tortellini (Frischeregal'},
                    {quantity: 400, unit: 'gr', name: 'Sahne'},
                    {quantity: 200, unit: 'gr', name: 'Kaffeesahne'},
                    {quantity: 200, unit: 'gr', name: 'Schinken (gekocht)'},
                    {quantity: 2, unit: 'stk', name: 'Eier (Eigelb)'},
                    {quantity: 4, unit: 'el', name: 'Parmesan'},
                    {quantity: 1, unit: 'el', name: 'Butter'}
                ],
                steps: [
                    'Die Tortellinis nach Packungsanweisung kochen. Den gewürfelten gekochten Schinken in einer tiefen Pfanne mit Butter kurz anbraten, dann 400ml von der Sahne hineingeben und auf kleiner Stufe köcheln lassen. Wenn die Tortellini gar sind, in die Pfanne zur Schinkensahne geben und weiter köcheln lassen. In der Zwischenzeit in einer kleinen Schüssel das Eigelb, den Parmesan, Muskatnuss, Salz und die restliche 200 ml Sahne verrühren, dann in die Pfanne zu den Tortellinis geben und so lange köcheln lassen, bis die Soße dickflüssig wird. Sofort servieren. Sehr gehaltvoll, aber der Geschmack ist fantastisch. Ab und zu kann man sich´s mal gönnen.'
                ]
            }
        )
    );


    //http://www.chefkoch.de/rezepte/1112791217324924/Schnelle-Haehnchenbrust-Zucchini-Pfanne.html
    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Zucchini mit Hähnchenbrust',
                flags: '',
                ingredients: [
                    {quantity: 300, unit: 'gr', name: 'Zucchini'},
                    {quantity: 300, unit: 'gr', name: 'Reis'},
                    {quantity: 1, unit: 'stk', name: 'Zwiebel(n)'},
                    {quantity: 1, unit: 'stk', name: 'Knoblauchzehe'},
                    {quantity: 300, unit: 'gr', name: 'Hähnchenbrustfilet'},
                    {quantity: 200, unit: 'gr', name: 'Saure Sahne'}
                ]
            }
        )
    );

    data.meals.push(
        $.extend({},
            templates.meal || {},
            {
                name: 'Zürcher Geschnetzeltes',
                flags: '',
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
                    ing.unit = ing.unit || 'littlebit';
                    hash[ing.name][ing.unit] = hash[ing.name][ing.unit] || 0;
                    hash[ing.name][ing.unit] = hash[ing.name][ing.unit] +  (ing.quantity || 1);

                });
            });
            return hash;
        }

    };
});
