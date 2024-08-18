document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const selectedName = urlParams.get('name');

  if (selectedName) {
    const imageMap = {
      'sona': 'sona.jpg',
      'chinni': 'sona.jpg',
      'chinni akka': 'sona.jpg',
      'akka': 'sona.jpg',
      'meow': 'sona.jpg',
      'sona amma': 'sona.jpg',
      'amma': 'sona.jpg',
      'sonaamma': 'sona.jpg',
      'taruni': 'sona.jpg',
      'tharuni': 'sona.jpg',
      'mata taruni': 'sona.jpg',
      'matataruni': 'sona.jpg',
      'lakshmi': 'sona.jpg',
      'laxmi': 'sona.jpg',
      'chelli': 'chelli.jpg',
      'geethu': 'chelli.jpg',
      'geethika': 'chelli.jpg',
      'madhuri': 'chelli.jpg',
      'geethika lakshmi sai madhuri': 'chelli.jpg',
      'geethikalakshmisaimadhuri': 'chelli.jpg',
      'sai': 'sai.jpg',
      'Snigdha': 'sai.jpg',
      'Sai Snigdha': 'sai.jpg',
      'Doctor': 'sai.jpg',
      'doctor': 'sai.jpg',
      'novina': 'novina.jpg',
      'novina akka': 'novina.jpg',
      'lovely sis': 'novina.jpg',
      'novina devi': 'novina.jpg',
      'sowji': 'sowji.jpg',
      'sowjanya': 'sowji.jpg',
      'sowji akka': 'sowji.jpg',
      'rohitha': 'sowji.jpg',
      'rohitha sowjanya': 'sowji.jpg',
      'rohitha sowjanya devi': 'sowji.jpg',
      'sowji akka': 'sowji.jpg',
      'spandu': 'spandu.jpg',
      'spandana': 'spandu.jpg',
      'spandhana': 'spandu.jpg',
      'shaillu': 'pankajam.jpg',
      'shailu': 'pankajam.jpg',
      'paki': 'pankajam.jpg',
      'paki pankajam': 'pankajam.jpg',
      'pakipankajam': 'pankajam.jpg',
      'pankajam': 'pankajam.jpg',
      'saillu': 'pankajam.jpg',
      'sailu': 'pankajam.jpg',
      'sailaja': 'pankajam.jpg',
      'mony': 'mounika.jpg',
      'mouny': 'mounika.jpg',
      'devi': 'mounika.jpg',
      'mounika devi': 'mounika.jpg',
      'pogaru': 'mounika.jpg',
      'mounika': 'mounika.jpg',
      'mounika devi': 'mounika.jpg',
      'satya': 'mounika.jpg',
      'rayudu mounika': 'mounika.jpg',
      'sweety': 'sweety.jpg',
      'sweetu': 'sweety.jpg',
      'sweettu': 'sweety.jpg',
      'hema': 'sweety.jpg',
      'hema pravalika0': 'sweety.jpg',
      'hema pravallika': 'sweety.jpg',
      'pravalika': 'sweety.jpg',
      'pravallika': 'sweety.jpg',
      'jemi': 'jemi.jpg',
      'jemi papa': 'jemi.jpg',
      'nithya': 'jemi.jpg',
      'nithya sri': 'jemi.jpg',
      'nithya sri kiran': 'jemi.jpg',
      'sri kiran': 'jemi.jpg',
      'sri': 'jemi.jpg',
      'geetha': 'geetha.jpg',
      'sai tejaswini': 'geetha.jpg',
      'tejaswini': 'geetha.jpg',
      'nissi': 'nissi.jpg',
      'haveela': 'nissi.jpg',
      'geera': 'nissi.jpg',
      'neha': 'neha.jpg',
      'keerthna': 'neha.jpg',
      'keerthana': 'neha.jpg',
      'swetha': 'swetha.png',
      'Swetha': 'swetha.png',
      'Swetha A': 'swetha.png',
      'A Swetha': 'swetha.png',
      'A swetha': 'swetha.png',
      'swetha a': 'swetha.png',
      'Neelima': 'neelima.png',
      'neelima': 'neelima.png',
      'Neelu': 'neelima.png',
      'neelu': 'neelima.png',
      'Neelima Chandu': 'neelima.png',
      'Chandu Neelima': 'neelima.png',
      'Neelima Chandrashekar': 'neelima.png'

    };

// Function to capitalize the first letter of the selected name
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// List of names that should include "Akka"
const akkaNames = ['neelima', 'neelu', 'neelima chandu', 'chandu neelima', 'neelima chandrashekar'];

// Function to get a random image for Neelima
function getRandomNeelimaImage() {
  const images = ['neelima.png', 'neelima1.png', 'neelima2.png'];
  return images[Math.floor(Math.random() * images.length)];
}

const greetingMessage = getGreetingMessage(selectedName.toLowerCase());

if (imageMap[selectedName.toLowerCase()]) {
  // Check if selected name is 'Neelima' or any of its variants
  const isNeelima = akkaNames.includes(selectedName.toLowerCase());
  const imageName = isNeelima ? getRandomNeelimaImage() : imageMap[selectedName.toLowerCase()];

  const isAkka = isNeelima;

  const capitalizedSelectedName = capitalize(selectedName);
  const nameToDisplay = isAkka ? `${capitalizedSelectedName} Akka` : capitalizedSelectedName;

  const customHeading = document.getElementById("customHeading");
  customHeading.textContent = `Happy Raksha Bandhan, ${nameToDisplay}!`;

  const centerImage = document.getElementById("centerImage");
  centerImage.src = imageName;

  const customText = document.getElementById("customText");
  customText.classList.add("animated-text");

  const greetingText = document.getElementById("greetingText");
  greetingText.style.color = '#fff';
  greetingText.style.fontFamily = "'Dancing Script', cursive"; // Wrap font name in quotes
  greetingText.style.fontSize = '2.2rem';
  greetingText.textContent = greetingMessage;

  // Preload images
  preloadImages([imageName]);

  // Set background image
  const backgroundImageUrl = imageName;
  document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center center';

} else {
  alert("Name not found! Happy Raksha Bandhan.");
}

  }
});

function getGreetingMessage(name) {
  switch (name) {
    // Sona
    case 'sona':
    case 'Sona':
    case 'chinni':
    case 'Chinni':
    case 'akka':
    case 'Akka':
    case 'meow':
    case 'Meow':
    case 'sona amma':
    case 'Sona Amma':
    case 'sonaamma':
    case 'Sonaamma':
    case 'amma':
    case 'Amma':
    case 'Taruni':
    case 'TARUNI':
    case 'Mata Taruni':
    case 'mata taruni':
    case 'mata Taruni':
    case 'Mata Taruni':
    case 'taruni':
    case 'Lakshmi':
    case 'lakshmi':
    case 'laxmi':
    case 'Laxmi':
      return "You are not just my sister, but also my best friend, my love, my supporter and many more who fills my life with joy and laughter. Love You Sona, Happy Rakhi Sona!";
    // Chelli
    case 'chelli':
    case 'Chelli':
    case 'geethu':
    case 'Geethu':
    case 'geethika':
    case 'Geethika':
    case 'madhuri':
    case 'Madhuri':
    case 'geethika lakshmi sai madhuri':
    case 'Geethika Lakshmi Sai Madhuri':
      return "Sisters are like flowers in the garden of life, bringing beauty and happiness. Thank you for being my blooming flower. Happy Raksha Bandhan Chelli!";
    // Novina Akka
    case 'novina':
    case 'Novina':
    case 'novina akka':
    case 'Novina Akka':
    case 'lovely sis':
    case 'Lovely Sis':
    case 'novina devi':
    case 'Novina Devi':
      return "No matter the distance, our bond remains unbreakable. Sending you all my love and warm wishes on Raksha Bandhan Novina Akka";
    // Sowji Akka
    case 'sowji':
    case 'Sowji':
    case 'sowji akka':
    case 'Sowji Akka':
    case 'sowjanya':
    case 'Sowjanya':
    case 'rohitha':
    case 'Rohitha':
    case 'rohitha sowjanya':
    case 'Rohitha Sowjanya':
    case 'rohitha sowjanya devi':
    case 'Rohitha Sowjanya Devi':
      return "Even though distances separate us, our bond only grows stronger. Wishing you a joyous and blessed Raksha Bandhan, Sowji Akka.";
    // Spandu
    case 'spandu':
    case 'Spandu':
    case 'spandhana':
    case 'Spandhana':
    case 'spandana':
    case 'Spandana':
      return "Arey, No matter where life takes us, you'll always have a special place in my heart. Happy Raksha Bandhan Spandu";
    // Mounika
    case 'mounika':
    case 'Mounika':
    case 'mony':
    case 'Mony':
    case 'mouny':
    case 'Mouny':
    case 'mounika devi':
    case 'Mounika Devi':
    case 'satya':
    case 'devi':
    case 'Devi':
    case 'Satya':
    case 'rayudu mounika':
    case 'Rayudu Mounika':
    case 'pogaru':
    case 'Pogaru':
      return "May this Raksha Bandhan bring us closer together and strengthen our bond of friendship. 'Pogaruuu'";
    // Nissi
    case 'nissi':
    case 'Nissi':
    case 'haveela':
    case 'Haveela':
    case 'geera':
    case 'Geera':
      return "A sister's love is a forever gift. Happy Raksha Bandhan to the most 'Pogaru' bothu sister 🥰! Happy Raksha Bandhan Nissi";
    // Neha
    case 'neha':
    case 'Neha':
    case 'keerthna':
    case 'Keerthna':
    case 'keerthana':
    case 'Keerthana':
      return "With each thread of Rakhi, our bond grows stronger. Wishing you a joyful Raksha Bandhan, Neha.";
    // Sai Snigdha
    case 'Sai':
    case 'SAI':
    case 'sai':
    case 'Snigdha':
    case 'SNIGDHA':
    case 'Sai Snigdha':
    case 'SAI SNIGDHA':
    case 'doctor':
    case 'Doctor':
      return "Arey, Lucky to have you in my life! May our bond grow stronger with each passing day. you'll always have a special place in my heart yaar. Happy Raksha Bandhan Sai 🎉👫🥰";
    //  Pankajam
    case 'shaillu':    
    case 'Shaillu':    
    case 'shailu':    
    case 'Shailu':    
    case 'paki':    
    case 'Paki':    
    case 'paki pankajam':    
    case 'Paki pankajam':    
    case 'Paki Pankajam':    
    case 'pankajam':    
    case 'Pankajam':    
    case 'sailu':    
    case 'Sailu':    
    case 'saillu':    
    case 'Saillu':    
    case 'sailaja':    
    case 'Sailaja':
      return "Arey Saillu, Wishing your life filled with love, laughter, and cherished moments. May our bond remain as colorful and vibrant as the rakhi itself. Happy Raksha Bandhan Pankajam 😜🥰"    
    // Sweety
    case 'Sweety':
    case 'SWEETY':
    case 'sweety':
    case 'SWEETY':
    case 'sweetu':
    case 'SWEETU':
    case 'sweettu':
    case 'SWEETTU':
    case 'hema':
    case 'HEMA':
    case 'hema pravalika':
    case 'HEMA PRAVALIKA':
    case 'hema pravallika':
    case 'HEMA PRAVALLIKA':
    case 'pravalika':
    case 'PRAVALIKA':
    case 'pravallika':
    case 'PRAVALLIKA':
      return "Arey Sweety, our bond is as sweet as candy and as naughty as a secret. Happy Raksha Bandhan Sweety Papa!";
    // Jemi
    case 'jemi':
    case 'Jemi':
    case 'jemi papa':
    case 'Jemi Papa':
    case 'nithya':
    case 'Nithya':
    case 'nithya sri':
    case 'Nithya Sri':
    case 'nithya sri kiran':
    case 'Nithya Sri Kiran':
    case 'sri kiran':
    case 'Sri Kiran':
    case 'sri':
    case 'Sri':
      return "Jemi you may drive each other crazy, but it's the sweetest kind of madness. Here's to our endless teasing and unwavering love dear. Happy Raksha Bandhan Jemi Papa!";
    //  Geetha
      case 'geetha':
    case 'Geetha':
    case 'tejaswini':
    case 'Tejaswini':
    case 'sai tejaswini':
    case 'Sai Tejaswini':
    case 'geetha sai tejaswini':
    case 'Geetha Sai Tejaswini':
      return "Having a sister like you is like having a candy that's both sweet and sour. Cheers to our unique bond on this Rakhi. Happy Raksha Bandhan Geetha!";
      case 'swetha':
    case 'Swetha':
    case 'Swetha A':
    case 'A Swetha':
    case 'swetha a':
    case 'A swetha':
      case 'neelima':
    case 'Neelima':
    case 'Neelu':
    case 'neelu':
    case 'neelima':
    case 'Neelima Chandu':
    case 'Chandu Neelima':
    case 'Neelima Chandrashekar':

      return "Akka this Raksha Bandhan wrap us in love and joy. Your smile makes everything brighter and our connection even stronger. 🤞🥰❤️";
    // Add more cases for other names
    default:
      return "Wishing you a wonderful Raksha Bandhan!";
  }
}

// Preload images function
function preloadImages(imageArray) {
  const imgElements = [];
  for (const imageName of imageArray) {
    const img = new Image();
    img.src = imageName;
    imgElements.push(img);
  }
  return imgElements;
}