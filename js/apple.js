// import navMenu from "./apple_data";

window.onload = function () {
  const navMenu = [
    { name: "스토어" },
    { name: "Mac" },
    { name: "iPad" },
    { name: "iPhone" },
    { name: "Watch" },
    { name: "AirPods" },
    { name: "TV 및 홈" },
    { name: "엔터테인먼트" },
    { name: "액세서리" },
    { name: "고객지원" },
  ];
  const navUl = document.querySelector("#nav > ul");
  let displayMenu = navMenu.map(function (item) {
    return `<li class="item"> ${item.name} </li>`;
  });
  displayMenu = displayMenu.join("");
  navUl.innerHTML = displayMenu;
};
