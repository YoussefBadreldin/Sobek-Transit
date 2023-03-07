// Example function that changes the background color of the body
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Example event listener that calls the above function when a button is clicked
  var button = document.querySelector('button');
  button.addEventListener('click', function() {
    changeBackgroundColor('red');
  });




  