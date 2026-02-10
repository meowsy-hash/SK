const images = document.querySelectorAll('.carousel-image');
const captionBox = document.querySelector('.caption-box');
const totalImages = images.length;
let currentIndex = 0;

const captions = [
  "Filmpark Babelsberg - Spaß für die ganze Familie",
  "Schloss Sanssouci in Potsdam",
  "Naturerholung in Brandenburg",
  "Historische Denkmäler & Geschichte",
  "Entdecke globale Events",
  "Kultur & Schauspiel ganz lokal"
];

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  captionBox.textContent = captions[index]; 
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Automatic slideshow
setInterval(showNextImage, 5000);

// Arrow buttons
document.querySelector('.next').addEventListener('click', showNextImage);
document.querySelector('.prev').addEventListener('click', showPrevImage);

// Initialize caption
showImage(currentIndex);

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Verhindert den Standard-Jump
    const targetID = this.getAttribute('href').substring(1); // z.B. "discover"
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});