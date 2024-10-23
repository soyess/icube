const icubeFooterEvet = () => {
   
    let icubeFooter = document.querySelector(".icubeFooter");
    let htmlFilePath = '/footer.html'; // 삽입할 HTML 파일 경로
 
    if(icubeFooter){
 
    let xhr = new XMLHttpRequest();
    xhr.open('GET', htmlFilePath, true);
    xhr.onreadystatechange = function() {
 
    if (xhr.readyState == 4 && xhr.status == 200) {
 
       try{
             icubeFooter.innerHTML = xhr.responseText;
             let footerscripts = icubeFooter.getElementsByTagName('script');
 
             for (let i = 0; i < footerscripts.length; i++) {
                   let script = document.createElement('script');
                   script.src = footerscripts[i].src || ''; // src가 있는 경우
                   script.textContent = footerscripts[i].textContent;

                   // 스크립트 로드 완료 후 실행
                   script.onload = () => { console.log(`스크립트 ${i + 1} 로드 완료`);};

                   // 에러 핸들링
                   script.onerror = () => { console.error(`스크립트 ${i + 1} 로드 실패`);};

                   document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                //    document.body.appendChild(script).parentNode.removeChild(script);
             }
          }catch (error) {
            console.log('footer 연결 오류:', error);
        }
      }
 
    };
 
    xhr.send();
    console.log('footer작동');
 
   }
 
 }
 
 
 
 export { icubeFooterEvet }