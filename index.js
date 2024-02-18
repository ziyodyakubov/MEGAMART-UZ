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










// PRICE CONTROLE PROCESSING CLICK STARTED

let price = document.querySelector("#price")

function toCheaper(data){
    let cheap =  data.products.slice().sort((a,b) => a.price - b.price);
    renderdata(cheap);
}

function toExpensive(data){
    let exp =  data.products.slice().sort((a,b) => b.price - a.price);
    renderdata(exp);
}

let cheap = document.querySelector(".cheaper");
price.addEventListener('change', () =>{
  if(price.value == 'cheap'){
      toCheaper(product)
  } else if(price.value == 'expensive'){
    toExpensive(product )
  }
});


// PRICE CONTROLE PROCESSING CLICK ENDED








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






// SEARCH PROCESSING STARTED

let search = document.querySelector("#searchbtn");
let moshniy = document.querySelector(".moshniy")

search.addEventListener('input', function (e) {
    moshniy.classList.toggle("hidden");

    if (moshniy.classList[5] !== "hidden") {
        moshniy.style.display = 'flex';
        moshniy.style = 'flex-col';
        moshniy.style = 'gap-[102px]';
    }

})

search.addEventListener("input", function (e) {
    let searchStr = e.target.value;
    let searched = product.products.filter(el => {
        return el.title.toLowerCase().includes(searchStr.toLowerCase())
    })

    if(searchStr == ""){
        searchWrapper.style.display = "none";
    }

    RenderData2(searched)

})

function RenderData2(data) {
    moshniy.innerHTML = ''
    data.forEach(el => {
        let searchTitle = document.createElement('li')
        searchTitle.classList.add("list-none")
        searchTitle.classList.add("text-[#666]")
        searchTitle.classList.add("pt-[5px]")
        searchTitle.classList.add("cursor-pointer")
        searchTitle.textContent = el.title;
        moshniy.appendChild(searchTitle)
    })

}


// SEARCH PROCESSING ENDED