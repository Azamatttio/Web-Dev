export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating:number;
  category_id: number;
  likes : number;
}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium"],
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 297488,
    description: 'nFC technology: Yes\n' +
        'color: черный\n' +
        'screen type: OLED, Gorilla Glass Victus\n' +
        'diagonal: 6.1 inch\n' +
        'rAM size: 4 GB\n' +
        'processor: 6-nuclear Apple A15 Bionic\n' +
        'built-in memory: 128.0 GB\n' +
        'battery capacity: 3095.0 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    rating: 5,
    category_id : 1,
    likes : 0,

  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium"],
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 70717,
    description: 'nFC technology: Yes\n' +
        'black color\n' +
        'screen type: OLED, touch\n' +
        'diagonal: 6.5 inch\n' +
        'rAM size: 6 GB\n' +
        'processor: 8-nuclear MediaTek Helio G99\n' +
        'built-in memory: 128.0 ГБ\n' +
        'battery capacity: 5000.0 мАч',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
    rating: 5,
    category_id : 1,
    likes : 0,

  },
  {
    id: 3,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium"],
    name: 'Ноутбук Apple MacBook Air 13 MGN63RU/A серый',
    price: 458000,
    description: 'screen diagonal: 13.3 дюйм\n' +
        'processor: Apple M1\n' +
        'video card:Apple M1\n' +
        'rAM size: 8.0 Гб\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 256.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63ru-a-seryi-101182724/?c=750000000',
    rating: 5,
    category_id: 2,
    likes : 0,

  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium"],
    name: 'Ноутбук Apple MacBook Pro 14 MRX33 черный',
    price: 1020192,
    description: 'screen diagonal: 14.2 дюйм\n' +
        'processor: Apple M3 Pro\n' +
        'video card:Apple M3 Pro 14-Core\n' +
        'rAM size: 18.0 Гб\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 512.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000',
    rating: 5,
    category_id : 2,
    likes : 0, 

  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h10/hf6/84798670831646.jpg?format=gallery-medium"],
    name: 'LEGO Fast and Furious 2 Nissan Skyle 76917, parts 319 pcs.',
    price: 14189,
    description: 'type: block\n' +
        'number of parts: 319\n' +
        'lEGO Series: Speed ​​Champions\n' +
        'child gender: boy\n' +
        'color: multicolor\n' +
        'main material: plastic',
    link: 'https://kaspi.kz/shop/p/lego-forsazh-2-nissan-skail-76917-detalei-319-sht-108313086/?c=750000000',
    rating: 0,
    category_id : 3,
    likes : 0,

  },{
    id:6,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h62/he1/64958397448222.jpg?format=gallery-medium"],
    name:"LEGO Imperial Star Wars Starfighter 75252, 4784 pieces",
    price:885000,
    description:'type: block\n' +
        'number of parts: 4784\n' +
        'lEGO Series: Star Wars\n' +
        'child gender: boy\n' +
        'color: gray\n' +
        'main material: plastic',
    link:"https://kaspi.kz/shop/p/lego-imperskii-zvjozdnyi-istrebitel-star-wars-75252-detalei-4784-sht-106460258/?c=750000000",
    rating: 5,
    category_id : 3,
    likes : 0,

  },{
    id:7,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h22/he2/84253327917086.jpg?format=gallery-medium"],
    name:"LEGO Queen Anne's Revenge 4195, 1097 pieces",
    price:748000,
    description:'type: block\n' +
        'number of parts: 1097\n' +
        'lEGO Series: Queen Anna\n' +
        'child gender: universal\n' +
        'color: multicolor\n' +
        'main material: plastic',
    link:"https://kaspi.kz/shop/p/lego-mest-korolevy-anny-4195-detalei-1097-sht-113980504/?c=750000000",
    rating: 4.5,
    category_id : 3,
    likes : 0,

  }
  ,{
    id:8,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h23/hb7/84798667882526.jpg?format=gallery-medium"],
    name:"LEGO Bugatti Bolide 42151, parts 905 pcs",
    price:29689,
    description:'type: block\n' +
        'number of parts: 905\n' +
        'lEGO Series: Technic\n' +
        'child gender: boy\n' +
        'color: multicolor\n' +
        'main material: plastic',
    link:"https://kaspi.kz/shop/p/lego-bugatti-bolid-42151-detalei-905-sht-108312877/?c=750000000",
    rating: 4.5,
    category_id : 3,
    likes : 0,


  },{
    id:9,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h2f/h5e/64392799059998.jpg?format=gallery-medium"],
    name:"Smartphone Google Pixel 6a 6 GB/128 GB white",
    price:174998,
    description:"nFC technology: Yes\n" +
        "white color\n" +
        "screen type: Super AMOLED, capacitive, multi-touch\n" +
        "diagonal: 6.2 inch\n" +
        "rAM size: 6 GB\n" +
        "processor: 8 cores (2x2.80 GHz Cortex-X1 and 2x2.25 GHz Cortex-A76 and 4x1.80 GHz Cortex-A55)\n" +
        "built-in memory: 128.0 GB\n" +
        "battery capacity: 4800.0 mAh",
    link:"https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-belyi-106250314/?c=750000000",
    rating: 5,
    category_id : 1,
    likes : 0,

  },{
    id:10,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h3e/ha3/84757659811870.jpg?format=gallery-medium"],
    name:"LEGO Dom Dodge Charger 42111, parts 1077 pcs",
    price:66388,
    description:'type: block\n' +
        'number of parts: 1077\n' +
        'lEGO Series: Technic\n' +
        'child gender: boy\n' +
        'color: multicolor\n' +
        'main material: plastic',
    link:"https://kaspi.kz/shop/p/lego-bugatti-bolid-42151-detalei-905-sht-108312877/?c=750000000",
    rating: 4.5,
    category_id : 3,
    likes : 0,

  },{
    id: 11,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium"],
    name: 'Apple iPhone 15 Pro Max 256Gb Smartphone Grey',
    price: 631544,
    description: 'nFC technology: Yes\n' +
        'color: gray\n' +
        'screen type: OLED, Gorilla Glass Victus\n' +
        'diagonal: 6.7 inch\n' +
        'rAM size: 8 GB\n' +
        'processor: 6-nuclear Apple A17 Pro\n' +
        'built-in memory: 256.0 GB\n' +
        'battery capacity: 4422.0 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating: 5,
    category_id : 1,
    likes : 0,
  },{
    id: 12,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium"],
    name: 'Apple iPhone 13 128Gb Green Smartphone',
    price: 298849,
    description: 'nFC technology: Yes\n' +
        'color: green\n' +
        'screen type:OLED, Super Retina XDR display\n' +
        'diagonal: 6.1 inch\n' +
        'rAM size: 4 GB\n' +
        'processor: 6-nuclear Apple A15 Bionic\n' +
        'built-in memory: 128.0 GB\n' +
        'battery capacity: 3095.0 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000',
    rating: 5,
    category_id : 1,
    likes : 0,
  },
  {
    id: 13,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h85/h78/82827636506654.jpg?format=gallery-medium"],
    name: 'HP Pavilion Gaming Laptop 17-cd2059ur 4E1M7EA Black',
    price: 398990,
    description: 'screen diagonal: 17.3 inches\n' +
        'processor: Intel Core i5-11300H\n' +
        'video card: NVIDIA GeForce RTX 3050\n' +
        'rAM size: 8.0 Гб\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 512.0 Гб',
    link: 'https://kaspi.kz/shop/p/hp-pavilion-gaming-17-cd2059ur-4e1m7ea-chernyi-112551367/?c=750000000',
    rating: 5,
    category_id: 2,
    likes : 0,
  },
  {
    id: 14,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/ha3/h9b/64200744763422.jpg?format=gallery-medium"],
    name: 'Apple MacBook Pro 14 MKGP3 Laptop Grey',
    price: 955615,
    description: 'screen diagonal: 14.2 inches\n' +
        'processor: Apple M1 Pro\n' +
        'video card: Apple M1 Pro 14-Core\n' +
        'rAM size: 16.0 Гб\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 512.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63ru-a-seryi-101182724/?c=750000000',
    rating: 5,
    category_id: 2,
    likes : 0,
  },
  {
    id: 15,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h7a/hda/64059233173534.jpg?format=gallery-medium"],
    name: 'ASUS ROG Strix G15 G513IH 90NR07P2-M00160 Laptop Grey',
    price: 955615,
    description: 'screen diagonal: 15.6 inches\n' +
        'processor: AMD Ryzen 7 4800H\n' +
        'video card:  NVIDIA GeForce GTX 1650\n' +
        'rAM size: 8.0 Гб\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 512.0 Гб',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryi-101686597/?c=750000000',
    rating: 5,
    category_id: 2,
    likes : 0,
  },
  {
    id: 16,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h47/h54/63781707513886.jpg?format=gallery-medium"],
    name: 'Geneticlab Nutrition Creatine Powder 300 g',
    price: 8000,
    description: 'type: Creatine\n'+
    'product form: powder\n'+
    'packaging: jar\n',
    link: 'https://kaspi.kz/shop/p/geneticlab-nutrition-creatine-powder-300-g-29501016/?c=750000000',
    rating: 5,
    category_id: 4,
    likes : 0,
  },
  {
    id: 17,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h81/hee/63686421184542.jpg?format=gallery-medium"],
    name: 'Optimum Nutrition Protein 100% Whey Gold Standard 2 pounds of bivalent milk 909 g',
    price: 21950,
    description:'type: insulator\n'+
    'product form: powder\n'+
     'weight: 909.0g\n'+
    'main flavors: double chocolate\n',
    link: 'https://kaspi.kz/shop/p/optimum-nutrition-100-whey-gold-standard-2-lbs-dvoinoi-shokolad-909-g-29502269/?c=750000000',
    rating: 5,
    category_id: 4,
    likes : 0,
  },
  {
    id: 18,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hc4/hf0/84943116566558.jpg?format=gallery-medium"],
    name: 'BCAA Optimum Nutrition BCAA 1000 60 capsules',
    price: 6000,
    description:'type: BCAA\n'+
    'product form:  capsules/tablets\n'+
    'packaging: jar\n',
    link: 'https://kaspi.kz/shop/p/optimum-nutrition-bcaa-1000-60-kapsul-29501137/?c=750000000',
    rating: 5,
    category_id: 4,
    likes : 0,
  },
  {
    id: 19,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h0c/h81/63838077321246.jpg?format=gallery-medium"],
    name: 'Protein Geneticlab Nutrition Whey Pro Chocolate 2100 g',
    price: 23300,
    description:'type: whey protein\n'+
    'product form: powder\n'+
     'weight: 2100.0g\n'+
    'main flavors: chocolate\n',
    link: 'https://kaspi.kz/shop/p/optimum-nutrition-100-whey-gold-standard-2-lbs-dvoinoi-shokolad-909-g-29502269/?c=750000000',
    rating: 5,
    category_id: 4,
    likes : 0,
  },
  {
    id: 20,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/he2/h5b/64367335473182.jpg?format=gallery-medium"],
    name: 'Protein Myprotein Impact Whey Protein Vanilla 5000 g',
    price: 139000,
    description:'type: whey protein\n'+
    'product form: powder\n'+
     'weight: 5000.0g\n'+
    'main flavors: vanilla\n',
    link: 'https://kaspi.kz/shop/p/myprotein-impact-whey-protein-vanil-5000-g-104478165/?c=750000000',
    rating: 5,
    category_id: 4,
    likes : 0,
  },
];

