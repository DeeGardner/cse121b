const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const NewSect = document.createElement("section");
let h2e;
if (NewSect) {
    h2e = document.createElement("h2");
}

h2e.textContent = "CSE 121b";
document.body.appendChild(h2e);