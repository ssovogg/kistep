// 헤더 영역 언어 버튼 선택
const langBtn = document.querySelector('.lang_btn i');
const langEn = document.querySelector('.lang_en');
langBtn.addEventListener('click', ()=>{
  if(langEn.style.opacity === '1'){
    langEn.style.opacity = '0';
  } else {
    langEn.style.opacity = '1';
  }
  langBtn.classList.toggle('lang_active');  
})

// 헤더 영역 호버 이벤트 추가
const header = document.querySelector('.header');
const mainmenuBtns = document.querySelectorAll('.mainmenu');
for (const menu of mainmenuBtns){
  menu.addEventListener('mouseover', ()=>{
    header.classList.add('header_hover');
  })
  menu.addEventListener('mouseout', ()=>{
    header.classList.remove('header_hover');
  })
}

// 헤더 영역 전체메뉴 보기 버튼 클릭 이벤트 
const allMenuBtn = document.querySelector('.allmenu_open span');
allMenuBtn.addEventListener('click', ()=>{
  console.log('click');
})

// 비쥬얼 영역 메인 이미지 슬라이드 구현
const vsSlide = document.querySelectorAll(".vs_slides li"),
  vsPrevBtn = document.querySelector(".vs_prev"),
  vsNextBtn = document.querySelector(".vs_next");
let currentVsIdx = 0;
vsPrevBtn.addEventListener("click", () => {
  moveVsSlide(currentVsIdx == 0 ? 3 : currentVsIdx - 1);
});
vsNextBtn.addEventListener("click", () => {
  moveVsSlide(currentVsIdx == 3 ? 0 : currentVsIdx + 1);
});
function moveVsSlide(num) {
  currentVsIdx = num;
  vsSlide.forEach((list) => list.classList.remove("vs_active"));
  vsSlide[num].classList.add("vs_active");
}

// 비쥬얼 영역 이미지 슬라이드 구현
const visualSlide = document.querySelector(".vss_slide_list");
const visualPrevBtn = document.querySelector(".vss_prev");
const visualNextBtn = document.querySelector(".vss_next");
const visualPlayBtn = document.querySelector(".vss_play");

visualPrevBtn.addEventListener("click", () => {
  visualSlide.style.transform = "translateX(-36rem)";
});
visualNextBtn.addEventListener("click", () => {
  visualSlide.style.transform = "translateX(36rem)";
});

// 공지 영역 탭 메뉴 구현
const noticeArea = document.querySelector(".notice");
const noticeTabs = noticeArea.querySelectorAll("[data-tab-target]");
const noticeConts = noticeArea.querySelectorAll("[data-tab-content]");
noticeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    noticeTabs.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    noticeConts.forEach((conts) => {
      conts.classList.remove("cont_active");
    });
    tab.classList.add("active");
    target.classList.add("cont_active");
  });
});

// 공지 영역 탭 메뉴 리스트 데이터 연동
const noticeList = document.querySelector("#notice");
const tenderList = document.querySelector("#tender");
const recruitList = document.querySelector("#recruit");
const taskList = document.querySelector("#task");
let notice = [];
let tender = [];
let recruit = [];
let task = [];

fetch("../data/notice.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => fetchData(data));

function fetchData(data) {
  fetchNotice(data.notice);
  fetchTender(data.tender);
  fetchRecruit(data.recruit);
  fetchTask(data.task);
}

function fetchNotice(data) {
  notice = data.map(
    (item) =>
      `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`
  );
  notice[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`;
  noticeList.innerHTML = notice.join("");
}
function fetchTender(data) {
  tender = data.map(
    (item) =>
      `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`
  );
  tender[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date_b">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`;
  tenderList.innerHTML = tender.join("");
}
function fetchRecruit(data) {
  recruit = data.map(
    (item) =>
      `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`
  );
  recruit[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`;
  recruitList.innerHTML = recruit.join("");
}
function fetchTask(data) {
  task = data.map(
    (item) =>
      `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`
  );
  task[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`;
  taskList.innerHTML = task.join("");
}

// 카드뉴스 영역 메인 이미지 슬라이드 구현
const cardSlide = document.querySelectorAll(".card_slides li"),
  cardPrevBtn = document.querySelector(".cc_prev"),
  cardNextBtn = document.querySelector(".cc_next"),
  cardPlayBtn = document.querySelector(".cc_play i");
let cardPg = document.querySelector(".cc_paper");
let currentCardIdx = 0;
let cardSlidePlay;
cardPg.innerHTML = `${currentCardIdx + 1} / 7`;
cardPrevBtn.addEventListener("click", () => {
  moveCardSlide(currentCardIdx == 0 ? 6 : currentCardIdx - 1);
});
cardNextBtn.addEventListener("click", () => {
  moveCardSlide(currentCardIdx == 6 ? 0 : currentCardIdx + 1);
});
cardPlayBtn.addEventListener("click", () => {
  cardPlayBtn.classList.toggle("fa-play");
  cardPlayBtn.classList.toggle("fa-pause");
  if (cardPlayBtn.classList.contains("fa-pause")) {
    cardSlidePlay = setInterval(() => {
      moveCardSlide(currentCardIdx == 6 ? 0 : currentCardIdx + 1);
    }, 1500);
  } else if (cardPlayBtn.classList.contains("fa-play")) {
    clearInterval(cardSlidePlay);
  }
});
function moveCardSlide(num) {
  currentCardIdx = num;
  cardSlide.forEach((list) => list.classList.remove("card_active"));
  cardSlide[num].classList.add("card_active");
  cardPg.innerHTML = `${num + 1} / 7`;
}
// 팝업존 영역 메인 이미지 슬라이드 구현
const popSlide = document.querySelectorAll(".pop_slides li"),
  popPrevBtn = document.querySelector(".pc_prev"),
  popNextBtn = document.querySelector(".pc_next"),
  popPlayBtn = document.querySelector(".pc_play i");
let popPg = document.querySelector(".pc_paper");
let currentpopIdx = 0;
let popSlidePlay;
popPg.innerHTML = `${currentpopIdx + 1} / 3`;
popPrevBtn.addEventListener("click", () => {
  movepopSlide(currentpopIdx == 0 ? 2 : currentpopIdx - 1);
});
popNextBtn.addEventListener("click", () => {
  movepopSlide(currentpopIdx == 2 ? 0 : currentpopIdx + 1);
});
popPlayBtn.addEventListener("click", () => {
  popPlayBtn.classList.toggle("fa-play");
  popPlayBtn.classList.toggle("fa-pause");
  if (popPlayBtn.classList.contains("fa-pause")) {
    popSlidePlay = setInterval(() => {
      movepopSlide(currentpopIdx == 2 ? 0 : currentpopIdx + 1);
    }, 1500);
  } else if (popPlayBtn.classList.contains("fa-play")) {
    clearInterval(popSlidePlay);
  }
});
function movepopSlide(num) {
  currentpopIdx = num;
  popSlide.forEach((list) => list.classList.remove("pop_active"));
  popSlide[num].classList.add("pop_active");
  popPg.innerHTML = `${num + 1} / 3`;
}

// 간행물 영역 탭 메뉴 구현
const publicArea = document.querySelector(".public");
const publicTabs = publicArea.querySelectorAll(".public_tab [data-tab-target]");
const publicConts = publicArea.querySelectorAll("[data-tab-content]");
publicTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    publicTabs.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    publicConts.forEach((conts) => {
      conts.classList.remove("pub_active");
    });
    tab.classList.add("active");
    target.classList.add("pub_active");
  });
});

const briefArea = document.querySelector(".public_gnb");
const briefTabs = briefArea.querySelectorAll(".public_menu [data-tab-target]");
const briefConts = briefArea.querySelectorAll("[data-tab-content]");
console.log(briefConts);
briefTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    briefTabs.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    briefConts.forEach((conts) => {
      conts.classList.remove("pubcont_active");
    });
    tab.classList.add("active");
    target.classList.add("pubcont_active");
  });
});

// 간행물 영역 탭 메뉴 리스트 데이터 연동
const briefList = document.querySelector("#pub_brief01");
const briefList02 = document.querySelector("#pub_brief02");
const briefList03 = document.querySelector("#pub_brief03");
const briefList04 = document.querySelector("#pub_brief04");
const briefList05 = document.querySelector("#pub_brief05");
const briefList06 = document.querySelector("#pub_brief06");
const briefList07 = document.querySelector("#pub_brief07");
let brief01 = [];
let brief02 = [];
let brief03 = [];
let brief04 = [];
let brief05 = [];
let brief06 = [];
let brief07 = [];

fetch("../data/public.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => fetchPublicData(data));

function fetchPublicData(data) {
  brief01 = data.brief01.map(
    (item) =>
      `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`
  );
  briefList.innerHTML = brief01.join("");
  brief02 = data.brief02.map(
    (item) =>
      `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`
  );
  briefList02.innerHTML = brief02.join("");
  brief03 = data.brief03.map(
    (item) =>
      `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`
  );
  briefList03.innerHTML = brief03.join("");
  brief04 = data.brief04.map(
    (item) =>
      `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`
  );
  briefList04.innerHTML = brief04.join("");
  brief05 = data.brief05.map(
    (item) =>
      `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`
  );
  briefList05.innerHTML = brief05.join("");
  brief06 = data.brief06.map(
    (item) =>
      `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`
  );
  briefList06.innerHTML = brief06.join("");
  brief07 = data.brief07.map(
    (item) =>
      `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`
  );
  briefList07.innerHTML = brief07.join("");
}

// 배너 영역 이미지 슬라이드 구현
const bnSlides = document.querySelector(".banner_list"),
  bnSlide = document.querySelectorAll(".banner_list li"),
  bnMartin = 2,
  bnPrevBtn = document.querySelector(".ba_prev"),
  bnNextBtn = document.querySelector(".ba_next");
let bnPlayBtn = document.querySelector(".ba_auto i");
let bnCount = bnSlide.length;
let currentBnIdx = 0;
let bnWidths = [];
bnSlide.forEach(banner =>bnWidths.push(banner.clientWidth));
const bnSlideWidth = bnWidths.reduce(function add(sum, currValue){
  return sum + currValue;
}, 0);
console.log(bnSlideWidth);
let bnTotalWidth = 0;

bnPrevBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  moveBnSlide(currentBnIdx == 0 ? bnCount - 1 : currentBnIdx - 1);
})
bnNextBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  moveBnSlide(currentBnIdx == bnCount - 1 ? 0 : currentBnIdx + 1);
})
function moveBnSlide(num){
  currentBnIdx = num;
  console.log(num);
  console.log(bnWidths[num]);
  bnTotalWidth = +bnTotalWidth + bnWidths[num];
  console.log(bnTotalWidth);
}

// 푸터 영역 - 관련 사이트 리스트 보여주기
const siteLabel = document.querySelector('.site_label');
const siteList = document.querySelector('.site_list');
siteLabel.addEventListener('click', (e)=>{
  e.preventDefault();
  siteLabel.classList.toggle('site_label_active');
  siteList.classList.toggle('site_list_active');
})