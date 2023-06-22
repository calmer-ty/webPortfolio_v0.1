function serviceEvent() {
  const idSection = document.getElementById("service");
  const sectionItem = idSection.querySelectorAll(".item-list > li");
  const nextBtn = idSection.querySelector(".nextBtn");
  const prevBtn = idSection.querySelector(".prevBtn");

  // item 위치값 변경
  sectionItem.forEach(function (item, index) {
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

  // item Btn Event
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

  function carousel() {
    // working with sectionItem
    if (counter === sectionItem.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = sectionItem.length - 1;
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
    sectionItem.forEach(function (item) {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  //   prevBtn.style.display = "none";

  // 탭 DOM
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

  const tabBtn = idSection.querySelectorAll(".tab-btn button");

  for (let i = 0; i < sectionItem.length; i++) {
    const h5 = sectionItem[i].querySelector("h5");
    const p = sectionItem[i].querySelector("p");
    const img = sectionItem[i].querySelector("img");

    h5.textContent = communication[i].title;
    p.textContent = communication[i].text;
    img.src = communication[i].img;

    tabBtn[0].addEventListener("click", function () {
      h5.textContent = communication[i].title;
      p.textContent = communication[i].text;
      img.src = communication[i].img;
    });
    tabBtn[1].addEventListener("click", function () {
      h5.textContent = life[i].title;
      p.textContent = life[i].text;
      img.src = life[i].img;
    });
    tabBtn[2].addEventListener("click", function () {
      h5.textContent = commerce[i].title;
      p.textContent = commerce[i].text;
      img.src = commerce[i].img;
    });
  }
}
serviceEvent();
