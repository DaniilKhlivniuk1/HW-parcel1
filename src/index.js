import renderTemplate from "./template.hbs";
import productData from "./data.json";

const productItems = productData.items;
const markup = renderTemplate({ items: productItems });

document.querySelector("#product-list").innerHTML = markup;
console.log(markup);