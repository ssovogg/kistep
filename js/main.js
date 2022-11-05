// 비쥬얼 영역 이미지 슬라이드 구현
const visualSlide = document.querySelector(".vss_slide_list");
const visualPrevBtn = document.querySelector(".vss_prev");
const visualNextBtn = document.querySelector(".vss_next");
const visualPlayBtn = document.querySelector(".vss_play");

visualPrevBtn.addEventListener("click", ()=>{
  visualSlide.style.transform = "translateX(-36rem)";
})
visualNextBtn.addEventListener("click", ()=>{
  visualSlide.style.transform = "translateX(36rem)";
})

// 공지 영역 탭 메뉴 구현
const noticeArea = document.querySelector(".notice");
const noticeTabs = noticeArea.querySelectorAll("[data-tab-target]");
const noticeConts = noticeArea.querySelectorAll("[data-tab-content]");
noticeTabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    const target = document.querySelector(tab.dataset.tabTarget);
    noticeTabs.forEach((tabs) => {
      tabs.classList.remove("active");
    })
    noticeConts.forEach((conts)=>{
      conts.classList.remove("cont_active");
    })
    tab.classList.add("active");
    target.classList.add("cont_active");
  });
})

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
.then(res => {
  return res.json();
})
.then(data => fetchData(data));

function fetchData(data){
  fetchNotice(data.notice);
  fetchTender(data.tender);
  fetchRecruit(data.recruit);
  fetchTask(data.task);
}

function fetchNotice(data){
  notice = data.map(item => `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`)
  notice[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`
  noticeList.innerHTML = notice.join('');
}
function fetchTender(data){
  tender = data.map(item => `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`)
  tender[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date_b">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`
  tenderList.innerHTML = tender.join('');
}
function fetchRecruit(data){
  recruit = data.map(item => `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`)
  recruit[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`
  recruitList.innerHTML = recruit.join('');
}
function fetchTask(data){
  task = data.map(item => `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`)
  task[0] = `<li class="news_first"><a href="#"><strong class="title ${data[0].status}">${data[0].title}</strong><span class="desc">${data[0].desc}</span></a><span class="date">${data[0].date}<span class="day">${data[0].day}</span></span></span></span></span></li>`
  taskList.innerHTML = task.join('');
}

// 간행물 영역 탭 메뉴 구현
const publicArea = document.querySelector(".public");
const publicTabs = publicArea.querySelectorAll(".public_tab [data-tab-target]");
const publicConts = publicArea.querySelectorAll("[data-tab-content]");
publicTabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    const target = document.querySelector(tab.dataset.tabTarget);
    publicTabs.forEach((tabs) => {
      tabs.classList.remove("active");
    })
    publicConts.forEach((conts)=>{
      conts.classList.remove("pub_active");
    })
    tab.classList.add("active");
    target.classList.add("pub_active");
  });
})

const briefArea = document.querySelector(".public_gnb");
const briefTabs = briefArea.querySelectorAll(".public_menu [data-tab-target]");
const briefConts = briefArea.querySelectorAll("[data-tab-content]");
console.log(briefConts);
briefTabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    const target = document.querySelector(tab.dataset.tabTarget);
    briefTabs.forEach((tabs) => {
      tabs.classList.remove("active");
    })
    briefConts.forEach((conts)=>{
      conts.classList.remove("pubcont_active");
    })
    tab.classList.add("active");
    target.classList.add("pubcont_active");
  });
})

// 간행물 영역 탭 메뉴 리스트 데이터 연동
const briefList = document.querySelector("#pub_brief01");
const briefList02 = document.querySelector("#pub_brief02");
const briefList03 = document.querySelector("#pub_brief03");
let brief01 = [];
let brief02 = [];
let brief03 = [];
let brief04 = [];
let brief05 = [];
let brief06 = [];
let brief07 = [];

fetch("../data/public.json")
.then(res => {
  return res.json();
})
.then(data => fetchPublicData(data));

function fetchPublicData(data){
  brief01 = data.brief01.map(item => `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`)
  briefList.innerHTML = brief01.join('');
  brief02 = data.brief02.map(item => `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`)
  briefList02.innerHTML = brief02.join('');
  brief03 = data.brief03.map(item => `<li><a href="#"><div class="public_img"><img src="${item.img}" alt="${item.alt}"/></div><storng class="tit">${item.title}</storng></a></li>`)
  briefList03.innerHTML = brief03.join('');
}