const sliderData = {
    "slider": [
        {
            "title": "Exclusive Collection in Our Online Store",
            "subtitle": "Best for your categories",
            "description": "Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.",
            "discountPrice": "140.00",
            "currency": "₹",
            "buttonText": "Shop Now",
            "heroImage": "assets/images/home-img/heroone.jpg",
            "shapeImage": "assets/images/home-img/shape.png",
            "lineShape": "assets/images/home-img/lineshape.png",
            "animationClass": "animated-text",
            "highlightColor": "#0F63A5"
          },
          {
            "title": "Exclusive Collection in Our Online Store",
            "subtitle": "Best for your categories",
            "description": "Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.",
            "discountPrice": "140.00",
            "currency": "₹",
            "buttonText": "Shop Now",
            "heroImage": "assets/images/home-img/heroone.jpg",
            "shapeImage": "assets/images/home-img/shape.png",
            "lineShape": "assets/images/home-img/lineshape.png",
            "animationClass": "animated-text",
            "highlightColor": "#0F63A5"
          },
          {
            "title": "Exclusive Collection in Our Online Store",
            "subtitle": "Best for your categories",
            "description": "Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.",
            "discountPrice": "140.00",
            "currency": "₹",
            "buttonText": "Shop Now",
            "heroImage": "assets/images/home-img/heroone.jpg",
            "shapeImage": "assets/images/home-img/shape.png",
            "lineShape": "assets/images/home-img/lineshape.png",
            "animationClass": "animated-text",
            "highlightColor": "#0F63A5"
          },
    
    ]
  };

  // Dynamically populate slider
  $(document).ready(function () {
    const sliderContainer = $('.slider');

    sliderData.slider.forEach(item => {
      const sliderItem = `
        <div class="slider-item">
          <div class="content-box align">
            <h6 style="color: ${item.highlightColor}; font-weight: 600;">${item.subtitle}</h6>
            <h1 style="font-weight: 600;" class="big">${item.title.replace('Online Store', '<span class="spancolor">Our Online</span> Store')}</h1>
            <p>${item.description}</p>
            <div style="display: flex; align-items: center;  margin-top: 20px;" class="currency">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div>
                  <span style="font-size: 40px;">${item.currency}</span>
                </div>
                <div>
                  <div class="${item.animationClass}">Discount Price</div>
                  <h5>${item.discountPrice}</h5>
                </div>
              </div>
              <div><img src="${item.lineShape}" alt="Line Shape" style="height: auto;" /></div>
              <button class="hero-button">${item.buttonText}</button>
            </div>
          </div>
          <div class="hero-image-wrapper">
            <div class="hero-image">
              <img src="${item.heroImage}" alt="Fashion Trends" />
            </div>
          </div>
        </div>
      `;
      sliderContainer.append(sliderItem);
    });

    // Initialize the slick carousel
    // Initialize the slick carousel
$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  
  });

  