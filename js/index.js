// ========== front page ==========
// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // ********** fixed navbar **********
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // ********** top link **********
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    console.log(element.offsetTop);

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});

// ========== video ==========
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//   preloader.classList.add("hide-preloader");
// });

// ========== personal ==========

// local reviews data
const personal = [
  {
    id: 1,
    name: "cgv",
    link: "./html/cgv.html",
    date: "작업기간: 30일",
    img: "./images/cgv_sample.png",
    text: "CGV 사이트를 클론하여 웹 작업하였습니다.",
    tech: "사용 기술: html,css",
  },
  {
    id: 2,
    name: "newbalance",
    link: "./html/newbalance.html",
    date: "작업기간: 30일",
    img: "./images/newbalance_sample.png",
    text: "뉴발란스 사이트를 클론하여 웹 작업하였습니다.",
  },
  {
    id: 3,
    name: "dfy",
    link: "./html/dfy.html",
    date: "작업기간: 30일",
    img: "./images/dfy_sample.png",
    text: "DFY 사이트를 클론하여 웹 작업하였습니다.",
  },
  {
    id: 4,
    name: "kakao",
    link: "./html/kakao.html",
    date: "작업기간: 30일",
    img: "./images/kakao_sample.png",
    text: "레퍼런스 사이트를 참고하여 카카오 웹페이지를 리뉴얼하였습니다.",
  },
];
const cooperation = [
  {
    id: 1,
    name: "로봇 관제 시스템",
    link: "./cgv.html",
    date: "프로젝트 수행 기간: 22.07 ~ 22.10",
    img: "./cooperation/robot/로봇 운영_상세_다학제로봇 - 화상통화 – 3.png",
    text: "로봇제어 프로그램 프로젝트.",
    tech: "사용 기술: html,css",
  },
  {
    id: 2,
    name: "비앤빛 vision",
    link: "./newbalance.html",
    date: "프로젝트 수행 기간: 22.07 ~ 22.10",
    img: "./cooperation/vit/vision_11.png",
    text: "사용자에게 검사한 내용을 스크린 화면으로 제공하는 프로젝트.",
  },
];

const personalContainer = document.getElementById("personal");
const cooperationContainer = document.getElementById("cooperation");

function showView(cont, arr) {
  // select items
  const link = cont.querySelector(".thumb-link");
  const img = cont.querySelector(".thumb-img");
  const name = cont.querySelector(".name");
  const date = cont.querySelector(".date");
  const info = cont.querySelector(".info");

  const prevBtn = cont.querySelector(".prev-btn");
  const nextBtn = cont.querySelector(".next-btn");
  const randomBtn = cont.querySelector(".random-btn");

  // set starting item
  let currentItem = 0;

  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    arrayItem();
  });

  // show person based on item
  function arrayItem() {
    const item = arr[currentItem];
    link.href = item.link;
    img.src = item.img;
    name.textContent = item.name;
    date.textContent = item.date;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > arr.length - 1) {
      currentItem = 0;
    }
    arrayItem();
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = arr.length - 1;
    }
    arrayItem();
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * arr.length);
    arrayItem();
  });
}

showView(personalContainer, personal);
showView(cooperationContainer, cooperation);
