import PNG1 from "../assets/articles-imgs/PNG1.png";
import PNG2 from "../assets/articles-imgs/PNG2.png";
import PNG3 from "../assets/articles-imgs/PNG3.png";
import PNG4 from "../assets/articles-imgs/PNG4.png";
import PNG5 from "../assets/articles-imgs/PNG5.png";
import PNG6 from "../assets/articles-imgs/PNG6.png";
import PNG7 from "../assets/articles-imgs/PNG7.png";
import PNG8 from "../assets/articles-imgs/PNG8.png";
import PNG9 from "../assets/articles-imgs/PNG9.png";
import PNG10 from "../assets/articles-imgs/PNG10.png";

export const NIKE_ARTICLES_DATA = [
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Purple",
    imgUrl: PNG1,
    price: "$299",
    inventory: 13,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike White",
    imgUrl: PNG2,
    price: "$199",
    inventory: 11,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Khaki",
    imgUrl: PNG3,
    price: "$499",
    inventory: 3,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Red",
    imgUrl: PNG4,
    price: "$249",
    inventory: 19,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Fire",
    imgUrl: PNG5,
    price: "$799",
    inventory: 12,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Bumble",
    imgUrl: PNG6,
    price: "$459",
    inventory: 6,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Long",
    imgUrl: PNG7,
    price: "$295",
    inventory: 18,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Green",
    imgUrl: PNG8,
    price: "$499",
    inventory: 17,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Ojay",
    imgUrl: PNG9,
    price: "$495",
    inventory: 13,
  },
  {
    id: Math.random(),
    brand: "Nike",
    name: "Nike Cream",
    imgUrl: PNG10,
    price: "$999",
    inventory: 5,
  },
];

export const BRANDS_DATA = [
  { name: "Nike", articles: NIKE_ARTICLES_DATA.length },
  { name: "Adidas", articles: NIKE_ARTICLES_DATA.length },
  { name: "Reebok", articles: NIKE_ARTICLES_DATA.length },
  { name: "Puma", articles: NIKE_ARTICLES_DATA.length },
  { name: "Vans", articles: NIKE_ARTICLES_DATA.length },
];
