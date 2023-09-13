// 메인 베너3 이미지 마우스 오버 선언
const changeImg = document.getElementById("image4");
const vertical1 = document.getElementById("vertical1");
const horizontal1 = document.getElementById("horizontal1");
const vertical2 = document.getElementById("vertical2");
const horizontal2 = document.getElementById("horizontal2");

// 이미지 아이디 선언
const innerImg1 = document.getElementById("innerImg1");
const innerImg2 = document.getElementById("innerImg2");
const innerImg3 = document.getElementById("innerImg3");
const innerImg4 = document.getElementById("innerImg4");

// 이미지 URL
const imgURL1On = "assets/img/main-banner3/main_banner3_top_top_on.png";
const imgURL2On = "assets/img/main-banner3/main_banner3_top_on.png";
const imgURL1Off = "assets/img/main-banner3/main_banner3_top_top_off.png";
const imgURL2Off = "assets/img/main-banner3/main_banner3_top_off.png";
const imgURL3On = "assets/img/main-banner3/main_banner3_Bottom_on.png";
const imgURL3Off = "assets/img/main-banner3/main_banner3_Bottom_off.png";
const imgURL4On = "assets/img/main-banner3/main_banner3_Bottom_Bottom_on.png";
const imgURL4Off = "assets/img/main-banner3/main_banner3_Bottom_Bottom_off.png";

// 메인 베너 선언
const mainBanner1 = document.getElementById("mainInnerBanner1");
const mainBanner2 = document.getElementById("mainInnerBanner2");
const mainBanner3 = document.getElementById("mainInnerBanner3");

// 메인 베너 화살표 Div 선언
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// 메인 베너 Div 체크 선언
const checkDivIn1 = document.getElementById("checkDivIn1");
const checkDivIn2 = document.getElementById("checkDivIn2");
const checkDivIn3 = document.getElementById("checkDivIn3");

// div가 10초마다 넘어감
setInterval(function () {
  if (mainBanner1.style.opacity !== "0") {
    bannerOpacityChange(mainBanner2, mainBanner1, mainBanner3);
    bannerBackgroundColorChange(checkDivIn2, checkDivIn1, checkDivIn3);
  } else if (mainBanner2.style.opacity !== "0") {
    bannerOpacityChange(mainBanner3, mainBanner1, mainBanner2);
    bannerBackgroundColorChange(checkDivIn3, checkDivIn1, checkDivIn2);
  } else if (mainBanner3.style.opacity !== "0") {
    bannerOpacityChange(mainBanner1, mainBanner3, mainBanner2);
    bannerBackgroundColorChange(checkDivIn1, checkDivIn3, checkDivIn2);
  }
}, 10000);

// 메인 베너 화살표 클릭 이벤트
arrowLeft.addEventListener("click", (event) => {
  if (mainBanner1.style.opacity !== "0") {
    bannerOpacityChange(mainBanner3, mainBanner2, mainBanner1);
    bannerBackgroundColorChange(checkDivIn3, checkDivIn1, checkDivIn2);
  } else if (mainBanner3.style.opacity !== "0") {
    bannerOpacityChange(mainBanner2, mainBanner1, mainBanner3);
    bannerBackgroundColorChange(checkDivIn2, checkDivIn1, checkDivIn3);
  } else if (mainBanner2.style.opacity !== "0") {
    bannerOpacityChange(mainBanner1, mainBanner2, mainBanner3);
    bannerBackgroundColorChange(checkDivIn1, checkDivIn2, checkDivIn2);
  }
});

arrowRight.addEventListener("click", (event) => {
  if (mainBanner1.style.opacity !== "0") {
    bannerOpacityChange(mainBanner2, mainBanner1, mainBanner3);
    bannerBackgroundColorChange(checkDivIn2, checkDivIn1, checkDivIn3);
  } else if (mainBanner2.style.opacity !== "0") {
    bannerOpacityChange(mainBanner3, mainBanner2, mainBanner1);
    bannerBackgroundColorChange(checkDivIn3, checkDivIn1, checkDivIn2);
  } else if (mainBanner3.style.opacity !== "0") {
    bannerOpacityChange(mainBanner1, mainBanner2, mainBanner3);
    bannerBackgroundColorChange(checkDivIn1, checkDivIn3, checkDivIn2);
  }
});
// 메인 베너 화살표 클릭 이벤트 끝

// 메인 베너 checkDiv 클릭 이벤트
checkDivIn1.addEventListener("click", (event) => {
  bannerOpacityChange(mainBanner1, mainBanner2, mainBanner3);
  bannerBackgroundColorChange(checkDivIn1, checkDivIn2, checkDivIn3);
});
checkDivIn2.addEventListener("click", (event) => {
  bannerOpacityChange(mainBanner2, mainBanner3, mainBanner1);
  bannerBackgroundColorChange(checkDivIn2, checkDivIn1, checkDivIn3);
});
checkDivIn3.addEventListener("click", (event) => {
  bannerOpacityChange(mainBanner3, mainBanner1, mainBanner2);
  bannerBackgroundColorChange(checkDivIn3, checkDivIn1, checkDivIn2);
});
// 메인 베너 checkDiv 클릭 이벤트 끝

// 메인 베너3 이미지 마우스 오버 효과
vertical1.addEventListener("mouseover", (event) => {
  innerImg1.src = imgURL1On;
  innerImg2.src = imgURL2On;
});

horizontal1.addEventListener("mouseover", (event) => {
  innerImg1.src = imgURL1On;
  innerImg2.src = imgURL2On;
});

vertical1.addEventListener("mouseout", (event) => {
  innerImg1.src = imgURL1Off;
  innerImg2.src = imgURL2Off;
});

horizontal1.addEventListener("mouseout", (event) => {
  innerImg1.src = imgURL1Off;
  innerImg2.src = imgURL2Off;
});

vertical2.addEventListener("mouseover", (event) => {
  innerImg1.src = imgURL1On;
  innerImg3.src = imgURL3On;
});

horizontal2.addEventListener("mouseover", (event) => {
  innerImg1.src = imgURL1On;
  innerImg3.src = imgURL3On;
});

vertical2.addEventListener("mouseout", (event) => {
  innerImg1.src = imgURL1Off;
  innerImg3.src = imgURL3Off;
});

horizontal2.addEventListener("mouseout", (event) => {
  innerImg1.src = imgURL1Off;
  innerImg3.src = imgURL3Off;
});

changeImg.addEventListener("mouseover", (event) => {
  innerImg1.src = imgURL1On;
  innerImg4.src = imgURL4On;
});

changeImg.addEventListener("mouseout", (event) => {
  innerImg1.src = imgURL1Off;
  innerImg4.src = imgURL4Off;
});

function imgTranstion(event, event2) {
  event.style.transtion = "1s";
  event2.style.transtion = "1s";
}
// 메인 베너3 이미지 마우스 오버 효과 끝

// 메인 베너 opacity change
function bannerOpacityChange(e1, e2, e3) {
  e1.style.opacity = "1";
  e2.style.opacity = "0";
  e3.style.opacity = "0";
}

// 메인 베너 background color change
function bannerBackgroundColorChange(e1, e2, e3) {
  e1.style.backgroundColor = "#03c3fe";
  e2.style.backgroundColor = "#aaa";
  e3.style.backgroundColor = "#aaa";
}
