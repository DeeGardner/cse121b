/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Samuel Dee Gardner";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me2.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
console.log(yearElement);
imageElement.src = profilePicture;
imageElement.setAttribute(`alt`, `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFood = ["Bagels", "Hamburgers", "Bacon", "Cheetos"];
foodElement.innerHTML = favFood;
let favFoodItem = "Apple Pie";
favFood.push(favFoodItem);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift(favFood);
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop(favFood);
foodElement.innerHTML += `<br>${favFood}`;