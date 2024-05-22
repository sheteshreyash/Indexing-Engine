const fs = require('fs');

// Sample data
const data = [
    {
        "id": "eccomerce-data",
        "title":"Garlic Oil - Vegetarian Capsule 500 mg",
        "description": "Product contains Garlic Oil known help proper digestion , maintain proper cholesterol levels , support cardiovascular build immunity .   Beauty tips , tricks & visit https://bigbasket.blog/",
        "category": "[Beauty & Hygiene]",
        "rating": 4.1 ,
        "sale_price": 220,
        "market_price": 220,
        "type": "Hair Oil & Serum",
        "brand": "Sri Sri Ayurveda ",
        "sub_category": "Hair Care"
},
{
    "id": "eccomerce-data-1",
    "title":"Water Bottle - Orange",
    "description": "product microwave safe ( lid ) , refrigerator safe , dishwasher safe - heating food cooking . containers come airtight lids wide variety attractive colours . Stack stylish colourful containers kitchen ease look - good factor .",
    "category": "[Kitchen, Garden & Pets]",
    "rating": 2.3,
    "sale_price": 180,
    "market_price": 180,
    "type": "Water & Fridge Bottles",
    "brand": "Mastercook    ",
    "sub_category": "Storage & Accessories "
},
{
    "id": "eccomerce-data-2",
    "title":"Brass Angle Deep - Plain, No.2",
    "description": "perfect gift occasions , mother , sister , - laws , boss friends , beautiful designer piece placed , sure beautify surroundings Traditional design type diya Diwali Festivals centuries . Sturdy easy carry feet balanced ensure safety . Wonderful Oil Lamp Brass called Jyoti . handcrafted piece Indian brass Deepak .",
    "category": "[Cleaning & Household]",
    "rating": 3.4,
    "sale_price": 119,
    "market_price": 250,
    "type": "Lamp & Lamp Oil",
    "brand": "Trm ",
    "sub_category": "Pooja Needs"
},
{
    "id": "eccomerce-data-3",
    "title":"Cereal Flip Lid Container/Storage Jar - Assorted Colour",
    "description": "perfect gift occasions , mother , sister , - laws , boss friends , beautiful designer piece placed , sure beautify surroundings Traditional design type diya Diwali Festivals centuries . Sturdy easy carry feet balanced ensure safety . Wonderful Oil Lamp Brass called Jyoti . handcrafted piece Indian brass Deepak .",
    "category": "[Cleaning & Household]",
    "rating": 3.7,
    "sale_price": 149,
    "market_price": 1760,
    "type": "Laundry, Storage Baskets",
    "brand": "Nakoda",
    "sub_category": "Bins & Bathroom Ware"
},
{
    "id": "eccomerce-data-4",
    "title":"Creme Soft Soap - For Hands & Body",
    "description":"Nivea Creme Soft Soap gives skin best care . soft bar consists Vitamins F Almonds skin gracious help great skin . provides skin moisture leaves flawless smooth skin . makes sure body totally free germs & dirt time nourished . Beauty tips , tricks & visit https://bigbasket.blog/    ",
    "category": "[Beauty & Hygiene]",
    "rating": 4.4,
    "sale_price": 162,
    "market_price": 162,
    "type": "Laundry, Storage Baskets",
    "brand": "Nivea",
    "sub_category": "Bath & Hand wash "
},
{
    "id": "eccomerce-data-5",
    "title":"Multani Mati",
    "description": "Satinance multani matti excellent skin toner astringent . reduces oiliness nourishing skin , keeps soft grime . improves complexion facilitating better blood circulation .   Beauty tips , tricks & visit https://bigbasket.blog/    ",
    "category": "[Beauty & Hygiene]",
    "rating": 3.6,
    "sale_price": 58,
    "market_price": 58,
    "type": "Face care",
    "brand": "Nature Protect    ",
    "sub_category": "Skin Care"
},
{
    "id": "eccomerce-data-6",
    "title":"Veggie Cutter",
   "description": "Food Grade High Quality Plastic , store knife away reach children . Multi use 2 - in-1 Veg Cutter Round Sharp steel blade slicer , Specially designed cutting vegetables fruits locking system . Easy use wash ",
    "category": "[Kitchen, Garden & Pets]",
    "rating": 5,
    "sale_price": 195,
    "market_price": 195,
    "type": "Choppers & Graters",
    "brand": " IRICH ",
    "sub_category": "Kitchen Accessories"
},
{
    "id": "eccomerce-data-7",
    "title":"Chia Seeds",
    "description":"Raw Chia seeds , naturally gluten free , lyva raw chia seeds , vegetarian food , naturally rich omega-3 omega-6 essential fatty acids , dietary fiber , protein essential minerals . spoonful lyva raw chia seeds day easy delicious way support digestive health satiate appetite homemade buffalo manure compost cultivation seeds . pesticides insecticides making near organic suggested uses - 1 tbsp . Daily mixes easily water juice . excellent topping yogurt , salad , breakfast cereals , blended smoothie beverages fresh coconut water ingredients - organically grown 100 % chia seed ( salvia hispanica ) 15 g chia seeds provide - daily requirement omega-3 omega 6 - boosts fiber , antioxidants protein diet .   Click unique delicious recipes - https://www.bigbasket.com/flavors/collections/231/dry-fruits-berries-nuts/" ,
    "category": "[Foodgrains, Oil & Masala]",
    "rating": 3.9,
    "sale_price": 120,
    "market_price": 120,
    "type": "Other Dry Fruits",
    "brand": "NaturoBell",
    "sub_category": "Dry Fruits"
},
{
    "id": "eccomerce-data",
    "title":"Flaxseed - Pesticide Free",
    "description":"Super - nutritious good heart , flaxseed rich source fibre Omega-3 fatty acids . procure flax seeds Gond tribes eastern Madhya Pradesh traditionally practitioners sustainable farming generations . Sprinkle morning breakfast cereal porridge blitz chillies , ginger , coconut lemon juice interesting nutritious twist idli chutney breakfast .   Safe Harvest products cultivated completely devoid synthetic chemical pesticides .",
    "category": "[Foodgrains, Oil & Masala]",
    "rating": 4,
    "sale_price": 53.9,
    "market_price": 55,
    "type": "Other Dry Fruits",
    "brand": "Safe Harvest",
    "sub_category": "Dry Fruits"
},
{
    "id": "eccomerce-data",
    "title":"Lip Butter - Rose",
    "description": "Reload dry chapped lips Organic Lip Butter Rose . ideal mixture organic butter waxes instantly brightens lips red colour . apply colour adds charm rich creamy texture .",
    "category": "[Beauty & Hygiene]",
    "rating": 1.5 ,
    "sale_price": 169.15,
    "market_price": 199,
    "type": "Lip Care",
    "brand": "Organic Harvest",
    "sub_category": "Skin Care"
},
{
    "id": "eccomerce-data",
    "title":"Amber - Deodorant Body Spray",
    "description": "Smellcome Magic Old Spice New Launch Deodorant range . 0 % Gas long - lasting 24 - hour freshness . fruity fragrance notes blackberry , black raspberry , plum , rounded sweet vanilla amber notes base . Armed Amber , flanked Old Spice eagles , beacon freely spread joy smellectorate . ",
    "category": "[Beauty & Hygiene]",
    "rating": 3.4 ,
    "sale_price": 211.65,
    "market_price": 249,
    "type": "Men's Deodorants",
    "brand": "Old Spice",
    "sub_category": "Fragrances & Deos"
},
{
    "id": "eccomerce-data",
    "title":"Bodylicious Deodorant Spray - Mate (For Men)",
    "description": "Engage Man Mate Deo Spray   Beauty tips , tricks & visit https://bigbasket.blog/",
    "category": "[Beauty & Hygiene]",
    "rating": 4.1 ,
    "sale_price": 136.5,
    "market_price": 195,
    "type": "Men's Deodorants",
    "brand": "Engage",
    "sub_category": "Fragrances & Deos"
},
{
    "id": "eccomerce-data",
    "title":"BBody Wash",
    "description": "Pamper skin exclusive glow exquisite fragrance .   Beauty tips , tricks & visit https://bigbasket.blog/",
    "category": "[Beauty & Hygiene]",
    "rating": 4.5 ,
    "sale_price": 175,
    "market_price": 175,
    "type": "Shower Gel & Body Wash",
    "brand": "Mysore Sandal",
    "sub_category": "Bath & Hand Wash"
},
{
    "id": "eccomerce-data",
    "title":"Rasanadi Vati - 500 mg",
    "description": "Rasnadivati primarily pain killer anti - inflammatory muscle relaxant . main constituent Rasna particularly effective relieving types joint pains . formula helps conditions excess vata . reduces heat discomfort caused excessive vata lead conditions Ayurveda . helps relieve joint associated discomfort arthritis.it relieves types joint pains acts analgesic anti - inflammatory . relaxes stiff muscles , helping treating condition excess vata . Reduces heat discomfort caused excessive vata . Treats arthritis provides relief sciatica pain .",
    "category": "[Beauty & Hygiene]",
    "rating": 5 ,
    "sale_price": 60,
    "market_price": 60,
    "type": "Ayurveda",
    "brand": "Sri Sri Tattva",
    "sub_category": "Health & Medicine"
},
{
    "id": "eccomerce-data",
    "title":"Vanilla Cake Mix",
    "description": "Confused choosing flavour cake- bake classic vanilla cake . American Pancake company presents Vanilla Cake Mix helps pillowy soft crumb ambrosial flavour kitchen . ideal unassuming tea time cake fancy tiered birthday wedding cake . Eat slice frosted buttercream icing , sprinkles , fresh berries - blissful decadence ! American Pancake company ensures meal dessert delicious flavor quality come !",
    "category": "[Gourmet & World Food]",
    "rating": 3.2 ,
    "sale_price": 261,
    "market_price": 290,
    "type": "Flours & Pre-Mixes",
    "brand": "American Pancake Co.",
    "sub_category": "Cooking & Baking Needs"
},
{
    "id": "eccomerce-data",
    "title":"Quattro Seed Mix - Turmeric Coated",
    "description": "Loaded with high nutrients, flax seeds are in Omega 3 Fats and dietary fibre. It lowers cholesterol & brings blood pressure under control",
    "category": "[Gourmet & World Food]",
    "rating": 2.5 ,
    "sale_price": 199,
    "market_price": 199,
    "type": "Roasted Seeds & Nuts",
    "brand": "SnackAmor",
    "sub_category": "Snacks, Dry Fruits, Nuts"
},
{
    "id": "eccomerce-data",
    "title": "Sweet Chilli Sauce",
    "description":"Real Thai sauces blend - selected ingredients Thai herbs , basic ingredient , seasoning , semi - cooking . Real Thai Sweet chilli sauce great combination red chillies garlic delivering unique taste dish . Benefits 1 . - natural ingredients free added flavouring . 2 . contains healthy ingredients great accompaniment appetizers works stir - fries .",
    "category": "[Gourmet & World Food]",
    "rating": 4.8,
    "sale_price": 199,
    "market_price":199,
    "type": "Thai & Asian Sauces",
    "brand": "Real Thai",
    "sub_category": "Sauces, Spreads & Dips"

},
{
    "id": "eccomerce-data",
    "title":"Tamarind Sauce",
    "description":"Homegrown Pune , Bengamese curated vision diverse pocket - friendly , multi - cultural cuisine accessible foodies home India Globe .guarantee lip - smacking pickles , sauces ready cook marinades , secret following centuries - old recipes passed generations sourcing locally farm - fresh produce .",
    "category": "[Gourmet & World Food]",
    "rating": 5,
    "sale_price":190,
    "market_price":190,
    "type":"Curry Paste, Coconut Milk",
    "brand":"BENGAMESE",
    "sub_category": "Cooking & Baking Needs"
    
},
{
    "id":"eccomerce-data",
    "title": "Go Mixed Fruit Mania - Active Hydration Drink With Zero Sugar & No Preservatives",
    "description": "Ride hydration wave flavourful burst Shunya Mixed Fruit Mania ! delectable blend favourite - natural fruity flavours . unique sweet flavour guava complements sour sweet flavour pomegranate , tangy orange adds kick mix , rich flavour banana brings . beverages 0 calories , 0 sugar , 0 preservatives , naturally sweetened stevia . skipped nasty stuff like artificial sweeteners , colours flavours kept things good â€“ like great taste ! loaded drinks goodness 4 super herbs â€“ Ashwagandha - boost energy keeps stress - free Brahmi - tonic brain Khus - help regulate body temperature Kokum - adds anti - ageing properties mix . took everyday hydration level packed vitamins ( 50 % RDA ) , electrolytes like Calcium , Magnesium Zinc ( 20 % RDA ) , Himalayan Pink Salt 84 trace minerals , immunity - boosting antioxidants . like things moving ! Guilt free , sugar - free , active hydration . running marathon jumping bed , cheering . Feeling healthy got lot easier way tastier .",
    "category": "[Beverages]",
    "rating": 3.9,
    "sale_price": 60,
    "market_price": 60,
    "type": "Juices",
    "brand": "Shunya",
    "sub_category": "Fruit Juices & Drinks"
},
{
    "id":"eccomerce-data",
    "title": "Green Tea - Tulsi Loose Leaf",
    "description": "Octavius Tulsi Green Tea , unique combination herbs help refreshing energizing body mind . promotes metabolism vital weight management . Green tea Tulsi offer vast array remarkable health benefits including abundance antioxidants .",
    "category":"[Beverages]",
    "rating": 3.7,
    "sale_price":225,
    "market_price":225,
    "type": "Green Tea",
    "brand": "Octavius",
    "sub_category":"Tea"
},
{
    "id":"eccomerce-data",
    "title": "Aamras Mango Fruit Juice",
    "description": "treasure easily transforms Indian summer festivity , Aamras . honest treat honest day work . silkesque ale cascading throat - Soothing , serenading importantly , lingering . enveloped rotis , guzzled milk best way Aamras directly . way ancients intended . preservatives artificial flavour . frills hassles . Ah ! help submit tasty tyranny true king fruit realm . hail mango ! Long live king !",
    "category":"[Beverages]",
    "rating": 3,
    "sale_price": 243,
    "market_price":360,
    "type": "Juices",
    "brand": "Paper Boat",
    "sub_category": "Fruit Juices & Drinks"
},
{
    "id":"eccomerce-data",
    "title": "Spiced Tea - Blend Of 7 Refreshing Spices",
    "description": "Rejuvenate refreshing spice tea rich premium fresh leaves seven authentic Indian spices . Wagh Bakri trusted Indian household . especially famous tea lovers . Unique Blend 7 Refreshing Spices . tea flavoured clove , ginger , black pepper , cinnamon , nutmeg , lemon grass , piper longum .",
    "category": "[Beverages]",
    "rating":4.3,
    "sale_price":150,
    "market_price":150,
    "type": "Leaf & Dust Tea",
    "brand": "Wagh Bakri",
    "sub_category": "Tea"
},
{
    "id":"eccomerce-data",
    "title": "Soft Drink - Lime Flavoured",
    "description": "Sprite clear lime drink truly meant quench thirst & refresh 1999 . , confuse thirst sky ! agony aunt drink refreshes . summers winters , Sprite refreshed . true feelings thirst . Believe ! crisp lemon - lime taste makes feel like stepped cold shower . Clear Hai ? drink refreshing Sprite looking page Buy !",
    "category":"[Beverages]",
    "rating": 4.3,
    "sale_price":38,
    "market_price":40,
    "type": "Cold Drinks",
    "brand": "Sprite",
    "sub_category": "Energy & Soft Drinks"
},
{
    "id":"eccomerce-data",
    "title": "Tea - English Breakfast",
    "description": "Typhoo English Breakfast tea traditional unique blend Assam orthodox CTC teas . Created master blenders , tea famous world rich taste , bright liquor strengh & aroma match . malty , classic tea oaky undertones perfect companion breakfast refershing delight enjoy , time day .",
    "category":"[Beverages]",
    "rating": 4.5,
    "sale_price": 166,
    "market_price":195,
    "type": "Tea Bags ",
    "brand": "Typhoo",
    "sub_category":"Tea"
}

];

// Function to update the ids
data.forEach((item, index) => {
  item.id = `eccomerce-data-${index + 1}`;
});

// Convert the updated data to JSON format
const jsonData = JSON.stringify(data, null, 2);

// Write the JSON data to a file
fs.writeFile('updatedData.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('JSON file has been updated and saved as updatedData.json');
  }
});
