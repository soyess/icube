
// /* 각 버튼에 따라 데이터박스 오픈하기 */


// function hashTagEvet(){

// let hashTag = location.hash;
// console.log(hashTag);

// let hashText = hashTag.replace("#" , "");
// console.log(hashText);
// const constructConts = document.querySelectorAll(".constructDataSpace");

 
//    if(hashText === 'constructPage01'){

//       constructConts.forEach((otherBoxs) => otherBoxs.classList.remove("active"));
//       constructConts[0].classList.add("active");

//    }else if(hashText === 'constructPage02'){
//       constructConts.forEach((otherBoxs) => otherBoxs.classList.remove("active"));
//       constructConts[1].classList.add("active");
   
//    }else if(hashText === 'constructPage03'){
//       constructConts.forEach((otherBoxs) => otherBoxs.classList.remove("active"));
//       constructConts[2].classList.add("active");
   
//    }else if(hashText === 'constructPage04'){
//       constructConts.forEach((otherBoxs) => otherBoxs.classList.remove("active"));
//       constructConts[3].classList.add("active");
   
//    }else if(hashText === 'constructPage05'){
//       constructConts.forEach((otherBoxs) => otherBoxs.classList.remove("active"));
//       constructConts[4].classList.add("active");
//    }
//    else{

//    }
     

// }

// hashTagEvet();



const hashClickEvet = () => {

    const hashBtns = document.querySelectorAll(".constructTabBoxs button");
    const hashCont = document.querySelectorAll(".constructDataSpace");

    //최초의 값
    hashBtns[0].classList.add("active");
    hashCont[0].classList.add("active");

    hashBtns.forEach((btn, index) => {
       btn.addEventListener("click" , () => {

          hashBtns.forEach((otherBtn) => otherBtn.classList.remove("active"));
          btn.classList.add("active");

          hashCont.forEach((list, idx) => {

            if(index === idx){

               hashCont.forEach((otherCont) => { otherCont.classList.remove("active")});
               list.classList.add("active");
            
             }
          })
        
       })
    })
}

hashClickEvet();