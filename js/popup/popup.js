/* 팝업 불러오기 이벤트 */

const icubePopupEvet = () => {
   
    let icubePopUp = document.getElementById("popupWrappers");
    let PopUpHtmlFilePath = '/icube/components/popup/popup.html'; // 삽입할 HTML 파일 경로
 
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
    console.log('popup 작동');
 
   }
 
 }
 

 
 export { icubePopupEvet }