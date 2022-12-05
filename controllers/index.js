// FUNCTION GET DATA
function getDataProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then(function (result) {
    console.log("result: ", result.data);
    renderSlider(result.data.content);
    renderContent(result.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
//FUNCTION RENDER PRODUCT'S INFO (GRID)
function renderContent(arrProduct) {
  //   CONTENT GRID
  var contentProduct = "";
  for (var i = 0; i < arrProduct.length; i++) {
    var product = arrProduct[i];
    contentProduct += `
    <div class="product__item col">
            <div class="item-upper">
              <img width="334" src="${product.image}" />
              <div class="item-text">
                <p >${
                  product.name.length > 20
                    ? product.name.substr(0, 20) + "..."
                    : product.name
                }</p>
                <span>${
                  product.description.length > 50
                    ? product.shortDescription.substr(0, 50) + "..."
                    : product.shortDescription
                }</span>
              </div>
            </div>
            <div class="item-bottom d-flex align-items-center">
              <a href="./detail.html?id=${product.id}" class="btn">Buy now</a>
              <span class="item-price btn">${product.price}$</span>
            </div>
          </div>
    `;
  }
  document.querySelector("#productHolder").innerHTML = contentProduct;
}
//FUNCTION RENDER SLIDER (BS4 CAROUSEL)
function renderSlider(arrProduct) {
  //   CONTENT SLIDER
  var contentSlider = `<div class="carousel-item active">
    <div class="carousel-img" id="slider__img">
      <img src="${arrProduct[0].image}" alt="" />
    </div>
    <div class="carousel-text" style="width: 250px;">
      <h1 id="slider__productName" >${arrProduct[0].name}</h1>
      <p id="slider__productDesc" >${arrProduct[0].description}</p>
      <a href="./detail.html?id=${arrProduct[0].id}" class="btn">Buy now</a>
    </div>
  </div>`;
  // *FIRST ITEM MUST HAVE .active FOR USING BOOSTRAP CAROUSEL
  for (var i = 1; i < arrProduct.length; i++) {
    var contentNextSlider = arrProduct[i];
    contentSlider += `
      <div class="carousel-item">
              <div class="carousel-img">
                <img src="${contentNextSlider.image}" alt="" />
              </div>
              <div class="carousel-text" style="width: 250px;">
                <h1>${contentNextSlider.name}</h1>
                <p>${
                  contentNextSlider.description.length > 70
                    ? contentNextSlider.description.substr(0, 70) + "..."
                    : contentNextSlider.description
                }</p>
                <a href="./detail.html?id=${
                  contentNextSlider.id
                }" class="btn">Buy now</a>
              </div>
            </div>
      `;
  }
  document.querySelector("#sliderHolder").innerHTML = contentSlider;
}
getDataProduct();
//FUNCTION RENDER PRODUCT BY CATEGORY
function renderCategory(value) {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${value}`,
    method: "GET",
  });

  promise.then(function (result) {
    console.log("result: ", result.data);
    renderSlider(result.data.content);
    renderContent(result.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

let gelAllData = () => {};
