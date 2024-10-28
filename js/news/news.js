
/* 뉴스페이지 오늘의 주요뉴스란 오늘닐찌 설정 이벤트 */
const todayEvet = () => {

const todays = new Date();
const todayYears = todays.getFullYear();
const todayMonths = todays.getMonth();
const todayDates = todays.getDate();
const todayDays = todays.getDay();

const monthArray = [ "1월" , "2월", "3월" , "4월" , "5월" , "6월" , "7월" , "8월" , "9월" , "10월" , "11월" , "12월"];
const daysArray = ["일요일", "월요일" , "화요일", "수요일", "목요일", "금요일", "토요일"]
let todayBoxs = document.querySelector(".newsTodayDates");

todayBoxs.textContent = `${todayYears}년 ${monthArray[todayMonths]} ${todayDates}일 ${daysArray[todayDays]}`;

}

todayEvet();


/* 오늘의 주요뉴스 리스트 불러오기 */
const getData = async () => {

        const response = await fetch('/icube/json/news/news.json');
        const data = await response.json();
        const answers = data.news;
        console.log('주요뉴스리스트데이터', answers);

        
        //오늘의 주요뉴스 목록만들기
        let todaysSubList = document.querySelector(".todaysSub");
        let ListWrappers = '';

        if(answers && todaysSubList){

            if(window.innerWidth > 1080){

             answers.forEach((list,index) => {
                ListWrappers += ` <ul>
                        <span>0${index+1}</span>
                        <li>
                            <h3>${list.title}</h3>
                            <p>${list.contents}</p>
                        </li>
                    </ul>`  
             })

             todaysSubList.innerHTML = ListWrappers;

             //오른쪽 작은기사 클릭시 왼쪽 메인 기사 변경 이벤트
             const newsList = document.querySelectorAll (".todaysSub ul");
             let todaysMainTitles = document.querySelector(".todaysMain a h2");
             let todaysMainContents = document.querySelector(".todaysMain a p");

             if(newsList){

                //최초의 값(메인기사 및 작은기사불들어오기)
                const initialTitles = newsList[0].children[1].children[0];
                const initialContents = newsList[0].children[1].children[1];
                newsList[0].classList.add("active");

                todaysMainTitles.textContent = initialTitles.textContent || '';
                todaysMainContents.textContent = initialContents.textContent || '';

                newsList.forEach((listBtns) => {

                     listBtns.addEventListener("click" , () => {

                        newsList.forEach((otherList) => {otherList.classList.remove("active");})
                        listBtns.classList.add("active");

                        const titles = listBtns.children[1].children[0];
                        const contents = listBtns.children[1].children[1];
                    
                        todaysMainTitles.textContent = titles.textContent || '';
                        todaysMainContents.textContent = contents.textContent || '';

                     })
                })
             }
            }

            /* 모바일 화면에서 스와이퍼 슬라이드 만들기 */
             else if(window.innerWidth <= 1080){

                 let swiperContents = document.querySelector(".newsMobile .newsMoSwiper .swiper-wrapper");

                    answers.forEach((list,index) => {
                        ListWrappers += `
                              <div class="swiper-slide">
                               <a href="/icube/components/news/newsDetails.html">
                                 <h3>${list.title}</h3>
                                 <p>${list.contents}</p>
                                 <div class="mobileSlidersImg">
                                   <img src="/icube/assets/images/news/${list.imgs}"/>
                                 </div>
                                 </a>
                              </div>`  
                    })

                    swiperContents.innerHTML = ListWrappers;
             }



        }


      }

getData();



/* 과거뉴스 리스트 불러오는 이벤트 */
const pastNewsData = async () => {

    const pastResponse = await fetch('/icube/json/news/news.json');
    const pastData = await pastResponse.json();
    const pastAnswers = pastData.pastNews
    console.log('과거뉴스리스트데이터', pastAnswers);

    
    //과거뉴스 목록만들기
    let pastSubList = document.querySelector(".pastNewsCont");
    let pastListWrappers = '';

    if(pastAnswers && pastSubList){

        pastAnswers.forEach((list) => {
            pastListWrappers += ` 
               <a href="/icube/components/news/newsDetails.html">
                 <ul>
                    <li>
                        <h3>${list.title}</h3>
                        <p>${list.contents}</p>
                    </li>
                </ul>
                </a>`  
         })

         pastSubList.innerHTML = pastListWrappers;

    }


  }

  pastNewsData();



/* 과거뉴스 셀렉박스년도 설정하기*/
  const newsSelectBoxsEvet = () => {

     
     let newsPastHiddenSelectBox01 = document.getElementById("newsPastHiddenSelectBox01");
     let newsPastHiddenSelectBox02 = document.getElementById("newsPastHiddenSelectBox02");
     let newSelectTitleBtns = document.querySelectorAll(".newsPastSelectsTitleBtn");
     let newsPastSelectList = document.querySelectorAll(".newsPastSelectList");
     let newsPastSelectListMembers = document.querySelectorAll(".newsPastSelectListMember");


     //셀렉박스날짜 
     const thisYears = new Date();
     const thisYearBoxs = thisYears.getFullYear(); //현재의 달
     const pastMonthCont = thisYears.getMonth();//지난달

     let totalYearArray = [1, 2, 3, 4, 5, 6];
     let totalMonthArray = [1,2,3,4,5,6,7,8,9,10,11,12];
     let answers = '';
     let options = '';
     let months = '';
     let monthOptions = '';

     if(thisYears && thisYearBoxs){

      totalYearArray.forEach((pasts, index) => {  //현재포함 과거 5년 (총 6년)

         if(index > 0){
            return options += `<option>${thisYearBoxs - [index]}</option>`,
            answers += `<li><p>${thisYearBoxs - [index]}년</p></li>`;
         }

         options += `<option>${thisYearBoxs}</option>`;
         answers += `<li><p>${thisYearBoxs}년</p></li>`;

      })

      newsPastHiddenSelectBox01.innerHTML = options; //셀렉박스 옵션값 설정
      newsPastSelectListMembers[0].innerHTML = answers; //보여지는 셀렉박스 최초값

      totalMonthArray.forEach((list) => {

        monthOptions += `<option>${list}</option>`;
        months += `<li><p>${list}월</p></li>`;

      })

      newsPastHiddenSelectBox02.innerHTML = monthOptions;
      newsPastSelectListMembers[1].innerHTML = months; //보여지는 셀렉박스 최초값


      //최초의 셀렉박스값 설정 및 보여지는 셀렉박스 버튼의 최초 text값 담기
      const initialValues = () => {

        if(newsPastHiddenSelectBox02.children){ //달 셀렉박스의 옵션값이 있다면

        for(let i = 0; i <= newsPastHiddenSelectBox02.children.length - 1; i++){

            if(newsPastHiddenSelectBox02.children[i].value == pastMonthCont){ //만약 셀렉박스 옵션값과 한달 이전의 달값이 일치한다면

                newsPastHiddenSelectBox02.children[i].selected = "true"; //최초의 셀렉박스 달 값 설정
            }

        }

        newSelectTitleBtns[0].textContent = `${thisYearBoxs}년`; //최초의 년도 설정 (이번년도)
        newSelectTitleBtns[1].textContent = `${pastMonthCont}월`; //현재달보다 한달 이전으로 설정
        newsPastHiddenSelectBox01.options[0].selected = "true";

        console.log(`최초의_년도셀렉박스_값 ${newsPastHiddenSelectBox01.value}`);
        console.log(`최초의_달셀렉박스_값 ${newsPastHiddenSelectBox02.value}`);

       }

      }

    initialValues();


    }


    //셀렉박스 버튼 클릭 이벤트
    newSelectTitleBtns.forEach((btns) => {

          btns.addEventListener("click", () => {

            const lists = btns.nextElementSibling;

            if(lists.classList.contains("active")){
               return lists.classList.remove("active"),
               btns.classList.remove("active");
            }
            
            newsPastSelectList.forEach((otherList) => otherList.classList.remove("active"));
            newSelectTitleBtns.forEach((otherbtns) => otherbtns.classList.remove("active"));
            
            btns.classList.add("active");
            lists.classList.add("active");

          })
     })




     //셀렉박스 리스트 클릭시 버튼에 담기
     newsPastSelectListMembers.forEach((lists , idx) => {

         lists.addEventListener("click", (e) =>{ 

            const thisTarget = e.target; //현재 클릭한 요소
            const targetBtns = thisTarget.parentElement.parentElement.parentElement.previousElementSibling;
            const thisSelectBoxs= thisTarget.parentElement.parentElement.parentElement.parentElement.previousElementSibling;//현재 셀렉박스

             if(targetBtns.nodeName = "BUTTON"){

                for(let i = 0; i <= thisSelectBoxs.children.length - 1; i++){
                    
                    const answerBoxs = thisTarget.textContent.substr(0, [thisTarget.textContent.length - 1]); //년, 월을 제거한 텍스트값

                    if(thisSelectBoxs.children[i].value == answerBoxs){ //클릭한 리스트의 값과 옵션의 값이 같다면
                        thisSelectBoxs.children[i].selected = "true"; //셀렉박스에 값 담기
                        console.log(`현재셀렉박스값 ${thisSelectBoxs.id}, 셀렉박스값 ${thisSelectBoxs.value}`);
                    }
                     
                }
            
                targetBtns.textContent = thisTarget.textContent;
                newsPastSelectList.forEach((allList) => allList.classList.remove("active"));
                newSelectTitleBtns.forEach((allBtns) => allBtns.classList.remove("active"));

             }
         })

     })
  }


  newsSelectBoxsEvet();


  window.addEventListener("resize" , getData);