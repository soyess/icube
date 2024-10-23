function popupCloseEvet(){

    const loginWrppers = document.getElementById('popupWrappers');
    const closeBtn = document.querySelector(".popupWrap .closeBtn");

    if(closeBtn){

        closeBtn.addEventListener("click" , () => {
            loginWrppers.classList.remove("active");
        })
        
    }
}

popupCloseEvet();