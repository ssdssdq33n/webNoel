let main = document.querySelector(".main");
let count = 50;
for (var i = 0; i < 90; i++) {
  let leftSnow = Math.floor(Math.random() * main.clientWidth);
  let topSnow = Math.floor(Math.random() * main.clientHeight);
  let fontsizeSnow = Math.floor(Math.random() * 40);
  let timeSnow = Math.floor(Math.random() * 5 + 3);
  let blurSnow = Math.floor(Math.random() * 10);
  let div = document.createElement("i");
  div.classList.add("snows");
  div.classList.add("bi");
  div.classList.add("bi-arrow-through-heart");
  //   div.innerHTML = '<i class="bi bi-snow2 snows"></i>';
  div.style.left = leftSnow + "px";
  div.style.top = topSnow + "px";
  div.style.fontSize = fontsizeSnow + "px";
  div.style.animationDuration = timeSnow + "s";
  div.style.filter = "blur(" + blurSnow + "px)";
  main.appendChild(div);
}
let giangsinh = document.querySelector(".tong");
let khong = document.querySelector(".khong");
let dongy = document.querySelector(".dongy");
let bao = document.querySelector(".giangsinh");
khong.onclick = function () {
  let leftKhong = Math.floor(Math.random() * giangsinh.clientWidth);
  let topKhong = Math.floor(Math.random() * giangsinh.clientHeight);
  this.style.position = "absolute";
  this.style.left = leftKhong + "px";
  this.style.top = topKhong + "px";
  let audio = document.querySelector(".audio");
  audio.play();
};
dongy.onclick = function () {
  bao.style.display = "none";
  let audio2 = document.querySelector(".audio2");
  audio2.play();
};
