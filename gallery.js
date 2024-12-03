document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'assets/images/home-img/gal1.jpg', alt: 'Image 1' },
        { src: 'assets/images/home-img/gal2.jpg', alt: 'Image 2' },
        { src: 'assets/images/home-img/gal3.jpg', alt: 'Image 3' },
        { src: 'assets/images/home-img/gal4.jpg', alt: 'Image 4' },
        { src: 'assets/images/home-img/gal5.jpg', alt: 'Image 5' },
        { src: 'assets/images/home-img/gal6.jpg', alt: 'Image 6' },
        { src: 'assets/images/home-img/gal7.jpg', alt: 'Image 7' },
        { src: 'assets/images/home-img/gal8.jpg', alt: 'Image 8' },
        { src: 'assets/images/home-img/gal9.jpg', alt: 'Image 9' },
        { src: 'assets/images/home-img/gal10.jpg', alt: 'Image 10' },
        { src: 'assets/images/home-img/gal11.jpg', alt: 'Image 11' },
        { src: 'assets/images/home-img/full.jpg', alt: 'Image 12' }
    ];

    const galleryContainer = document.querySelector('.gallery');
    const modalImage = document.getElementById('modalImage');
    const imageCount = document.getElementById('imageCount');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playBtn = document.getElementById('playBtn');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    let currentIndex = 0;
    let slideshowInterval = null;

    // Dynamically populate gallery
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            imageModal.show();
            stopSlideshow(); // Stop slideshow when a new image is clicked
        });
        galleryContainer.appendChild(imgElement);
    });

    const showImage = (index) => {
        const totalImages = images.length;
        if (index < 0) currentIndex = totalImages - 1;
        else if (index >= totalImages) currentIndex = 0;
        else currentIndex = index;

        modalImage.src = images[currentIndex].src;
        imageCount.textContent = `Image ${currentIndex + 1} of ${totalImages}`;
        modalImage.classList.add('slideshow');
        setTimeout(() => {
            modalImage.classList.remove('slideshow');
        }, 500);
    };

    const startSlideshow = () => {
        slideshowInterval = setInterval(() => {
            showImage(currentIndex + 1);
        }, 2000);
        playBtn.innerHTML = "<i class='fa-solid fa-pause'></i>"; // Change to pause icon
        playBtn.classList.add('active');
    };

    const stopSlideshow = () => {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        playBtn.innerHTML = "<i class='fa-solid fa-play'></i>"; // Change to play icon
        playBtn.classList.remove('active');
    };

    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
        stopSlideshow();
    });

    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
        stopSlideshow();
    });

    playBtn.addEventListener('click', () => {
        if (slideshowInterval === null) {
            startSlideshow();
        } else {
            stopSlideshow();
        }
    });
});
