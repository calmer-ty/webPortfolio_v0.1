const sectionTechnology = document.getElementById("technology");
const sectionService = document.getElementById("service");
const sectionSocial = document.getElementById("social");
// item arr
const arrTech = [
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
const arrService01 = [
  {
    id: 1,
    title: "사람과 세상을 향한 모든 연결의 시작, 카카오톡",
    img: "../images/kakao/kakao_item_1.jpg",
    text: "사람과 세상, 그 이상을 연결하는 카카오톡 전 우주 통신규약을 꿈꾸는 대표 메신저 언제 어디서나 간편하게 실시간 무료로 즐겨보세요.",
  },
  {
    id: 2,
    title: "더 편한 모바일 생활의 시작, 카카오톡 채널",
    img: "../images/kakao/kakao_item_2.jpg",
    text: "친구에게만 제공되는 정보와 혜택은 물론 간편한 가입부터 주문, 결제, 예약, 상담까지 필요한 모든 것을 카카오톡 채널 하나로 해결하세요.",
  },
  {
    id: 3,
    title: "우리들의 새로운 언어, 카카오 이모티콘!",
    img: "../images/kakao/kakao_item_3.jpg",
    text: "우리들의 새로운 언어, 이모티콘! 글자만으로는 내 감정을 표현하기 어려운 순간들. 고민하지 말고 이모티콘을 이용해보세요!",
  },
  {
    id: 4,
    title: "초간단 음식주문, 카카오톡 주문하기",
    img: "../images/kakao/kakao_item_4.jpg",
    text: "홈파티부터 티타임까지, 이제 카카오톡 하나로 쉽고 편하게 주문하세요.",
  },
  {
    id: 5,
    title: "일상을 더 쉽고 편리하게, 카카오톡 지갑",
    img: "../images/kakao/kakao_item_5.jpg",
    text: "나의 디지털 자산과 아이템이 담긴, 카톡 지갑에서 더 쉽고 편리한 일상을 누려보세요.",
  },
  {
    id: 6,
    title: "카카오톡의 편리함을 더한 메일, 카카오메일",
    img: "../images/kakao/kakao_item_6.jpg",
    text: "나의 워너비 메일주소로 카카오톡에서 빠르고 편리하게 메일 서비스를 이용해보세요.",
  },
];
const arrService02 = [
  {
    id: 1,
    title: "정확하고 즐거운 운전 도우미, 카카오내비",
    img: "../images/kakao/life_item_1.jpg",
    text: "빠르고 정확한 길 안내와 즐거운 운전 도우미가 함께한다면, 지루했던 운전경험이 일상의 즐거움으로 바뀔 수 있습니다. 운전자에게 필요한 모든 차량 관리 서비스도 같이 이용해보세요!",
  },
  {
    id: 2,
    title: "말 한마디로 편리해지는 일상, 헤이카카오",
    img: "../images/kakao/life_item_2.jpg",
    text: "당신에게 딱 맞게, 일상을 편리하게, 라이프 어시스턴트 기능을 사용해보세요.",
  },
  {
    id: 3,
    title: "같지만 다른 은행, 카카오뱅크",
    img: "../images/kakao/life_item_3.jpg",
    text: "혁신적 기술을 통해 일상 속 어떤 순간에서도 유용한 은행. 카카오뱅크는 또 하나의 은행이 아닌 '은행의 새로운 시작'입니다.",
  },
  {
    id: 4,
    title: "마음놓고 금융하다, 카카오페이",
    img: "../images/kakao/life_item_4.jpg",
    text: "금융의 수고로움을 줄이고 생활에 이로운 흐름을 만듭니다.",
  },
  {
    id: 5,
    title: "나를 가꾸는 참 쉬운 방법, 카카오헤어샵",
    img: "../images/kakao/life_item_5.jpg",
    text: "헤어샵 예약부터 뷰티콘텐츠까지 all-in-one 뷰티플랫폼 카카오헤어샵",
  },
  {
    id: 6,
    title: "모든 이동을 위한, 카카오 T",
    img: "../images/kakao/life_item_6.jpg",
    text: "답답한 이동 시간이 짧아진다면, 당신의 소중한 시간은 더 길어지고, 생활 속 이동의 불편함이 줄어든다면 당신이 할 수 있는 일이 더 많아집니다.",
  },
];
const arrService03 = [
  {
    id: 1,
    title: "나를 표현하는 쇼핑, 지그재그",
    img: "../images/kakao/commerce_item_1.jpg",
    text: "개인화 추천으로 나만의 스타일을 발견하는 쇼핑. 지그재그와 함께 내 맘대로 사세요.",
  },
  {
    id: 2,
    title: "마음을 전하는 가장 쉬운 방법, 카카오톡 선물하기",
    img: "../images/kakao/commerce_item_2.jpg",
    text: "메시지를 보내듯 편하게 주고 받는 선물을 통해 소중한 사람과의 관계가 더욱 특별해집니다.",
  },
  {
    id: 3,
    title: "여러분의 참여로 완성되는 카카오쇼핑라이브",
    img: "../images/kakao/commerce_item_3.jpg",
    text: "쇼핑에 필요한 모든 것을 전문가의 시선으로 리뷰하고, 고객의 관점으로 풀어드리는 친절한 라이브커머스, 카카오쇼핑라이브를 만나보세요",
  },
  {
    id: 4,
    title: "현명한 쇼핑 생활의 시작, 쇼핑하우",
    img: "../images/kakao/commerce_item_4.jpg",
    text: "스마트한 가격 비교 통해 탐색에서 구매까지 결정을 도와주는 쇼핑 중개 서비스",
  },
  {
    id: 5,
    title: "더 나은 내일을 만드는 주문, 카카오메이커스",
    img: "../images/kakao/commerce_item_5.jpg",
    text: "제품 하나하나의 임팩트로 오늘보다 나은 내일을 만듭니다.",
  },
  {
    id: 6,
    title: "쇼핑을 톡하다! 카카오톡 쇼핑하기",
    img: "../images/kakao/commerce_item_6.jpg",
    text: "카카오톡 스토어 판매자의 다양한 상품을 특별한 혜택과 함께 만나보세요.",
  },
];
const arrSocial = [
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
const arrSlide = [
  {
    id: 1,
    img: "../images/kakao/slide_item_1.png",
  },
  {
    id: 2,
    img: "../images/kakao/slide_item_2.png",
  },
  // {
  //   id: 3,
  //   img: "../images/kakao/slide_item_3.png",
  // },
];

// load items
window.addEventListener("DOMContentLoaded", function () {
  displaySlider(arrSlide);
  displayItems(sectionTechnology, arrTech);
  displayItems(sectionService, arrService01);
  displayItems(sectionSocial, arrSocial);
  itemPosition(sectionService);
  itemPosition(sectionSocial);
  // displayMenuButtons();
});
function displaySlider(items) {
  const mainSlider = document.querySelector(".main-slider");
  let sliderItems = items.map(function (item) {
    return `    
        <div class="item"  style="background-image: url(${item.img});"> </div> 
    `;
  });
  sliderItems = sliderItems.join("");
  mainSlider.innerHTML = sliderItems;
}
function displayItems(section, items) {
  const itemContainer = section.querySelector(".item-container");
  let displayMenu = items.map(function (item) {
    return `     
      <li>
        <a href="#">
          <img src="${item.img}" alt="">
          <h5>${item.title}</h5>
          <p>${item.text}</p>
        </a>
      </li>
    `;
  });
  displayMenu = displayMenu.join("");
  itemContainer.innerHTML = displayMenu;
}
function mainSlide() {
  let slideCount = 0;

  function slideShow() {
    const slide = document.querySelectorAll(".main-slider .item");
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.opacity = "0"; //처음에 전부 display를 none으로 한다.
    }
    slideCount++;
    if (slideCount >= slide.length) {
      slideCount = 0; //인덱스가 초과되면 1로 변경
    }
    slide[slideCount].style.opacity = "1"; //해당 인덱스는 block으로
    setTimeout(slideShow, 5000); //함수를 4초마다 호출
  }
  window.onload = function () {
    slideShow();
  };
}
mainSlide();
// item 위치값 변경
function itemPosition(section) {
  const itemList = section.querySelectorAll(".item-container li");
  itemList.forEach(function (item, index) {
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
// item slider
function itemSlider(section) {
  let counter = 0;
  function carousel() {
    // working with sectionItem
    const itemList = section.querySelectorAll(".item-container li");
    if (counter === itemList.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = itemList.length - 1;
    }
    itemList.forEach(function (item) {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  const nextBtn = section.querySelector(".nextBtn");
  const prevBtn = section.querySelector(".prevBtn");
  nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
  });
  prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
  });
}
itemSlider(sectionService);
itemSlider(sectionSocial);

// tab selector
const tabBtns = sectionService.querySelectorAll(".tab-btn");
const content = sectionService.querySelector(".content");
tabBtns.forEach(function (btn) {
  content.addEventListener("click", function (e) {
    if (e.target.dataset.tab === "communication") {
      btn.classList.remove("active");
      e.target.classList.add("active");
      displayItems(sectionService, arrService01);
      itemPosition(sectionService);
    } else if (e.target.dataset.tab === "life") {
      btn.classList.remove("active");
      e.target.classList.add("active");
      displayItems(sectionService, arrService02);
      itemPosition(sectionService);
    } else if (e.target.dataset.tab === "commerce") {
      btn.classList.remove("active");
      e.target.classList.add("active");
      displayItems(sectionService, arrService03);
      itemPosition(sectionService);
    }
  });
});

// const btns = document.querySelectorAll(".tab-btn");
// const about = document.querySelector(".about");
// const articles = document.querySelectorAll(".content");

// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove active form other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//       e.target.classList.add("active");
//     });
//     // hide other article
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });
