//Name: Ning Han
//File: Silly story generator.html
//Date: 26 March 2024
//Description:  creating a fun app that generates random silly stories

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
