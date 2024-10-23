
/* textArea 높이 조절 */

function newsDetailsTextAreaEvet(){

    let newsDetailsText = document.querySelector(".detailsTexts");

    if(newsDetailsText.value){
      
      const textHeight = newsDetailsText.scrollHeight;
      
      newsDetailsText.style.height = `${textHeight}px`;

    }
}

newsDetailsTextAreaEvet();




/* 목록으로 돌아가기 클릭시 이전페이지로 이동 */

const BackSiteBtnEvet = () => {

    const backSiteBtns = document.querySelectorAll(".backSite");

    if(backSiteBtns){

      backSiteBtns.forEach((thisBtn) => {

          thisBtn.addEventListener("click" , () => {

            history.back();
          });

      })
    }
}

BackSiteBtnEvet();


window.addEventListener("resize" , BackSiteBtnEvet);