
import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: "https://comicsense.b-cdn.net/wp-content/uploads/2022/08/oversize_comicsense.jpg",
    categoryName: "Oversize",
  },
  {
    _id: uuid(),
    img: "/images/categories/winterwear.webp",
    categoryName: "Winterwear",
  },
  {
    _id: uuid(),
    img: "/images/categories/manga.webp",
    categoryName: "Manga",
  },
  {
    _id: uuid(),
    img: "/images/categories/fig-1.webp",
    categoryName: "FigureIn",
  },
  {
    _id: uuid(),
    img: "/images/categories/cosplay.webp",
    categoryName: "Cosplay",
  },
  {
    _id: uuid(),
    img: "/images/categories/stickers1.webp",
    categoryName: "Sticker",
  },
  {
    _id: uuid(),
    img: "/images/categories/toteebag.webp",
    categoryName: "Bag",
  },
  {
    _id: uuid(),
    img: "/images/categories/lamp.webp",
    categoryName: "Lamp",
  },
 
];
