// 공지 영역 탭 메뉴 구현
const noticeArea = document.querySelector(".notice");
const noticeTabs = noticeArea.querySelectorAll("[data-tab-target");
const noticeConts = noticeArea.querySelectorAll("[data-tab-content");
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
let notice = [];
let tender = [];

fetch("../data/notice.json")
.then(res => {
  return res.json();
})
.then(data => fetchData(data));

function fetchData(data){
  fetchNotice(data.notice);
  fetchTender(data.tender);
}

function fetchNotice(data){
  notice = data.map(item => `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`)
  notice[0] = `<li>${data[0].title}</li>`
  noticeList.innerHTML = notice.join('');
}
function fetchTender(data){
  tender = data.map(item => `<li><a href="#" class="tit ${item.status}">${item.title}</a><span class="date">${item.date}.${item.day}</span></li>`)
  tenderList.innerHTML = tender.join('');
}

// 간행물 영역 탭 메뉴 구현
const publicArea = document.querySelector(".public");
const publicTabs = publicArea.querySelectorAll(".public_tab [data-tab-target");
const publicConts = publicArea.querySelectorAll("[data-tab-content");
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

