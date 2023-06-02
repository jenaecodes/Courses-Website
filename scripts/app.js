document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('myButton');
    let image = document.getElementById('myImage');
    let defaultImage = 'images/coffee.jpg';
    let newImage = 'images/courses.jpg';

    button.addEventListener('click', function() {
      if (image.src.includes(defaultImage)) {
        image.src = newImage;
      } else {
        image.src = defaultImage;
      }
    });
  });