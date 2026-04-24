const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  /* The Toggle Logic:
     .classList.toggle() checks if the class "open" exists on the element.
     - If it IS there: it removes it (closing the menu).
     - If it IS NOT there: it adds it (opening the menu).
  */
  // This opens/closes the actual list of links
  navigation.classList.toggle("open");
  // This tells the button it is open, so the CSS can change ☰ to x
  hamButton.classList.toggle("open");
});
