// get date to work with
const date = new Date();
const year = date.getFullYear();
const hour = date.getHours();


// copyright year
const copyright = document.getElementById('year');
copyright.innerHTML = year;


// check time for CSS dark/light mode
const colorMode = document.getElementById('color-mode');
if(hour <= 8 || hour >= 20) console.log('Dark Mode');
else console.log('Light Mode');