let currentIndex = 0; 
const slides = [
  {
    title: "Programming Languages",
    description: "The Building Blocks of Software.",
    backgroundImage: "url('images/bahasa_pemrograman.webp')" 
  },
  {
    title: "AI & Machine Learning",
    description: "The Future of Automation.",
    backgroundImage: "url('images/ai_ml.webp')"
  },
  {
    title: "Computer Networks",
    description: "Connecting the Digital World.",
    backgroundImage: "url('images/computer_networks.jpg')"
  },
  {
    title: "Cloud Computing",
    description: "Revolutionizing Data Storage and Services.",
    backgroundImage: "url('images/cloud_computing.jpg')"
  },
  {
    title: "Blockchain",
    description: "Securing Transactions in a Decentralized World.",
    backgroundImage: "url('images/blockchain.webp')"
  },
  {
    title: "Robotics",
    description: "Engineering the Future of Automation",
    backgroundImage: "url('images/robotics.webp')"
  }
];

const carousel = document.querySelector(".carousel");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");
const textContainer = document.querySelector(".text-container");


function createCarouselItems() {
  slides.forEach((slide, index) => {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    if (index === currentIndex) item.classList.add('active'); 
    item.style.backgroundImage = slide.backgroundImage;

    carousel.appendChild(item);
  });
}


function updateTextAndBackground() {
  const slide = slides[currentIndex];

  
  

  
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  carouselItems.forEach(item => item.classList.remove("active"));
  carouselItems[currentIndex].classList.add("active");

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  textContainer.style.opacity = 0; 
  setTimeout(() => {
    textContainer.style.opacity = 1; 
    title.textContent = slide.title;
  description.textContent = slide.description;
  }, 300); 
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; 
  updateTextAndBackground();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
  updateTextAndBackground();
}


createCarouselItems();
updateTextAndBackground();
