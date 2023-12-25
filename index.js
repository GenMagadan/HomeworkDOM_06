import { product } from "./data.js";
const products = JSON.parse(product);
console.log(products);

const contentEl = document.querySelector('.content');

products.forEach(({ model, power, number_modes, max_diameter, net_weight, impact_force, price, image }) => {
   const productCard = document.createElement('div');
   productCard.classList.add('card');
   productCard.style.width = '480px';
   productCard.style.height = 'auto'
   productCard.style.display = 'flex';
   productCard.style.flexDirection = 'column';
   productCard.style.boxShadow = '10px 5px 5px red';
   contentEl.appendChild(productCard);

   const img = document.createElement('img');
   img.src = image;
   img.style.width = '100%';
   img.style.height = 'auto';
   img.style.objectFit = 'cover';
   productCard.appendChild(img);

   const descProduct = document.createElement('div');
   descProduct.style.backgroundColor = 'white';
   productCard.appendChild(descProduct);


   const modelEl = document.createElement('p');
   modelEl.classList.add('description');
   modelEl.textContent = `Модель: ${model}`;
   modelEl.style.fontSize = '24px';
   modelEl.style.paddingLeft = '20px';
   descProduct.appendChild(modelEl);

   const powerEl = document.createElement('p');
   powerEl.classList.add('description');
   powerEl.textContent = `Мощность: ${power}`;
   powerEl.style.fontSize = '24px';
   powerEl.style.paddingLeft = '20px';
   descProduct.appendChild(powerEl);

   const numberModes = document.createElement('p');
   numberModes.classList.add('description');
   numberModes.textContent = `Количество режимов: ${number_modes}`;
   numberModes.style.fontSize = '24px';
   numberModes.style.paddingLeft = '20px';
   descProduct.appendChild(numberModes);

   const maxDiameter = document.createElement('p');
   maxDiameter.classList.add('description');
   maxDiameter.textContent = `Max диаметр сверления буром: ${max_diameter}`;
   maxDiameter.style.fontSize = '24px';
   maxDiameter.style.paddingLeft = '20px';
   descProduct.appendChild(maxDiameter);

   const netWeight = document.createElement('p');
   netWeight.classList.add('description');
   netWeight.textContent = `Вес нетто: ${net_weight}`;
   netWeight.style.fontSize = '24px';
   netWeight.style.paddingLeft = '20px';
   descProduct.appendChild(netWeight);

   const impactForce = document.createElement('p');
   impactForce.classList.add('description');
   impactForce.textContent = `Сила удара: ${impact_force}`;
   impactForce.style.fontSize = '24px';
   impactForce.style.paddingLeft = '20px';
   descProduct.appendChild(impactForce);

   const priceEl = document.createElement('p');
   priceEl.classList.add('product_price');
   priceEl.textContent = `Сила удара: ${price}`;
   priceEl.style.fontSize = '24px';
   priceEl.style.paddingLeft = '20px';
   descProduct.appendChild(priceEl);

});