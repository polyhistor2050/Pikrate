function updateRandomImage(category) {
  var data = 'https://api-ninjas.com';
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
    headers: { 'X-Api-Key': 'aNHSPNm/gccEFOM57PlfFA==WqSeQDC77DBYZh2i', 'Accept': 'image/jpg'},
    responseType: 'arraybuffer', // Set the response type to arraybuffer to get binary data
    success: function(result) {
      // Check if the response contains a valid image binary data
      if (result && result.image) {
        const imageUrl = convertBinaryToJpgUrl(result.image);
        // Update the src attribute of the left-picture and right-picture classes
        $('.left-picture').attr('src', imageUrl);
        $('.right-picture').attr('src', imageUrl);
      } else {
        console.error('Error: Invalid image data');
      }
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
}

function convertBinaryToJpgUrl(binaryData) {
  const blob = new Blob([binaryData], { type: 'image/jpeg' });
  const url = URL.createObjectURL(blob);
  return url;
}
 
 // Call the function to update the images with a random image in the "nature" category
 updateRandomImage('city');

function createStarRatings(leftStarsSelector, rightStarsSelector) {
    const leftStars = document.querySelectorAll(leftStarsSelector);
    const rightStars = document.querySelectorAll(rightStarsSelector);
  
    const createStarRating = (container, stars) => {
      stars.forEach((star, index) => {
        star.value = index + 1;
        star.addEventListener("click", () => {
          stars.forEach((s, i) => s.classList.toggle("orange", i < star.value));
          console.log(`${container.classList[0]} item rating:`, star.value);
        });
      });
      container.append(...stars);
    };
  
    createStarRating(document.querySelector(".leftStars"), leftStars);
    createStarRating(document.querySelector(".rightStars"), rightStars);
  }
  
  // Example usage: create star ratings for elements with class "leftStar" and "rightStar"
  createStarRatings(".leftStar", ".rightStar");

  
 