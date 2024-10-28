

/* 웹,모바일 네비에서 로그인 버튼 클릭시 불러올 팝업 */
const icubePopupNavEvet = () => {
   
  let icubePopUp = document.getElementById("popupWrappers");
  let PopUpHtmlFilePath = '/icube/components/popup/popup.html'; // 삽입할 HTML 파일 경로

  console.log(icubePopUp);
  
  if(icubePopUp){

  let xhr = new XMLHttpRequest();
  xhr.open('GET', PopUpHtmlFilePath, true);
  xhr.onreadystatechange = function() {

  if (xhr.readyState == 4 && xhr.status == 200) {

     try{
           icubePopUp.innerHTML = xhr.responseText;
           let popupScripts = icubePopUp.getElementsByTagName('script');

           for (let i = 0; i < popupScripts.length; i++) {
                 let script = document.createElement('script');
                 script.src = popupScripts[i].src || ''; // src가 있는 경우
                 script.textContent = popupScripts[i].textContent;

                 // 스크립트 로드 완료 후 실행
                 script.onload = () => { console.log(`팝업 스크립트 ${i + 1} 로드 완료`);};

                 // 에러 핸들링
                 script.onerror = () => { console.error(`팝업 스크립트 ${i + 1} 로드 실패`);};
                 
                 // document.body.appendChild(script).parentNode.removeChild(script);
                 document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
           }
        }catch (error) {
           console.log('popup 연결 오류:', error);
       }
    }

  };

  xhr.send();
  console.log('popup작동');

 }

}

/* 웹 헤더 출근하기 버튼 클릭시, 팝업 오픈 */

const headerPopOpenEvet = () => {

  const webNavLoginBtn = document.querySelector(".webNavLoginBtn");
  const popContents = document.getElementById('popupWrappers');

  webNavLoginBtn.addEventListener("click" , () => {
      
    console.log('웹네비로그인클릭');
    icubePopupNavEvet();
    popContents.classList.add("active");
  })
}


headerPopOpenEvet();

/* 모바일 네비에서 로그인 버튼 클릭시 로그인 팝업 오픈 */

const moNavPopOpenEvet = () => {

   const moNavLoginBtn = document.querySelector(".moNavLoginBtn");
   const popContent = document.getElementById('popupWrappers');
   let mobileNavButton = document.querySelector(".mobileNavBtn");
   let mobileheader = document.querySelector("header")
   let mobileNav = document.querySelector("nav");
   let totalBody = document.getElementsByTagName('body')[0];


   moNavLoginBtn.addEventListener("click", () => {
    
    console.log('모바일네비로그인클릭');

    icubePopupNavEvet();
    popContent.classList.add("active");
    mobileNavButton.classList.remove("active");
    mobileheader .classList.remove("active");
    mobileNav.classList.remove("active");
    totalBody.classList.add("hidden");
    console.log(totalBody, '모바일메뉴팝업스크롤body작동');


   })

   totalBody.classList.remove("hidden");

  }

  moNavPopOpenEvet();


window.addEventListener("resize" , () => {

   if(window.innerWidth <= 1080){

      mobileNavEvet();
      moNavPopOpenEvet();
   }

})
