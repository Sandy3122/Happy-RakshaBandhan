document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const selectedName = urlParams.get('name');

  if (selectedName) {
    const imageMap = {
      'sona': 'sisters/sona.jpg',
      'chinni': 'sisters/sona.jpg',
      'chinni akka': 'sisters/sona.jpg',
      'akka': 'sisters/sona.jpg',
      'meow': 'sisters/sona.jpg',
      'sona amma': 'sisters/sona.jpg',
      'amma': 'sisters/sona.jpg',
      'sonaamma': 'sisters/sona.jpg',
      'taruni': 'sisters/sona.jpg',
      'tharuni': 'sisters/sona.jpg',
      'mata taruni': 'sisters/sona.jpg',
      'matataruni': 'sisters/sona.jpg',
      'lakshmi': 'sisters/sona.jpg',
      'laxmi': 'sisters/sona.jpg',
      'chelli': 'sisters/chelli.jpg',
      'geethu': 'sisters/chelli.jpg',
      'geethika': 'sisters/chelli.jpg',
      'madhuri': 'sisters/chelli.jpg',
      'geethika lakshmi sai madhuri': 'sisters/chelli.jpg',
      'geethikalakshmisaimadhuri': 'sisters/chelli.jpg',
      'sai': 'sisters/sai.jpg',
      'Snigdha': 'sisters/sai.jpg',
      'Sai Snigdha': 'sisters/sai.jpg',
      'Doctor': 'sisters/sai.jpg',
      'doctor': 'sisters/sai.jpg',
      'novina': 'sisters/novina.jpg',
      'novina akka': 'sisters/novina.jpg',
      'lovely sis': 'sisters/novina.jpg',
      'novina devi': 'sisters/novina.jpg',
      'sowji': 'sisters/sowji.jpg',
      'sowjanya': 'sisters/sowji.jpg',
      'sowji akka': 'sisters/sowji.jpg',
      'rohitha': 'sisters/sowji.jpg',
      'rohitha sowjanya': 'sisters/sowji.jpg',
      'rohitha sowjanya devi': 'sisters/sowji.jpg',
      'sowji akka': 'sisters/sowji.jpg',
      'spandu': 'sisters/spandu.jpg',
      'spandana': 'sisters/spandu.jpg',
      'spandhana': 'sisters/spandu.jpg',
      'shaillu': 'sisters/shaillu.jpg',
      'shailu': 'sisters/shaillu.jpg',
      'paki': 'sisters/shaillu.jpg',
      'paki pankajam': 'sisters/shaillu.jpg',
      'pankajam': 'sisters/shaillu.jpg',
      'saillu': 'sisters/shaillu.jpg',
      'sailu': 'sisters/shaillu.jpg',
      'sailaja': 'sisters/shaillu.jpg',
      'mony': 'sisters/mounika.jpg',
      'mouny': 'sisters/mounika.jpg',
      'mounika': 'sisters/mounika.jpg',
      'mounika devi': 'sisters/mounika.jpg',
      'satya': 'sisters/mounika.jpg',
      'rayudu mounika': 'sisters/mounika.jpg',
      'sweety': 'sisters/sweety.jpg',
      'sweetu': 'sisters/sweety.jpg',
      'sweettu': 'sisters/sweety.jpg',
      'hema': 'sisters/sweety.jpg',
      'hema pravalika': 'sisters/sweety.jpg',
      'hema pravallika': 'sisters/sweety.jpg',
      'pravalika': 'sisters/sweety.jpg',
      'pravallika': 'sisters/sweety.jpg',
      'jemi': 'sisters/jemi.jpg',
      'jemi papa': 'sisters/jemi.jpg',
      'nithya': 'sisters/jemi.jpg',
      'nithya sri': 'sisters/jemi.jpg',
      'nithya sri kiran': 'sisters/jemi.jpg',
      'sri kiran': 'sisters/jemi.jpg',
      'sri': 'sisters/jemi.jpg',
      'geetha': 'sisters/geetha.jpg',
      'sai tejaswini': 'sisters/geetha.jpg',
      'tejaswini': 'sisters/geetha.jpg',
      'nissi': 'sisters/nissi.jpg',
      'haveela': 'sisters/nissi.jpg',
      'pogaru': 'sisters/nissi.jpg',
      'geera': 'sisters/nissi.jpg',
      'neha': 'sisters/neha.jpg',
      'keerthna': 'sisters/neha.jpg',
      'keerthana': 'sisters/neha.jpg',

    };

    const greetingMessage = getGreetingMessage(selectedName.toLowerCase());

    if (imageMap[selectedName.toLowerCase()]) {
      const imageName = imageMap[selectedName.toLowerCase()];

      const customHeading = document.getElementById("customHeading");
      customHeading.textContent = `Happy Raksha Bandhan, ${selectedName}!`;

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
    } else {
      alert("Name not found or image not available.");
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
    case 'Satya':
    case 'rayudu mounika':
    case 'Rayudu Mounika':
      return "May this Raksha Bandhan bring us closer together and strengthen our bond of friendship. 'Pogaruuu'";
    // Nissi
    case 'nissi':
    case 'Nissi':
    case 'haveela':
    case 'Haveela':
    case 'pogaru':
    case 'Pogaru':
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
      return "Arey Saillu, Wishing your life filled with love, laughter, and cherished moments. May our bond remain as colorful and vibrant as the rakhi itself. Happy Raksha Bandhan Pankajam 😜🥰"    
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