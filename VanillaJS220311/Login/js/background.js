const images = [
  "0.jpg",
  "1.png",
  "2.png",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

//img태그 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
//이제 body에 html이냐img태그추가~
document.body.appendChild(bgImage);
