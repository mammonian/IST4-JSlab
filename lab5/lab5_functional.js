// Функція для завантаження категорій
async function loadCategories() {
  try {
    const response = await fetch('categories.json');
    const categories = await response.json();

    const categoriesList = document.getElementById('categoriesList');
    categoriesList.innerHTML = '';
    categories.forEach(category => {
      const categoryLink = document.createElement('a');
      categoryLink.href = '#';
      categoryLink.className = 'btn btn-primary m-2';
      categoryLink.textContent = category.name;
      categoryLink.onclick = () => loadCategoryProducts(category.shortname);
      categoriesList.appendChild(categoryLink);
    });
  } catch (error) {
    console.error('Помилка при завантаженні категорій:', error);
  }
}

// Функція для завантаження товарів для вибраної категорії
let currentCategory = null; // Поточна категорія
async function loadCategoryProducts(categoryShortname) {
  try {
    const response = await fetch(`${categoryShortname}.json`);
    const products = await response.json();

    currentCategory = products; // Зберігаємо товари поточної категорії

    const productsList = document.getElementById('randomProduct');
    productsList.innerHTML = ''; // Очищаємо попередній вміст

    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'card m-2';
      productDiv.style.width = '18rem';

      productDiv.innerHTML = `
        <img src="https://place-hold.it/200x200" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">Price: ${product.price}</p>
        </div>
      `;

      productsList.appendChild(productDiv);
    });
  } catch (error) {
    console.error('Помилка при завантаженні товарів:', error);
  }
}

// Функція для отримання випадкового товару
function getRandomProduct() {
  if (currentCategory && currentCategory.length > 0) {
    const randomIndex = Math.floor(Math.random() * currentCategory.length);
    const randomProduct = currentCategory[randomIndex];

    const randomProductDiv = document.getElementById('randomProduct');
    randomProductDiv.innerHTML = `
      <div class="card m-2" style="width: 18rem;">
        <img src="https://place-hold.it/200x200" class="card-img-top" alt="${randomProduct.name}">
        <div class="card-body">
          <h5 class="card-title">${randomProduct.name}</h5>
          <p class="card-text">${randomProduct.description}</p>
          <p class="card-text">Price: ${randomProduct.price}</p>
        </div>
      </div>
    `;
  }
}

// Показати головну сторінку
document.getElementById('homeLink').onclick = function() {
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('catalogPage').style.display = 'none';
};

// Показати сторінку каталогу
document.getElementById('catalogLink').onclick = function() {
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('catalogPage').style.display = 'block';
  loadCategories(); // Завантажуємо категорії при переході до каталогу
};

// Завантажуємо категорії при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadCategories);
