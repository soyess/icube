import { icubeHeaderEvet } from "./header.js"
import { icubeFooterEvet } from "./footer.js";
import { icubePopupEvet } from "./popup/popup.js";



/* 웹 메인화면 로그인 팝업 이벤트 */
const loginPopupEvet = () => {

  const loginBtns = document.querySelector(".loginBtns");
  const loginWrppers = document.getElementById('popupWrappers');

  if(loginBtns){

    loginBtns.addEventListener("click" , () => { 
      
      console.log('웹로그인버튼클릭')
      icubePopupEvet(); 
      loginWrppers.classList.add("active");
      
    })

  }
}


/* 모바일 메인화면 로그인 팝업 이벤트 */
const mobileLoginPopupEvet = () => {
      
  const loginMobileBtns = document.querySelector(".moGoLogin");
  const loginWrppers = document.getElementById('popupWrappers');

  if(loginMobileBtns){
    
    loginMobileBtns.addEventListener("click" , () => {
      
         icubePopupEvet();
         console.log('모바일화면로그인클릭');
         loginWrppers.classList.add("active");
  
        });

}

}


window.addEventListener("load" , () => {
    
   icubeHeaderEvet(); //header연결
   icubeFooterEvet(); //footer연결

  if(window.innerWidth > 1080){ loginPopupEvet();}
  if(window.innerWidth <= 1080){ mobileLoginPopupEvet();}


   /* 웹 메인화면 건설정보에서 링크클릭 이벤트 */
   
       let hasTag = location.hash;
       let hasText = hasTag.replace("#" , "");
       console.log(hasText);

       if(String(hasText)){

          console.log('hashTag이동');
          const constructTabBtns = document.querySelectorAll(".constructTabBoxs button");
          const constructContSpace = document.querySelectorAll(".constructDataSpace");

          if(constructTabBtns){
             
             if(hasText === 'page01'){

               constructContSpace.forEach((otherSpace) => {otherSpace.classList.remove("active")});
               constructTabBtns.forEach((otherBtns) => {otherBtns.classList.remove("active")});
               constructContSpace[0].classList.add("active");
               constructTabBtns[0].classList.add("active");

             }else if(hasText === 'page02'){
               
               constructContSpace.forEach((otherSpace) => {otherSpace.classList.remove("active")});
               constructTabBtns.forEach((otherBtns) => {otherBtns.classList.remove("active")});
               constructContSpace[1].classList.add("active");
               constructTabBtns[1].classList.add("active");

             }else if(hasText === 'page03'){
               
               constructContSpace.forEach((otherSpace) => {otherSpace.classList.remove("active")});
               constructTabBtns.forEach((otherBtns) => {otherBtns.classList.remove("active")});
               constructContSpace[2].classList.add("active");
               constructTabBtns[2].classList.add("active");

             }else if(hasText === 'page04'){
               
               constructContSpace.forEach((otherSpace) => {otherSpace.classList.remove("active")});
               constructTabBtns.forEach((otherBtns) => {otherBtns.classList.remove("active")});
               constructContSpace[3].classList.add("active");
               constructTabBtns[3].classList.add("active");

             }else if(hasText === 'page05'){
               
               constructContSpace.forEach((otherSpace) => {otherSpace.classList.remove("active")});
               constructTabBtns.forEach((otherBtns) => {otherBtns.classList.remove("active")});
               constructContSpace[4].classList.add("active");
               constructTabBtns[4].classList.add("active");

             }
             
             
          }
       }
       
       
      })
      


  window.addEventListener("resize" , () => {
     
    if(window.innerWidth > 1080){
      loginPopupEvet();
    }

    if(window.innerWidth <= 1080){
      mobileLoginPopupEvet();
    }
    
})