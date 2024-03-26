//Name: Ning Han
//File: Silly story generator.html
//Date: 26 March 2024
//Description:  creating a fun app that generates random silly stories

const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Alternative text for second image',
  'pic3.jpg': 'Alternative text for third image',
  'pic4.jpg': 'Alternative text for fourth image',
  'pic5.jpg': 'Alternative text for fifth image'
};
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
  