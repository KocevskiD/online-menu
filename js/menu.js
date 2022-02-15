var flag = 0;
$(document).ready(function () {
  $(".starters").click(function () {
    $(".starter").toggle(0.5);
    
  });

  $(".salads").click(function () {
    $(".salad").toggle();
    
  });

  $(".pizzas").click(function () {
    $(".pizza").toggle();
  });

  $(".pastas").click(function () {
    $(".pasta").toggle();
  });

  $(".grills").click(function () {
    $(".grill").toggle();
  });

  $(".rizotos").click(function () {
    $(".rizoto").toggle();
  });

  $(".breadmeats").click(function () {
    $(".breadmeat").toggle();
  });

  $(".boards").click(function () {
    $(".board").toggle();
  });

  $(".orders").click(function () {
    $(".order").toggle();
  });

  $(".burgers").click(function () {
    $(".burger").toggle();
  });

  $(".buritos").click(function () {
    $(".burito").toggle();
  });

  $(".desserts").click(function () {
    $(".dessert").toggle();
  });

  $("#jazik").click(function () {
    if (flag % 2 == 1) {
      $("#doma").html("ДОМА");
      $("#meni").html("МЕНИ");
      $("#jazik").html("ЈАЗИК: МКД");
      $("#kontakt").html("КОНТАКТ");

      $("#ponuda").html("Понуда");
      $("#srca").html("од нашите срца");

      $("#vrvnoKafe").html("Врвно Кафе");
      $("#kvalitetniProdukti").html("Квалитетни Продукти");
      $("#zdraviObroci").html("Здрави Оброци");

      $("#dobredojdovte").html("Добредојдовте во Friends Bar&Grill");
      $("#organizirame").html(
        "Организираме настани, крштевки, родендени и прослави, резервирајте го вашето место на бројот 071-490/910."
      );
     

      $("#najdobraHrana").html("Најдобрата Храна");
      $("#nasiotGrad").html("во нашиот град");

      $("#predjadenja").html("Предјадења");
      $("#salati").html("Салати");
      $("#pici").html("Прици");
      $("#pasta").html("Паста");
      $("#skara").html("Скара");
      $("#rizoto").html("Ризото");
      $("#pastramajlii").html("Пастрамајлии");
      $("#daski").html("Даски");
      $("#naracka").html("Јадење по Нарачка");
      $("#burgeri").html("Бургери");
      $("#burita").html("Бурита");
      $("#deserti").html("Десерти");

      $("#cheese").html("Сирење");
      $("#grilled-cheese").html("Сирење На Скара");
      $("#sopski-cheesee").html("Сирење По Шопски");
      $("#melted-cheese").html("Топено Сирење");
      $("#gorki-fries").html("Горки Помфрит");
      $("#fries").html("Помфрит");
      $("#baked-potatoes").html("Пекарски Компир");
      $("#chicken-fingers").html("Пилешки Прсти");
      $("#chicken-wings").html("Пилешки Крилца");
      $("#grilled-shampinjoni").html("Шампињони На Скара");
      $("#deep-fried-shampinjoni").html("Поховани Шампињони");
      $("#pirozhki").html("Пирошка");
      $("#deep-fried-kashkaval").html("Похован Кашкавал");
      $("#deep-fried-zdenka").html("Поховани Зденки");
      $("#grilled-pumkin").html("Тиквички На Скара");
      $("#deep-fried-pumkin").html("Поховани Тиквички");
      $("#enriko").html("Фурнарини");
      $("#enriko-with-kashkaval").html("Фурнарини Со Кашкавал");
      $("#enriko-with-cheese").html("Фурнарини Со Сирење");
      $("#enriko-with-garlic").html("Фурнарини Со Лукче");

      $("#shopska").html("Шопска");
      $("#greek-salad").html("Грчка Салата");
      $("#macedonian-salad").html("Македонска Салата");
      $("#mixed-salad").html("Мешана Салата");
      $("#tartar").html("Таратор Со Павлака");
      $("#tuna-salad").html("Туна Салата");
      $("#ovchar-salad").html("Овчарска Салата");
      $("#caesar-salad").html("Цезар Салата");

      $("#margherita").html("Маргарита");
      $("#olive").html("Олива");
      $("#neapolitan").html("Наполитана");
      $("#quattro-formaggi").html("4 Вида Сирење");
      $("#capricciosa").html("Капричоза");
      $("#pepperoni").html("Пеперони");
      $("#macedonian").html("Македонска");
      $("#gurman").html("Гурманска");
      $("#vegetarian").html("Вегетаријана");
      $("#tuna-pizza").html("Туна Пица");
      $("#prosciutto-pizza").html("Пршута Пица");

      $(".pelati").html("пелати");
      $(".kashkaval").html("кашкавал");
      $(".oregano").html("оригано");
      $(".olives").html("маслинки");
      $(".gauda").html("гауда");
      $(".mushrooms").html("печурки");
      $(".mozzarella").html("гауда");
      $(".cheddar").html("гауда");
      $(".parmesan").html("пармезан");
      $(".ham").html("шунка");
      $(".cullen").html("кулен");
      $(".pepper").html("пиперка");
      $(".cheese").html("сирење");
      $(".pork-neck").html("св.врат");
      $(".golden-mix").html("златна мешавина");
      $(".tomato").html("домат");
      $(".tuna").html("туна");
      $(".corn").html("пченка");
      $(".prosciutto").html("пршута");
      $(".sour-cream").html("павлака");

      $("#bolognese").html("Болоњезе");
      $("#carbonara").html("Карбонара");
      $("#pasta-and-cheese").html("Паста и Сирење");
      $("#pesto").html("Песто");
      $("#chicken-alfredo").html("Пилешко Алфредо");
      $("#fungi").html("Фунги");

      $(".minced-meat").html("мелено месо");
      $(".bacon").html("сланина");
      $(".white-soucе").html("бел сос");
      $(".cheddar-kashkaval").html("чедар кашкавал");
      $(".pesto-souce").html("песто сос");
      $(".chicken-meat").html("пилешко месо");

      $("#kebab").html("кебапи");
      $("#sausage").html("Дебел Колбас");
      $("#thin-sausage").html("Тенок Колбас");
      $("#rolled-chicken").html("Ролован Пилешки");
      $("#hish-kebab").html("Ражнич");
      $("#filled-steak").html("Полнет Стек");
      $("#pork-leg-fillet").html("Бела Вешалица");
      $("#rib").html("Ребро");
      $("#chicken-breast").html("Пилешки Стек");
      $("#minced-meat").html("Плескавица");
      $("#minced-meat-sharska").html("Шарска");
      $("#uvijac").html("Увијач");

      $("#with-vegetables").html("Со Зеленчук");
      $("#with-steak").html("Со Пилешки Стек");
      $("#with-chicken").html("Со Пилешко");
      $("#with-white-sauce").html("Со Бел Сос");
      $("#with-curry-sauce").html("Со Кари Сос");

      $("#pork").html("Свинска");
      $("#smoked-pork").html("Чадена");
      $("#double").html("Дупла");

      $("#warm-small-apetizers").html("Мала Даска");
      $("#warm-big-apetizers").html("Голема Даска");
      $("#combination").html("Комбинирана");
      $(".chicken-fingers").html("пилешки прсти");
      $(".zucchini").html("тиквички");
      $(".deep-fried-cheese").html("поховано сирење");
      $(".deep-fried-kashkaval").html("похован кашкавал");
      $(".zdenka").html("зденка");
      $(".medallion").html("медаљони");

      $("#burger").html("Бургер");
      $("#friends-burger").html("Френдс Бургер");
      $("#bbq-burger").html("BBQ Бургер");
      $("#small-beef-burger").html("Мал Телешки");
      $("#big-beef-burger").html("Голем Телешки");
      $("#bacon-burger").html("Бургер со Сланина");
      $("#big-mac-burger").html("Big Mac");
      $("#chicken-burger").html("Чикен Бургер");
      $("#crispy-chicken-burger").html("Криспи Бургер");

      $(".minced-meat").html("плескавица");
      $(".burger-sauce").html("бургер сос");
      $(".lettuce").html("марула");
      $(".onion").html("кромид");
      $(".pickle").html("к. краст");
      $(".bbq-sauce").html("BBQ - сос");
      $(".100-beef").html("100% телешко");
      $(".argula").html("рукола");
      $(".egg").html("јајце");
      $(".chicken-breast-ingr").html("стек");
      $(".curry-sauce").html("кари сос");
      $(".deep-fried-chicken-breast").html("похован стек");
      $(".baked-potatoes").html("пекарски компир");

      $("#chicken-mozzarella-sauce").html("Пил. во Сос од Моцарела");
      $("#chicken-white-sauce").html("Пил. во Бел Сос");
      $("#chicken-curry-sauce").html("Пил. во Кари Сос");
      $("#chicken-monako-sauce").html("Пил. во Монако Сос");
      $("#chicken-zhulien-sauce").html("Пил. во Жулиен Сос");
      $("#pork-sauce").html("Свинско во Сос");
      $("#fine-chopped-meat").html("Ситнеш");
      $("#trout").html("Пастрма со Гарнир");

      $(".mozzarella-sauce").html("сос од моцарела");
      $(".fries-ingr").html("помфрит");
      $(".white-sauce-with-mushrooms").html("бел сос со печурки");
      $(".curry-sauce-with-mushrooms").html("кари сос со печурки");
      $(".nuts").html("лешници");
      $(".honey").html("мед");
      $(".pork-leg-fillet-ingr").html("бела вешалица");
      $(".sauce").html("сос");
      $(".trout-ingr").html("пастрма");
      $(".kashkaval-ingr").html("кашкавал");
      $(".shampinjoni").html("шампињони");
      $(".svinsko-pilesko").html("свинско/пилешко");
      

      $("#waffle").html("Вафла");
      $("#oreo-waffle").html("Орео Вафла");
      $("#kinder-waffle").html("Киндер Вафла");
      $("#ice-cream-waffle").html("Сладолед Вафла");
      $("#snickers-waffle").html("Сникерс Вафла");
      $("#strawberry-waffle").html("Јагода Вафла");
      $("#milka-waffle").html("Милка Вафла");
      $("#cream-banana-waffle").html("Крем Банана Вафла");
      $("#snikers-pancakes").html("Сникерс Палачинка");
      $("#honey-nut-pancake").html("Мед и Ореви Палачинка");
      $("#strawberry-pancake").html("Јагода Палачинки");
      $("#milka-strawberry-pancake").html("Милка Јагода Палачинка");
      $("#american-pancake").html("Американска Палачинка");
      $("#lava-cake").html("Топло Ладно");
      $("#tiramisu").html("Тирамису");
      $("#cheesecake").html("Чизкејк");

      $("#so-slanina").html("Со Сланина");
      $("#chicken-burrito").html("Пилешко Бурито");
      $("#ceaser-burrito").html("Цезар Бурито");
      $("#vege-burrito").html("Веге Бурито");
      $("#beef-burrito").html("Телешко Бурито");
      $("#chili-burrito").html("Чили Бурито");
  

      $(".chili-sauce").html("чили сос");
      $(".ceaser-sauce").html("цезар сос");
      $(".tortilla").html("тортиља");


      $(".gram").html("гр");
      $(".mkd").html("мкд");
      $(".num").html("бр");
      $(".den").html("ден");
      $(".kg").html("кг");

      flag++;
      
    } else {
      $("#doma").html("HOME");
      $("#meni").html("MENU");
      $("#jazik").html("Language: ENG");
      $("#kontakt").html("CONTACT: 071-490/910");

      $("#ponuda").html("Offer");
      $("#srca").html("from our hearts");

      $("#vrvnoKafe").html("The Best Coffee");
      $("#kvalitetniProdukti").html("Quality Products");
      $("#zdraviObroci").html("Healthy Meals");

      $("#dobredojdovte").html("Welcome to Friends Bar&Grill");
      $("#organizirame").html(
        "We organize events, baptizing, birthdays and celebrations, book your event on - 071-490/910."
      );
      
      

      $("#najdobraHrana").html("The Best Food");
      $("#nasiotGrad").html("in town");

      $("#predjadenja").html("Starters");
      $("#salati").html("Salads");
      $("#pici").html("Pizza");
      $("#pasta").html("Pasta");
      $("#skara").html("Grills");
      $("#rizoto").html("Risotto");
      $("#pastramajlii").html("Pastrmajka");
      $("#daski").html("Apetizers");
      $("#naracka").html("Special Meals");
      $("#burgeri").html("Burgers");
      $("#burita").html("Burrito");
      $("#deserti").html("Desserts");

      $("#cheese").html("Cheese");
      $("#grilled-cheese").html("Grilled Cheese");
      $("#sopski-cheesee").html("Shopski Cheese");
      $("#melted-cheese").html("Melted Cheese");
      $("#gorki-fries").html("Gorki Fries");
      $("#fries").html("Fries");
      $("#baked-potatoes").html("Baked Potatoes");
      $("#chicken-fingers").html("Chicken Fingers");
      $("#chicken-wings").html("Chicken Wings");
      $("#grilled-shampinjoni").html("Grilled Shampinjoni");
      $("#deep-fried-shampinjoni").html("Deep Fried Shampinjoni");
      $("#pirozhki").html("Pirozhki");
      $("#deep-fried-kashkaval").html("Deep Fried Kashkaval");
      $("#deep-fried-zdenka").html("Deep Fried Zdenka");
      $("#grilled-pumkin").html("Grilled Pumkin");
      $("#deep-fried-pumkin").html("Deep Fried Pumkin");
      $("#enriko").html("Enriko");
      $("#enriko-with-kashkaval").html("Enriko with Kashkaval");
      $("#enriko-with-cheese").html("Enriko with Cheese");
      $("#enriko-with-garlic").html("Enrico With Garlic");

      $("#shopska").html("Shopska");
      $("#greek-salad").html("Greek Salad");
      $("#macedonian-salad").html("Macedonian Salad");
      $("#mixed-salad").html("Mixed Salad");
      $("#tartar").html("Tartar");
      $("#tuna-salad").html("Tuna Salad");
      $("#ovchar-salad").html("Ovchar Salad");
      $("#caesar-salad").html("Caesar Salad");

      $("#margherita").html("Margherita");
      $("#olive").html("Olive Pizza");
      $("#neapolitan").html("Neapolitan");
      $("#quattro-formaggi").html("Quattro Formaggi");
      $("#capricciosa").html("Capricciosa");
      $("#pepperoni").html("Pepperoni");
      $("#macedonian").html("Macedonian");
      $("#gurman").html("Gurman");
      $("#vegetarian").html("Vegetarian");
      $("#tuna-pizza").html("Tuna Pizaa");
      $("#prosciutto-pizza").html("Prosciutto Pizza");

      $(".pelati").html("pelati");
      $(".kashkaval").html("kashkaval");
      $(".oregano").html("oregano");
      $(".olives").html("olives");
      $(".gauda").html("gauda");
      $(".mushrooms").html("mushrooms");
      $(".mozzarella").html("mozzarella");
      $(".cheddar").html("cheddar");
      $(".parmesan").html("parmesan");
      $(".ham").html("ham");
      $(".cullen").html("cullen");
      $(".pepper").html("pepper");
      $(".cheese").html("cheese");
      $(".pork-neck").html("pork-neck");
      $(".golden-mix").html("golden-mix");
      $(".tomato").html("tomato");
      $(".tuna").html("tuna");
      $(".corn").html("corn");
      $(".prosciutto").html("prosciutto");
      $(".sour-cream").html("sour-cream");

      $("#bolognese").html("Bolognese");
      $("#carbonara").html("Carbonara");
      $("#pasta-and-cheese").html("Pasta & Cheese");
      $("#pesto").html("Pesto");
      $("#chicken-alfredo").html("Chicken Alfredo");
      $("#fungi").html("Fungi");

      $(".minced-meat").html("minced meat");
      $(".bacon").html("bacon");
      $(".white-soucе").html("white souce");
      $(".cheddar-kashkaval").html("cheddar kashkaval");
      $(".pesto-souce").html("pesto souce");
      $(".chicken-meat").html("chicken meat");

      $("#kebab").html("Kebab");
      $("#sausage").html("Sausage");
      $("#thin-sausage").html("Thin Sausage");
      $("#rolled-chicken").html("Rolled Chicken");
      $("#hish-kebab").html("Shish Kebab");
      $("#filled-steak").html("Filled Chicken Breast");
      $("#pork-leg-fillet").html("Pork Leg Fillet");
      $("#rib").html("Pork Rib");
      $("#chicken-breast").html("Chicken Breast");
      $("#minced-meat").html("Minced Meat");
      $("#minced-meat-sharska").html("Minced Meat Sharska");
      $("#uvijac").html("Uvijac");

      $("#with-vegetables").html("With Vegetables");
      $("#with-steak").html("With Chicken Breast");
      $("#with-chicken").html("With Chicken");
      $("#with-white-sauce").html("With White Sauce");
      $("#with-curry-sauce").html("With Curry Sauce");

      $("#pork").html("Pork Pastramajka");
      $("#smoked-pork").html("Smoked Pork Pastramajka");
      $("#double").html("Double size Pastramajka");

      $("#warm-small-apetizers").html("Small Apeizer Board");
      $("#warm-big-apetizers").html("Big Apetizer Board");
      $("#combination").html("Combination Apetizer Board");
      $(".chicken-fingers").html("chicken fingers");
      $(".zucchini").html("zucchini");
      $(".deep-fried-cheese").html("deep fried cheese");
      $(".deep-fried-kashkaval").html("deep fried kashkaval");
      $(".zdenka").html("zdenka");
      $(".medallion").html("medallion");

      $("#burger").html("Burger");
      $("#friends-burger").html("Friends Burger");
      $("#bbq-burger").html("BBQ Burger");
      $("#small-beef-burger").html("Small Beef Burger");
      $("#big-beef-burger").html("Big Beef Burger");
      $("#bacon-burger").html("Burger with Bacon");
      $("#big-mac-burger").html("Big Mac");
      $("#chicken-burger").html("Chicken Burger");
      $("#crispy-chicken-burger").html("Crispy Chicken");

      $(".minced-meat").html("minced meat");
      $(".burger-sauce").html("burger sauce");
      $(".lettuce").html("lettuce");
      $(".onion").html("onion");
      $(".pickle").html("pickle");
      $(".bbq-sauce").html("BBQ sauce");
      $(".100-beef").html("100% beef");
      $(".argula").html("arugla");
      $(".egg").html("egg");
      $(".chicken-breast-ingr").html("chicken breast");
      $(".curry-sauce").html("curry sauce");
      $(".deep-fried-chicken-breast").html("deep fried chicken breast");
      $(".baked-potatoes").html('"chef\'s potatoes"');

      $("#chicken-mozzarella-sauce").html("Chicken in Mozarella Sauce");
      $("#chicken-white-sauce").html("Chicken in White Sauce");
      $("#chicken-curry-sauce").html("Chicken in Curry Sauce");
      $("#chicken-monako-sauce").html("Chicken in Monaco Sauce");
      $("#chicken-zhulien-sauce").html("Chicken in Zhulien Sauce");
      $("#pork-sauce").html("Pork Sauce");
      $("#fine-chopped-meat").html("Fine chopped Meat");
      $("#trout").html("Trout");
      

      $(".mozzarella-sauce").html("mozarella sauce");
      $(".fries-ingr").html("fries");
      $(".white-sauce-with-mushrooms").html("white sauce with mushrooms");
      $(".curry-sauce-with-mushrooms").html("curry sauce with mushrooms");
      $(".nuts").html("nuts");
      $(".honey").html("honey");
      $(".pork-leg-fillet-ingr").html("pork leg fillet ingr");
      $(".sauce").html("sauce");
      $(".trout-ingr").html("trout");
      $(".kashkaval-ingr").html("kashkaval");
      $(".svinsko-pilesko").html("pork/chicken");
      $(".shampinjoni").html("shampinjoni");

      $("#waffle").html("Waffle");
      $("#oreo-waffle").html("Oreo Waffle");
      $("#kinder-waffle").html("Kinder Waffle");
      $("#ice-cream-waffle").html("Ice Cream Waffle");
      $("#snickers-waffle").html("Snickers Waffle");
      $("#strawberry-waffle").html("Strawberry Waffle");
      $("#milka-waffle").html("Milka Waffle");
      $("#cream-banana-waffle").html("Cream Banana Waffle");
      $("#snikers-pancakes").html("Snickers Pancakes");
      $("#honey-nut-pancake").html("Honey Nut Pancake");
      $("#strawberry-pancake").html("Strawberry Pancake");
      $("#milka-strawberry-pancake").html("Milka Strawberry Pancake");
      $("#american-pancake").html("American Pancake");
      $("#lava-cake").html("Lava Cake");
      $("#tiramisu").html("Tiramisu");
      $("#cheesecake").html("CheeseCake");

      $("#so-slanina").html("With Bacon");
      $("#chicken-burrito").html("Chicken Burrito");
      $("#ceaser-burrito").html("Caeser Burrito");
      $("#vege-burrito").html("Vege Burrito");
      $("#beef-burrito").html("Beef Burrito");
      $("#chili-burrito").html("Chili Burrito");

      $(".chili-sauce").html("chilli sauce");
      $(".ceaser-sauce").html("ceaser sauce");
      $(".tortilla").html("tortilla");

      $(".gram").html("gr");
      $(".mkd").html("mkd");
      $(".num").html("num");
      $(".den").html("den");
      $(".kg").html("kg");

      flag++;

    }
  });
});
