let cardWrapper = document.querySelector('.section-2_wrapper');




// RENDER DATA STARTED

function renderdata(data) {
cardWrapper.innerHTML = "";
  data.forEach((el) => {
    const { thumbnail, title, brand, description, rating, price, category } = el;

    const card = document.createElement('div');
    card.classList.add('section-2_wrapper-card');
    card.classList.add('mix-blend-multiply');
    card.classList.add('w-[300px]');
    card.innerHTML = `
        
                <img src="${thumbnail}" alt="${title}" class="h-[200px] w-[100%] m-auto rounded-t-[12px]">

                    <div class="title bg-[#d2d1d14f] p-[15px] rounded-b-[12px]">
                            <h3 class="text-[16px]">${title}</h3>

                        <p class="flex py-[5px] items-center gap-2 pb-[10px] border-b-[1px] text-[16px] border-b-[#0000003f]">
                            <b>${price}</b>
                            <a href="#" class="line-through">${price}</a>
                        </p>

                        <h2 class="text-[16px] text-[#249B3E] font-bold pt-[1px]">${brand}</h2>
                    </div>
            `;

    cardWrapper.appendChild(card);
  });
}

renderdata(product.products);

// RENDER DATA ENDED








// BRAND INTERCHANGE STARTED

let brand2 = document.querySelector("#brand");

let brand = []

function findBrand(data) {

  if (data.length > 0) {

    data.forEach((el) => {

      if (!brand.includes(el.brand)) {
        brand.push(el.brand)
      }

    })
  }

}
console.log(brand);

findBrand(product.products)



function renderBrand(data) {
  if (data.length > 0) {

    data.forEach((el) => {
      const data = document.createElement('option');
      data.textContent = `
            ${el}
            
            `
      console.log(el.value);
      brand2.appendChild(data);
    })

  }

}


renderBrand(brand)

brand2.addEventListener('change', (e) => {
  sortBrands(e.target.value)
})


function sortBrands(brandNmae){

  cardWrapper.innerHTML = ""

  const filterBrand = product.products.filter(el => {
    return el.brand.toLowerCase() == brandNmae.toLowerCase()
  })


  renderdata(filterBrand)


}

// BRAND INTERCHANGE ENDED







// CHEAPER PROCESSING CLICK STARTED

function toCheaper(data){
    return data.products.slice().sort((a,b) => a.price - b.price);
}

const resultat1 = toCheaper(product);
console.log("Sorted by price CHEAPER:", resultat1);

// CHEAPER PROCESSING CLICK ENDED






// EXPENSIVE PROCESSING CLICK STARTED

function toExpensive(data){
    return data.products.slice().sort((a,b) => b.price - a.price);
}

const resultat2 = toExpensive(product);
console.log("Sorted by price EXPENSIVE:", resultat2);

// EXPENSIVE PROCESSING CLICK ENDED


// CATEGORY INTERCHANGE STARTED

let category2 = document.querySelector("#category");

let category = [];

function findCategory(data) {

  if (data.length > 0) {

    data.forEach((el) => {

      if (!category.includes(el.category)) {
        category.push(el.category)
      }

    })
  }

}

findCategory(product.products)


function renderCategory(data) {
  if (data.length > 0) {

    data.forEach((el) => {
      const data = document.createElement('option');
      data.textContent = `
            ${el}
            
            `
      console.log(el.value);
      category2.appendChild(data);
    })

  }

}


renderCategory(category)

category2.addEventListener('change', (e) => {
  sortCategory(e.target.value)
})


function sortCategory(brandNmae){

  cardWrapper.innerHTML = ""

  const filterCategory = product.products.filter(el => {
    return el.category.toLowerCase() == brandNmae.toLowerCase()
  })


  renderdata(filterCategory)

}

// CATEGORY INTERCHANGE ENDED