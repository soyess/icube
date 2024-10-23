const icubeHeaderEvet = () => {
   
   let icubeHeader = document.querySelector(".icubeHeader");
   let htmlFilePath = '/icube/header.html'; // 삽입할 HTML 파일 경로

   if(icubeHeader){

   let xhr = new XMLHttpRequest();
   xhr.open('GET', htmlFilePath, true);
   xhr.onreadystatechange = function() {

   if (xhr.readyState == 4 && xhr.status == 200) {

      try{
            icubeHeader.innerHTML = xhr.responseText;
            let headerscripts = icubeHeader.getElementsByTagName('script');

            for (let i = 0; i < headerscripts.length; i++) {
                  let script = document.createElement('script');
                  script.src = headerscripts[i].src || ''; // src가 있는 경우
                  script.textContent = headerscripts[i].textContent;

                  // 스크립트 로드 완료 후 실행
                  script.onload = () => { console.log(`스크립트 ${i + 1} 로드 완료`);};

                  // 에러 핸들링
                  script.onerror = () => { console.error(`스크립트 ${i + 1} 로드 실패`);};
                  
                  // document.body.appendChild(script).parentNode.removeChild(script);
                  document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
            }
         }catch (error) {
            console.log('Header 연결 오류:', error);
        }
     }

   };

   xhr.send();
   console.log('header작동');

  }

}



export { icubeHeaderEvet }