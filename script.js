// document.addEventListener("DOMContentLoaded", function () {
//   var banner = document.getElementById("banner");

//   var images = [
//     {
//       path: "images/homepage-3-bg.jpg",
      
//     },
//     {
//       path: "images/homepage-3-2-bg.jpg",
     
//     },

//     // Add more images with the same animation class as needed
//   ];
//   var currentIndex = 0;

//   function changeBackground() {
//     var currentImage = images[currentIndex];

//     setTimeout(function () {
//       banner.style.backgroundImage = "url('" + currentImage.path + "')";
//     }, 1000); // Adjust the timeout to match the transition duration
//     currentIndex = (currentIndex + 1) % images.length;
//   }

//   // Initial call
//   changeBackground();

//   setInterval(changeBackground, 5000);
// });

document.addEventListener("DOMContentLoaded", function () {
  var banner = document.getElementById("banner");

  var images = [
    {
      path: "images/homepage-3-bg.jpg",
    },
    {
      path: "images/homepage-3-2-bg.jpg",
    },
    // Add more images with the same structure as needed
  ];

  var currentIndex = 0;

  function changeBackground() {
    var currentImage = images[currentIndex];

    // Set the background image immediately
    banner.style.backgroundImage = "url('" + currentImage.path + "')";

    // Increment the index for the next image, and loop to the beginning if needed
    currentIndex = (currentIndex + 1) % images.length;

    // Apply the Ken Burns effect using the kenBurns class
    banner.classList.add("kenBurns");

    // Remove the kenBurns class after a short delay (adjust as needed)
    setTimeout(function () {
      banner.classList.remove("kenBurns");
    }, 100); // Adjust the timeout to match the animation duration
  }

  // Initial call
  changeBackground();

  // Set an interval to change the background every 5000 milliseconds (5 seconds)
  setInterval(changeBackground, 6000);
});
