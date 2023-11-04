const add = async () => {
  const data = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
    const products = document.getElementById('products')
  data.forEach((element) => {
    const product = document.createElement('div')
    product.classList.add("product");
    const heading = document.createElement("h2");
    const image = document.createElement("img");

    heading.innerHTML = element.title;
    image.src = element.image;
    image.classList.add("image");

    product.appendChild(image)
    product.appendChild(heading)

    products.appendChild(product);
  });
};


add();
