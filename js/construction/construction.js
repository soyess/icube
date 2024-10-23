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