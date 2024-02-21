export interface Product {
  id: number;
  name: string;
  image: string,
  images:string[],
  price: number;
  description: string;
  rating: number,
  link: string
}

export const products = [
  {
    id: 1, 
    name: 'Apple AirPods 3', 
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/ha0/46719094226974/apple-airpods-3-belyj-102667744-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/h00/46719106744350/apple-airpods-3-belyj-102667744-4.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/hca/46719107104798/apple-airpods-3-belyj-102667744-6.jpg'],
    price: 84074, 
    description: 'Color: White, Type: Headset, Type: Intra-channel,Connection: Wireless,Type of acoustic design: open,Mounting type: Without mounting, Active noise reduction system: No, Microphone: Yes', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  },
  { 
    id: 2, 
    name: 'Apple MacBook Air 13 MGN93', 
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/h58/33271773593630/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/hf2/49803337465886/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-2-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/h44/49803337695262/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-3-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h27/49803337924638/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-4-Container.jpg'],
    price: 417550, 
    description: 'Screen diagonal: 13.3 inch, processor: Apple M1, Graphics card: Apple M1, RAM size: 8 GB, Hard disk type: SSD, total storage capacity: 256 GB', 
    rating:5, 
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }, 
  { 
    id: 3, 
    name: 'Apple iPad 2021 10.2 64Gb Wi-Fi', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/hb6/48110926626846/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h12/48110926856222/apple-ipad-2021-wi-fi-64gb-seryj-102301598-2-Container.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd5/50600403566622/apple-ipad-2021-10-2-64gb-wi-fi-seryj-102301598-5.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h0b/50600403107870/apple-ipad-2021-10-2-64gb-wi-fi-seryj-102301598-4.jpg'],
    price: 154464, 
    description: 'diagonal: 10.2 inch, screen resolution: 2160x1620, Screen manufacturing technology: TFT IPS, RAM size: 3 GB, Internal memory size: 64 GB, Battery capacity: 8686 match, Color: grey', 
    rating:5, 
    link:'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }, 
  { 
    id: 4, 
    name: 'Simple Shop Laptop TableT 8', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hc9/46524335816734/simpleshop-laptop-table-42h26h45-102568472-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/hd0/50605473890334/simpleshop-laptop-table-t8-cernyj-102568472-2.jpg',
    'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/ha6/50605474119710/simpleshop-laptop-table-t8-cernyj-102568472-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/hbf/50605474578462/simpleshop-laptop-table-t8-cernyj-102568472-5.jpg'],
    price: 7578, 
    description: 'Type: active cooling, laptop diagonal: 15.6, number of fans: 2, backlight: No', 
    rating: 4.5, 
    link:'https://kaspi.kz/shop/p/simpleshop-laptop-table-t8-102568472/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  },
  { 
    id: 5, 
    name: 'Mainali 2026 Backpack black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/h6c/51603434438686/rukzak-meinaili-2026-cernyj-105337240-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h71/hd9/51603442139166/rukzak-meinaili-2026-cernyj-105337240-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h85/hbe/51603442368542/rukzak-meinaili-2026-cernyj-105337240-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/ha5/51603442597918/rukzak-meinaili-2026-cernyj-105337240-4.jpg'],
    price: 8249, 
    description: 'Type: backpack, maximum screen size: 17 inch, material:polyester', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/rjukzak-meinaili-2026-chernyi-105337240/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }, 
  { 
    id: 6, 
    name: 'Charger Quezqa X12 Black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h18/65347311763486/quezqa-x12-chernyi-101567940-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/h87/49027641311262/quezqa-x12-chernyi-101567940-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/h9f/49027641540638/quezqa-x12-chernyi-101567940-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/had/49027641737246/quezqa-x12-chernyi-101567940-4.jpg'],
    price: 19900, 
    description: 'Type: Wireless Charging Station, Number of connected devices: 3, Fast Charging: Yes, Connection Connector: USB Type-C, Fast Charging, Standard: Quick Charge 3.0', 
    rating: 4.5, 
    link:'https://kaspi.kz/shop/p/quezqa-x12-chernyi-101567940/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }, 
  { 
    id: 7, 
    name: 'Vacuum cleaner Derma DX700 white',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h5d/48076323520542/deerma-dx700-belyj-3701383-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/hb0/48076323749918/deerma-dx700-belyj-3701383-2-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h71/h6e/48076323946526/deerma-dx700-belyj-3701383-3-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h45/48076324339742/deerma-dx700-belyj-3701383-5-Container.jpg'],
    price: 18779, 
    description: 'Type: vertical, Cleaning: dry, Dust collector type: cyclone filter, Power consumption: 600 W, Power source: mains, Color: white', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }, 
  { 
    id: 8, 
    name: 'ROOMY EVE Plus Robot Vacuum Cleaner white', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h01/33199727411230/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-1-Container.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/hbc/33199730196510/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-2-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb4/h4a/50297461637150/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-3-Container.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/hab/62298070155294/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-5.jpg'],
    price: 194409, 
    description: 'cleaning type: dry and wet, dust collector capacity: 550 ml, water tank capacity: 250 ml, fine filter: Yes, Display availability: No, side brushes availability: Yes, Battery capacity: 5200 mAh, Color: White', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/roidmi-eve-plus-robot-vacuum-belyi-101000358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }, 
  { 
    id: 9, 
    name: 'iQibla M0220GE Smart Ring Black', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/he1/63084235325470/smart-kolco-iqibla-m0220ge-cernyj-106790584-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h27/63084235358238/smart-kolco-iqibla-m0220ge-cernyj-106790584-1.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h27/63084235358238/smart-kolco-iqibla-m0220ge-cernyj-106790584-1.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h27/63084235358238/smart-kolco-iqibla-m0220ge-cernyj-106790584-1.jpg'],
    price: 13979, 
    description: 'Compatibility: Android, Ring size: 20mm, Wireless interfaces: Bluetooth, Color: Black, Model: M0220GE', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/smart-kol-tso-iqibla-m0220ge-chernyi-106790584/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }, 
  { 
    id: 10, 
    name: 'Chest of drawers BRW Brest Besix 00032360', 
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h3b/66848957169694/besiks-komod-kom3s-chernyi-brv-brest-108022969-1.jpg', 
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/hdc/66848957693982/besiks-komod-kom3s-chernyi-brv-brest-108022969-2.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h8d/66848958218270/besiks-komod-kom3s-chernyi-brv-brest-108022969-3.jpg','https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h14/66848958742558/besiks-komod-kom3s-chernyi-brv-brest-108022969-4.jpg'],
    price: 38999, 
    description: 'type: outdoor, number of drawers: 3, material: Chipboard, width, cm: 78, height, cm: 80, color: black, country: Belarus', 
    rating: 5, 
    link:'https://kaspi.kz/shop/p/brw-brest-besiks-00032360-78x40x80-sm-chernyi-108022969/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=EAIaIQobChMItJ_mst-k_QIVGXAYCh1QTwKkEAAYASAAEgK0hvD_BwE#!/item' 
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/