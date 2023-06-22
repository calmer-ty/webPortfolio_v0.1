function itemCreate01(target, number) {
  for (let i = 0; i < number; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const img = document.createElement("img");
    target.appendChild(li) * number;
    li.appendChild(a);
    a.appendChild(img);
    a.appendChild(h5);
    a.appendChild(p);
    a.setAttribute("href", "#");
    img.setAttribute("src", "#");
  }
}
function itemProperties01(target, arr) {
  const itemLi = target.querySelectorAll("li");
  const itemImg = target.querySelectorAll("img");
  const itemP = target.querySelectorAll("p");
  const itemH5 = target.querySelectorAll("h5");

  for (let i = 0; i < itemLi.length; i++) {
    itemH5[i].textContent = arr[i].title;
    itemP[i].textContent = arr[i].text;
    itemImg[i].src = arr[i].img;
  }
}
function itemPosition(target) {
  target.forEach(function (item, index) {
    if (window.innerWidth > 800) {
      item.style.left = `${index * 33.3}%`;
    } else {
      item.style.left = `${index * 100}%`;
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth > 800) {
        item.style.left = `${index * 33.3}%`;
      } else {
        item.style.left = `${index * 100}%`;
      }
    });
  });
}
function slideEvent(cont, target) {
  const nextBtn = cont.querySelector(".nextBtn");
  const prevBtn = cont.querySelector(".prevBtn");

  // carousel - item transform move
  function carousel() {
    // working with sectionItem
    if (counter === target.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = target.length - 1;
    }
    //   working with buttons
    // if (counter < sectionItem.length - 1) {
    //   nextBtn.style.display = "block";
    // } else {
    //   nextBtn.style.display = "none";
    // }
    // if (counter > 0) {
    //   prevBtn.style.display = "block";
    // } else {
    //   prevBtn.style.display = "none";
    // }
    target.forEach(function (item) {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  //   prevBtn.style.display = "none";
  // item Btn Count
  let counter = 0;
  nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
    console.log(counter);
  });
  prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
    console.log(counter);
  });
}

function technologyEvent() {
  const sectionTechnology = document.getElementById("technology");
  const itemContainer = sectionTechnology.querySelector(".item-container");
  const technology = [
    {
      id: 1,
      title: "오픈소스를 요리하다, Olive Platform",
      img: "../images/kakao/tech_item_1.png",
      text: "카카오 서비스에서 사용하는 오픈소스를 올바르게 사용하고 관리하기 위해 개발되었습니다.",
    },
    {
      id: 2,
      title: "AI+일상=Tech&",
      img: "../images/kakao/tech_item_2.png",
      text: "카카오엔터프라이즈가 AI 기술을 개발하고 발전해나가는 과정에서 바라본 세상의 모든 것과 크루들의 생생한 업무 라이프를 전합니다.",
    },
    {
      id: 3,
      title: "사람과 기술이 함께, 카카오테크",
      img: "../images/kakao/tech_item_3.png",
      text: "카카오테크가 준비한 일상을 바꾸는 기술들을 직접 경험해보세요. 사람과 사람, 사람과 기술을 한 층 더 가깝게 연결함으로써 어제보다 더 나은 세상을 함께 만들어 갈 분들을 찾습니다.",
    },
    {
      id: 4,
      title: "꿈꾸던 세상을 현실로, 카카오디벨로퍼스",
      img: "../images/kakao/tech_item_4.png",
      text: "개발자들이 각자의 방식으로 카카오 서비스와 연계하여 더 나은 세상을 꿈꾸고, 창조하고, 공유할 수 있도록 다양한 오픈 API와 개발 도구를 지원합니다.",
    },
  ];
  itemCreate01(itemContainer, 4);
  itemProperties01(itemContainer, technology);
}
function serviceEvent() {
  const sectionService = document.getElementById("service");
  const itemContainer = sectionService.querySelector(".item-container");
  // service text arr
  const communication = [
    {
      id: 1,
      title: "나를 가장 잘 표현하는 곳, 티스토리",
      img: "../images/kakao/communication_item_1.jpg",
      text: "블로그, 포트폴리오, 웹사이트까지 티스토리에서 나를 표현해보세요.",
    },
    {
      id: 2,
      title: "나를 위한 다음앱",
      img: "../images/kakao/communication_item_2.jpg",
      text: "실시간 맞춤 뉴스, 다양한 관심사 콘텐츠, 영상을 보며 웹서핑도 즐기는 플레이어까지 스마트한 모바일 라이프를 즐겨보세요.",
    },
    {
      id: 3,
      title: "글이 작품이 되는 공간, 브런치",
      img: "../images/kakao/communication_item_3.jpg",
      text: "좋은 글을 쓰고 싶은 모든 이들을 위해 준비했습니다. 글이 작품이 되는 공간, 브런치를 만나 보세요.",
    },
    {
      id: 4,
      title: "나의 이야기가 빛나는 공간, 카카오스토리",
      img: "../images/kakao/communication_item_4.jpg",
      text: "나의 일상은 가볍게 기록하고 알고 싶은 소식은 한 번에 받아보세요.",
    },
    {
      id: 5,
      title: "모든 이야기의 시작, Daum 카페",
      img: "../images/kakao/communication_item_5.jpg",
      text: "지금, 우리들의 이야기가 궁금하다면 Daum 카페와 함께 하세요.",
    },
    {
      id: 6,
      title: "함께 만드는 더 좋은 세상, 카카오같이가치",
      img: "../images/kakao/communication_item_6.jpg",
      text: "누구나 공익프로젝트를 제안하고 참여할 수 있는 같이기부, 더 좋은 세상을 꿈꾼다면 지금 함께해요.",
    },
  ];
  const life = [
    {
      id: 1,
      title: "life",
      img: "../images/kakao/communication_item_1.jpg",
      text: "블로그, 포트폴리오, 웹사이트까지 티스토리에서 나를 표현해보세요.",
    },
    {
      id: 2,
      title: "life",
      img: "../images/kakao/communication_item_2.jpg",
      text: "실시간 맞춤 뉴스, 다양한 관심사 콘텐츠, 영상을 보며 웹서핑도 즐기는 플레이어까지 스마트한 모바일 라이프를 즐겨보세요.",
    },
    {
      id: 3,
      title: "life",
      img: "../images/kakao/communication_item_3.jpg",
      text: "좋은 글을 쓰고 싶은 모든 이들을 위해 준비했습니다. 글이 작품이 되는 공간, 브런치를 만나 보세요.",
    },
    {
      id: 4,
      title: "나를 가장 잘 표현하는 곳, 티스토리",
      img: "../images/kakao/life_item_1.jpg",
      text: "블로그, 포트폴리오, 웹사이트까지 티스토리에서 나를 표현해 보세요.",
    },
    {
      id: 5,
      title: "life",
      img: "./images/cgv_sample.png",
      text: "CGV 사이트를 클론하여 웹 작업하였습니다.",
    },
    {
      id: 6,
      title: "life",
      img: "./images/cgv_sample.png",
      text: "CGV 사이트를 클론하여 웹 작업하였습니다.",
    },
  ];
  const commerce = [
    {
      id: 1,
      title: "commerce",
      img: "../images/kakao/communication_item_1.jpg",
      text: "블로그, 포트폴리오, 웹사이트까지 티스토리에서 나를 표현해보세요.",
    },
    {
      id: 2,
      title: "commerce",
      img: "../images/kakao/communication_item_2.jpg",
      text: "실시간 맞춤 뉴스, 다양한 관심사 콘텐츠, 영상을 보며 웹서핑도 즐기는 플레이어까지 스마트한 모바일 라이프를 즐겨보세요.",
    },
    {
      id: 3,
      title: "commerce",
      img: "../images/kakao/communication_item_3.jpg",
      text: "좋은 글을 쓰고 싶은 모든 이들을 위해 준비했습니다. 글이 작품이 되는 공간, 브런치를 만나 보세요.",
    },
    {
      id: 4,
      title: "commerce",
      img: "./images/cgv_sample.png",
      text: "CGV 사이트를 클론하여 웹 작업하였습니다.",
    },
    {
      id: 5,
      title: "commerce",
      img: "./images/cgv_sample.png",
      text: "CGV 사이트를 클론하여 웹 작업하였습니다.",
    },
    {
      id: 6,
      title: "commerce",
      img: "./images/cgv_sample.png",
      text: "CGV 사이트를 클론하여 웹 작업하였습니다.",
    },
  ];
  itemCreate01(itemContainer, 6);

  // tab Event
  const itemLi = itemContainer.querySelectorAll("li");
  const itemImg = itemContainer.querySelectorAll("img");
  const itemP = itemContainer.querySelectorAll("p");
  const itemH5 = itemContainer.querySelectorAll("h5");

  const tabBtn = sectionService.querySelectorAll(".tab-btn button");

  for (let i = 0; i < itemLi.length; i++) {
    itemH5[i].textContent = communication[i].title;
    itemP[i].textContent = communication[i].text;
    itemImg[i].src = communication[i].img;

    tabBtn[0].addEventListener("click", function () {
      itemH5[i].textContent = communication[i].title;
      itemP[i].textContent = communication[i].text;
      itemImg[i].src = communication[i].img;
    });
    tabBtn[1].addEventListener("click", function () {
      itemH5[i].textContent = life[i].title;
      itemP[i].textContent = life[i].text;
      itemImg[i].src = life[i].img;
    });
    tabBtn[2].addEventListener("click", function () {
      itemH5[i].textContent = commerce[i].title;
      itemP[i].textContent = commerce[i].text;
      itemImg[i].src = commerce[i].img;
    });
  }

  itemPosition(itemLi);
  slideEvent(sectionService, itemLi);
}

function socialEvent() {
  const sectionSocial = document.getElementById("social");
  const itemContainer = sectionSocial.querySelector(".item-container");
  // service text arr
  const social = [
    {
      id: 1,
      title: "혁신가 레이블, 카카오임팩트 펠로우십",
      img: "../images/kakao/social_item_1.png",
      text: "더 나은 세상을 기다리지 않는 사람들 카카오임팩트 펠로우십",
    },
    {
      id: 2,
      title: "청소년 디지털 시민 교육, 사이좋은 디지털 세상",
      img: "../images/kakao/social_item_2.png",
      text: "디지털 기기로 세상을 배우는 청소년들이 안전한 디지털 환경에서 건강한 생각을 키우며 더 나은 시민으로 성장할 수 있도록 필요한 가치를 교육합니다.",
    },
    {
      id: 3,
      title: "꿈을 향해 달리는 Kakao 트랙",
      img: "../images/kakao/social_item_3.png",
      text: "디지털 기기로 세상을 배우는 청소년들이 안전한 디지털 환경에서 건강한 생각을 키우며 더 나은 시민으로 성장할 수 있도록 필요한 가치를 교육합니다.",
    },
    {
      id: 4,
      title: "당신에게 'IT'란? Show me the IT",
      img: "../images/kakao/social_item_4.png",
      text: "Information Technology 의 약자가 아닌 It 인칭대명사로 먼저 읽히는 중.고등학생들을 위한 카카오 진로 체험 프로그램",
    },
    {
      id: 5,
      title: "제주 지역 스타트업 엑셀러레이션 - 발굴,보육,투자",
      img: "../images/kakao/social_item_5.png",
      text: "2015년부터 2020년까지 제주창조경제혁신센터의 창업교육 프로그램에 9,677명이 참여했으며, 150여개의 보육기업들이 총 691억원의 투자를 유치했습니다.",
    },
    {
      id: 6,
      title: "세상을 선하게 바꾸는 실천, 다가치프로젝트",
      img: "../images/kakao/social_item_6.png",
      text: "먼저 기부하고, 실천하며 세상과 함께 하는 방법을 고민합니다.",
    },
  ];
  itemCreate01(itemContainer, 6);
  const itemLi = itemContainer.querySelectorAll("li");
  itemProperties01(itemContainer, social);
  itemPosition(itemLi);
  slideEvent(sectionSocial, itemLi);
}

function init() {
  technologyEvent();
  serviceEvent();
  socialEvent();
}
init();
