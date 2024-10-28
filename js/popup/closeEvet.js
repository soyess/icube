function popupCloseEvet(){

    const loginWrppers = document.getElementById('popupWrappers');
    const closeBtn = document.querySelector(".popupWrap .closeBtn");
    const allBody = document.querySelector(".mobileHidden");

    if(closeBtn){

        closeBtn.addEventListener("click" , () => {
            loginWrppers.classList.remove("active");
            allBody.classList.remove("hidden");
        })
        
    }
}

popupCloseEvet();