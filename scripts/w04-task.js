/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Samuel Dee Gardner",
    photo: "images/me2.png",
    favoriteFoods: ["Apple Pie", "Chicken Wings", "Tacos", "Pizza", "Triscuits"],
    hobbies: ["Film Photography", "Drawing", "Photoshop", "Writing", "Coding"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {place: "Salmon Idaho", length: "18 years"},
    {place: "Santa Rosa CA (and surrounding areas)", length: "2 years"},
    {place: "Rexburg Idaho", length: "3 years"},
    );

/* DOM Manipulation - Output */
document.addEventListener("DOMContentLoaded", function() {

/* Name */
document.querySelector("#name").innerText = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    dt.textContent = placeLived.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;
    document.querySelector("#places-lived").appendChild(dd);
});
});