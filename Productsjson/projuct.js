const products = [
    {
      id: 1,
      name: "Product Name 1",
      category: "Category 1",
      price: "$100",
      defaultImage: "assets/images/home-img/product1.png",
      hoverImage: "assets/images/home-img/product2.png"
    },
    {
      id: 2,
      name: "Product Name 2",
      category: "Category 2",
      price: "$200",
      defaultImage: "assets/images/home-img/product3.png",
      hoverImage: "assets/images/home-img/product7.png"
    },
    {
      id: 3,
      name: "Product Name 3",
      category: "Category 3",
      price: "$150",
      defaultImage: "assets/images/home-img/product10.png",
      hoverImage: "assets/images/home-img/product11.png"
    },
    {
      id: 4,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product7.png",
      hoverImage: "assets/images/home-img/product6.png"
    },
    {
      id: 5,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product8.png",
      hoverImage: "assets/images/home-img/product8.png"
    },
    {
      id: 6,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product9.png",
      hoverImage: "assets/images/home-img/product9.png"
    },
    {
      id: 7,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product4.png",
      hoverImage: "assets/images/home-img/product5.png"
    },
    {
      id: 8,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product11.png",
      hoverImage: "assets/images/home-img/product10.png"
    },
    {
      id: 9,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product12.png",
      hoverImage: "assets/images/home-img/product13.png"
    },
    
    {
      id: 10,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product6.png",
      hoverImage: "assets/images/home-img/product7.png"
    },
    {
      id: 11,
      name: "Product Name 1",
      category: "Category 1",
      price: "$100",
      defaultImage: "assets/images/home-img/product2.png",
      hoverImage: "assets/images/home-img/product3.png"
    },
    {
      id: 12,
      name: "Product Name 4",
      category: "Category 4",
      price: "$250",
      defaultImage: "assets/images/home-img/product13.png",
      hoverImage: "assets/images/home-img/product12.png"
    },
  ];






  function createProductCards() {
    const productCards = document.getElementById("product-cards");
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("item-card");
  
      card.innerHTML = `
        <div class="img-1" style="background-image: url('${product.defaultImage}');">
          <div class="hover-content">
            <a href="#" class="icon-btn"><i class="fa fa-heart"></i></a>
            <a href="${product.defaultImage}" class="icon-btn" target="_blank"><i class="fa fa-eye"></i></a>
            <a href="#" class="icon-btn"><i class="fa fa-cart-plus"></i></a>
          </div>
        </div>
        <p class="item-name">${product.name}</p>
        <p class="item-category">${product.category}</p>
        <p class="item-price">${product.price}</p>
      `;
  
      // Add hover effect for changing image
      const imgElement = card.querySelector(".img-1");
      imgElement.addEventListener("mouseenter", () => {
        imgElement.style.backgroundImage = `url('${product.hoverImage}')`;
      });
      imgElement.addEventListener("mouseleave", () => {
        imgElement.style.backgroundImage = `url('${product.defaultImage}')`;
      });
  
      productCards.appendChild(card);
    });
  }
  
  // Create product cards on page load
  window.onload = createProductCards;

  // Create product cards on page load
  // window.onload = createProductCards;




  