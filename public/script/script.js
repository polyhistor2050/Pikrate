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
  