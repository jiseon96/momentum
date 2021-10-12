const imgs = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
