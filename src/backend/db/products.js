import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Pirate Hunter",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/04/onepiece_zoro_piratehuntersantoryu_listing2_hitanshi-1-scaled.jpg",
    description:
      "180 GSM, 100% Cotton, Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit,Colors may vary due to photography and your screen setting",
    price: 699,
    updatedPrice: 499,
    starRating: 3.5,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Oversize",
  }, //1
  {
    _id: uuid(),
    title: "Adventure",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/05/Adventure-one-piece-oversize-drop-shoulder-white-listing-vasu-1-scaled.jpg",
    description:
      "180 GSM, 100% Cotton, Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize drop shoulder ,Colors may vary due to photography and your screen setting",
    price: 799,
    updatedPrice: 499,
    starRating: 4.1,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Oversize",
  }, //3
  {
    _id: uuid(),
    title: "Wings Of Freedom",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/09/aot_tiedye_comicsense.jpg",
    description:
      "180 GSM, 100% Cotton Single Jersey Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit, Each piece is hand dyed making it abstract, unique, and slightly different From the Listing Image ,Colors may vary due to photography and your screen setting",
    price: 1049,
    updatedPrice: 849,
    starRating: 3.8,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Oversize",
  }, //4
  {
    _id: uuid(),
    title: "Water Pillar Bomber Jacket",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/10/giyu_bomber_jacket_comicsense.jpg",
    description:
      "260-270 GSM 100% Polyester Fleece Fabric,Sublimation Printed,Regular Fit,Colors may vary due to photography and your screen setting",
    price: 2000,
    updatedPrice: 1600,
    starRating: 3.8,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Winterwear",
  }, //5
  {
    _id: uuid(),
    title: "Black Dragon",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/05/tokyorevengers_blackdragon_fullsleevetee_listing1_hitanshi-scaled.jpg",
    description:
      "180 GSM, 100% Cotton, Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit,Colors may vary due to photography and your screen setting",
    price: 799,
    updatedPrice: 499,
    starRating: 4.1,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Oversize",
  }, //6
  {
    _id: uuid(),
    title: "Hunter Hoodie",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/akatsuki_hoodie_back_comicsense.jpg",
    description:
      "280-300 GSM, Polyester-Cotton Blend, Bio-Washed Fabric, Screen Printed,Regular Fit,Colors may vary due to photography and your screen setting",
    price: 1999,
    updatedPrice: 1499,
    size: "Regular",
    starRating: 3,
    inStock: true,
    fastDelivery: true,
    category: "Winterwear",
  }, //7
  {
    _id: uuid(),
    title: "Headmaster Hoodie",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/11/1_comicsense.jpg",
    description:
      "280-300 GSM, Polyester-Cotton Blend, Bio-Washed Fabric, Screen Printed,Regular Fit,Colors may vary due to photography and your screen setting",
    price: 1999,
    updatedPrice: 1499,
    starRating: 4.2,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Winterwear",
  }, //8
  {
    _id: uuid(),
    title: "Sensei Jacket",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/10/kakashi_cosplay_bomber1_comicsense-scaled.jpg",
    description:
      "280-300 GSM, Polyester-Cotton Blend, Bio-Washed Fabric, Screen Printed,Regular Fit,Colors may vary due to photography and your screen setting",
    price: 2100,
    updatedPrice: 1600,
    starRating: 4.8,
    size: "Regular",
    inStock: true,
    fastDelivery: false,
    category: "Winterwear",
  }, //9
  {
    _id: uuid(),
    title: "Sage Of Shadow Path",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/03/naruto_sageofshadowpath_oversizetee_listing_hitanshi-2_comicsense.jpg",
    description:
      "180 GSM, 100% Cotton, Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit, Colors may vary due to photography and your screen setting",
    price: 599,
    updatedPrice: 349,
    starRating: 4.7,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Oversize",
  }, //10
  {
    _id: uuid(),
    title: "4th Hokage[COMBO]",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/02/1-2_comicsense.jpg",
    description:
      "A flowering member of the bromeliad family, it is more popularly known as the Silver Vase or the Urn Plant. ",
    price: 2399,
    updatedPrice: 1799,
    starRating: 4.5,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Cosplay",
  }, //1

  // figure in
  {
    _id: uuid(),
    title: "Takemichi",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/08/takemichi5_comicsense-1.jpg",
    description:
      "Height: 16 cm (approx.),Imported and distributed in India by Wizplex private limited,Comes with the Official Box, Colors may vary due to photography and your screen setting",
    price: 2100,
    updatedPrice: 1999,
    starRating: 4.3,
    inStock: true,
    fastDelivery: true,
    category: "FigureIn",
  }, //11

  {
    _id: uuid(),
    title: "JJK Itadori",
    imgSrc:
      " https://comicsense.b-cdn.net/wp-content/uploads/2022/01/itadori_figurine1-scaled.jpg",
    description:
      "Height: 20 cm (approx)., Imported and distributed in India by Wizplex private limited , Comes with the Official Box,   Colors may vary due to photography and your screen setting",
    price: 2000,
    updatedPrice: 1699,
    starRating: 3.8,
    inStock: true,
    fastDelivery: true,

    category: "FigureIn",
  }, //12
  {
    _id: uuid(),
    title: "MHA: Hawks",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/12/bp19055-6_comicsense.jpg",
    description:
      "Height: 18 cm (approx)., Imported and distributed in India by Wizplex private limited , Comes with the Official Box,   Colors may vary due to photography and your screen setting",
    price: 3000,
    updatedPrice: 2299,
    starRating: 4.8,
    inStock: true,
    fastDelivery: true,

    category: "FigureIn",
  }, //13

  {
    _id: uuid(),
    title: "7th Hokage[COMBO]",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/01/4th-hokage-tee-jogger-combo2_comicsense.jpg",
    description:
      "220 GSM, 100% Cotton,Jogger, Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit, Colors may vary due to photography and your screen setting",
    price: 1598,
    updatedPrice: 1258,
    starRating: 3.7,
    size: "Oversize",
    inStock: true,
    fastDelivery: false,
    category: "Cosplay",
  }, //14
  {
    _id: uuid(),
    title: "Akatsuki",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/akatsuki_naruto_cloak3_comicsense.jpg",
    description:
      "220 GSM, 100% Cotton,Jogger, Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit, Colors may vary due to photography and your screen setting",
    price: 1700,
    updatedPrice: 1500,
    starRating: 4.2,
    size: "Regular",
    inStock: true,
    fastDelivery: false,
    category: "Cosplay",
  }, //15

  {
    _id: uuid(),
    title: "Hero’s Sacrifice Tote Bag",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/03/1-6_comicsense.jpg",
    description:
      "Dimensions:14” x 14” x 3” Inches ,Strap Length: 31 Inches,Material: canvas, Closure Mechanism: Snap button, Add on: a mini pocket inside with zipping, Screen Printing,    Colors may vary due to photography and your screen setting",
    price: 649,
    updatedPrice: 499,
    starRating: 2.8,
    inStock: true,
    fastDelivery: true,
    category: "Bag",
  }, //16

  {
    _id: uuid(),
    title: "Wanted Pirate Bag",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/08/totebags_wanted2_comicsense.jpg",
    description:
      "Dimensions:14” x 14” x 3” Inches ,Strap Length: 31 Inches,Material: canvas, Closure Mechanism: Snap button, Add on: a mini pocket inside with zipping, Screen Printing,    Colors may vary due to photography and your screen setting",
    price: 699,
    updatedPrice: 549,
    starRating: 4.4,
    inStock: true,
    fastDelivery: false,
    category: "Bag",
  }, //18

  {
    _id: uuid(),
    title: "Straw Hat",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/luffy_logo_comicsense.jpg",
    description:
      "Material: Vinyl Sticker, Strong Adhesive, Water Proof.Bubble free Material for smooth and easy application. 100% Glue free removal.  Finish: Matte Laminated Anti-Scratch Finish",
    price: 100,
    updatedPrice: 60,
    starRating: 4.5,
    inStock: true,
    fastDelivery: true,
    category: "Sticker",
  }, //19
  {
    _id: uuid(),
    title: "Kakashi Eye",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/kakashi_sharingan_comicsense.jpg",
    description:
      "Material: Vinyl Sticker, Strong Adhesive, Water Proof.Bubble free Material for smooth and easy application. 100% Glue free removal.  Finish: Matte Laminated Anti-Scratch Finish",
    price: 100,
    updatedPrice: 60,
    starRating: 4.5,
    inStock: true,
    fastDelivery: true,
    category: "Sticker",
  }, //20
  {
    _id: uuid(),
    title: "OK sticker",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/ok_saitama_comicsense.jpg",
    description:
      "Material: Vinyl Sticker, Strong Adhesive, Water Proof.Bubble free Material for smooth and easy application. 100% Glue free removal.  Finish: Matte Laminated Anti-Scratch Finish",
    price: 100,
    updatedPrice: 60,
    starRating: 3.5,
    inStock: true,
    fastDelivery: true,
    category: "Sticker",
  }, //21
  {
    _id: uuid(),
    title: "Ultra Instinct",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/perfect_goku_comicsense.jpg",
    description:
      "Material: Vinyl Sticker, Strong Adhesive, Water Proof.Bubble free Material for smooth and easy application. 100% Glue free removal.  Finish: Matte Laminated Anti-Scratch Finish",
    price: 100,
    updatedPrice: 60,
    starRating: 3.5,
    inStock: true,
    fastDelivery: false,
    category: "Sticker",
  }, //21

  {
    _id: uuid(),
    title: "Bleach SOULs. Official Book",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/05/ichigo_sparkle_cover.webp",
    description:
      "Get the inside scoop on Bleach! This profile book contains extensive information on the characters and storylines from Bleach Vols. 1-21. It also includes exclusive stickers, a poster, bonus Manga, the original Bleach one-shot, and an interview with Tite Kubo! Come explore the world of Bleach!",
    price: 1800,
    updatedPrice: 1199,
    starRating: 4.5,
    inStock: true,
    fastDelivery: true,
    category: "Manga",
  }, //15

  {
    _id: uuid(),
    title: "A Silent Voice 5",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/05/3_comicsense.jpg",
    description:
      "A QUIET CALM, Despite their tense pasts, Shoya begins to embrace the friend group that used to terrorize Shoko because she couldn’t hear. Now that summer vacation is in full swing, the crew can work together to film Tomohiro’s eccentric movie. Each fun-filled day lazily passes by, but doubt tugs at Shoya’s heavy heart and he is desperate to cling on to meaningful moments before they are gone…",
    price: 899,
    updatedPrice: 699,
    starRating: 4.2,
    inStock: true,
    fastDelivery: true,
    category: "Manga",
  }, //15

  {
    _id: uuid(),
    title: "Attack on Titan 1",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/05/1_comicsense-7.jpg",
    description:
      "A hundred years ago, the Titans appeared out of nowhere. They attacked humans, eating whoever they could find. They destroyed most of humanity and no one knew what they were or where they came from. The remnants of civilization now reside behind the three concentric walls of a country. The walls have safeguarded humanity from these monsters, and many humans have lived without ever seeing one of them. One day, their worst nightmares come into being. A 60-meter tall Titan called the Colossus attacks the outermost wall, breaching it. It instantly disappears afterward, leaving a giant hole in the wall.",
    price: 999,
    updatedPrice: 799,
    starRating: 4.8,
    inStock: true,
    fastDelivery: true,
    category: "Manga",
  }, //15
  {
    _id: uuid(),
    title: "Hot and Cold Led Night Lamp",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/todoroki_led_lamp_comicsense.jpg",
    description:
      "Light Color: Continuous Automatic 7 Color Changing, Light Source: LED Bulb, Switch Mode: Touch Sensor & Remote ,Modes:With Touch Sensor: 7 Single Color & 4 Automatic Modes With Remote: 16 Single Color, 4 Automatic Modes & Brightness Control Base Material: ABS Base Size: 8.5cm (Diameter) x 4cm (Height),Plate Material: Laser Engraved Acrylic Plate",
    price: 2000,
    updatedPrice: 1200,
    starRating: 3.8,
    inStock: true,
    fastDelivery: true,
    category: "Lamp",
  }, //15

  {
    _id: uuid(),
    title: "Detroit Smash Led Night Lamp",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/deku_pinch_led_lamp_comicsense.jpg",
    description:
      "Light Color: Continuous Automatic 7 Color Changing, Light Source: LED Bulb, Switch Mode: Touch Sensor & Remote ,Modes:With Touch Sensor: 7 Single Color & 4 Automatic Modes With Remote: 16 Single Color, 4 Automatic Modes & Brightness Control Base Material: ABS Base Size: 8.5cm (Diameter) x 4cm (Height),Plate Material: Laser Engraved Acrylic Plate",
    price: 2000,
    updatedPrice: 1200,
    starRating: 3.8,
    inStock: true,
    fastDelivery: true,
    category: "Lamp",
  }, //15

  {
    _id: uuid(),
    title: "One For All Led Night Lamp",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2021/03/almight_led_lamp_comicsense.jpg",
    description:
      "Light Color: Continuous Automatic 7 Color Changing, Light Source: LED Bulb, Switch Mode: Touch Sensor & Remote ,Modes:With Touch Sensor: 7 Single Color & 4 Automatic Modes With Remote: 16 Single Color, 4 Automatic Modes & Brightness Control Base Material: ABS Base Size: 8.5cm (Diameter) x 4cm (Height),Plate Material: Laser Engraved Acrylic Plate",
    price: 2000,
    updatedPrice: 1200,
    starRating: 4.2,
    inStock: true,
    fastDelivery: true,
    category: "Lamp",
  }, //15
  {
    _id: uuid(),
    title: "Titan Hunter Levi Led Night Lamp",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/01/14AA_comicsense.jpg",
    description:
      "Light Color: Continuous Automatic 7 Color Changing, Light Source: LED Bulb, Switch Mode: Touch Sensor & Remote ,Modes:With Touch Sensor: 7 Single Color & 4 Automatic Modes With Remote: 16 Single Color, 4 Automatic Modes & Brightness Control Base Material: ABS Base Size: 8.5cm (Diameter) x 4cm (Height),Plate Material: Laser Engraved Acrylic Plate",
    price: 2000,
    updatedPrice: 1600,
    starRating: 4.5,
    inStock: true,
    fastDelivery: true,
    category: "Lamp",
  }, //15

  {
    _id: uuid(),
    title: "Devil Hunter Lanyard Keychain",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/03/chainsaw1_comicsense.jpg",
    description:
      "15cm x 2.5cm, Satin Tape 250gsm,  Printing: Sublimation,Washable,Colors may vary due to photography and your screen setting",
    price: 300,
    updatedPrice: 199,
    starRating: 2.5,
    inStock: true,
    fastDelivery: true,
    category: "Sticker",
  }, //15
  {
    _id: uuid(),
    title: "Dreams",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/03/dreams_denji5_comicsense.jpg",
    description:
      "220 GSM, 100% Cotton,Jogger, Pre-Shrunk & Bio-Washed Fabric,Screen Printed, Oversize Fit, Colors may vary due to photography and your screen setting",
    price: 1400,
    updatedPrice: 1000,
    starRating: 4.2,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Oversize",
  }, //15
  {
    _id: uuid(),
    title: "Monster Trio Bomber Jacket ",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2023/02/one_piece_bomber6_comicsense-1.jpg",
    description:
      "260-270 GSM 100% Polyester Fleece Fabric ,Sublimation Printed, Oversize Fit, Colors may vary due to photography and your screen setting",
    price: 1900,
    updatedPrice: 1700,
    starRating: 4.5,
    size: "Regular",
    inStock: true,
    fastDelivery: true,
    category: "Oversize",
  }, //15
  {
    _id: uuid(),
    title: "Fukurodani #4 Jersey",
    imgSrc:
      "https://comicsense.b-cdn.net/wp-content/uploads/2022/06/bokuto-fron-full_comicsense.jpg",
    description:
      "180 GSM advance 100% polyester honeycomb fabric, SublimationPrinted, Regular Fit, Colors may vary due to photography and your screen setting",
    price: 1199,
    updatedPrice: 799,
    starRating: 3.8,
    size: "Oversize",
    inStock: true,
    fastDelivery: true,
    category: "Cosplay",
  }, //15
];
