  const displayedImage = document.querySelector('.displayed-img');
  const thumbBar = document.querySelector('.thumb-bar');
  
  const btn = document.querySelector('button');
  const overlay = document.querySelector('.overlay');
  
  /* Declaring the array of image filenames */
  
  const imageFilename = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
  
  /* Declaring the alternative text for each image file */
  
  const alternativeTexts = {
      'pic1.jpg': 'Closeup of a blue human eye',
      'pic2.jpg': 'Beautiful art',
      'pic3.jpg': 'Attractive flowers',
      'pic4.jpg': 'Painting showing the egyptians',
      'pic5.jpg': 'Butterfly on leaf',
  };
  
  /* Looping through images */
  
  imageFilename.forEach(filename => {
      const newImage = document.createElement('img');
      newImage.setAttribute('src', `images/${filename}`);
      newImage.setAttribute('alt', alternativeTexts[filename]);
      newImage.style.width = '20%';
      newImage.addEventListener('click', () =>{
          document.querySelector('.displayed-img').setAttribute('src', `images/${filename}`)
          document.querySelector('.displayed-img').setAttribute('alt', alternativeTexts[filename]);
      })   
      thumbBar.appendChild(newImage); 
  });
  
  /* Wiring up the Darken/Lighten button */
  
  btn.addEventListener('click', () => {
      if (btn.getAttribute('class') === 'dark'){
          btn.setAttribute('class', 'light');
          btn.textContent = 'Lighten';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      } else {
          btn.setAttribute('class', 'dark');
          btn.textContent = 'Darken';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  
      }
  });