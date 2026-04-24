const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav");
const copyrightFooter = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

const today = new Date();
copyrightFooter.innerHTML = `<span id="currentYear">${today.getFullYear()}</span>`;
lastModified.innerHTML = `<p id="lastModified">Last modification: ${document.lastModified}</span>`;

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
