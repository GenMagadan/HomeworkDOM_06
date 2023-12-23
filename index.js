import { product } from "./data.js";
const products = JSON.parse(product);
console.log(products);

const contentEl = document.querySelector('.content');

products.forEach(({ model, power, number_modes, max_diameter, net_weight, impact_force, price, image }) => {
   const productCard = document.createElement('div');
   productCard.classList.add('card');
   contentEl.appendChild(productCard);
   productCard.style.width = '450px';
   productCard.style.height = '300px'
   productCard.style.display = 'flex';
   // contentEl.style.margin = '15px';
   // contentEl.style.textAlign = 'center';
   productCard.style.backgroundColor = 'grey';
   productCard.style.backgroundImage = `url('${image}')`
   // productCard.style.backgroundSize = 'cover';
   // productCard.style.backgroundPosition = 'center';
   // productCard.style.overflow = 'hidden';
   // productCard.style.justifyContent = 'center';
   // productCard.style.alignItems = 'center';

   const img = document.createElement('img');
   img.src = image;
   img.style.width = '100%';
   img.style.height = 'auto';
   img.style.objectFit = 'cover';
   productCard.appendChild(img);

});