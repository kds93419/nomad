const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);

const body = document.querySelector("body");

const image = new Image();
  image.src = bgImage.src; // 가져올 image경로 지정
  image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
  body.appendChild(image); // body의 자식에 image추가