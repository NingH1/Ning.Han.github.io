//Name: Ning Han
//File: Silly story generator.html
//Date: 26 March 2024
//Description:  creating a fun app that generates random silly stories

document.addEventListener('DOMContentLoaded', function() {
    // Declare an array of image filenames
    const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
  
    // Declare an object listing the alternative text for each image
    const altTexts = {
      'pic1.jpg': 'Closeup of a blue human eye',
      'pic2.jpg': 'Alternative text for second image',
      'pic3.jpg': 'Alternative text for third image',
      'pic4.jpg': 'Alternative text for fourth image',
      'pic5.jpg': 'Alternative text for fifth image'
    };
  
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');
    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');
  
    // Loop through the array of filenames and insert images into thumb-bar
    for (let i = 0; i < imageFiles.length; i++) {
      const newImage = document.createElement('img');
      newImage.setAttribute('src', 'images/' + imageFiles[i]);
      newImage.setAttribute('alt', altTexts[imageFiles[i]]);
      newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.getAttribute('src'));
        displayedImage.setAttribute('alt', this.getAttribute('alt'));
      });
      thumbBar.appendChild(newImage);
    }
  
    // Add event listener to darken/lighten button
    btn.addEventListener('click', function() {
      const btnClass = btn.getAttribute('class');
      if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      }
    });
  });
  
