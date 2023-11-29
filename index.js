function login(){
    window.location.href="login.html"
}

const themeBtn = document.getElementById("theme-btn");
    themeBtn.onclick = () => {
        themeBtn.classList.toggle("bi-sun-fill");
        if (themeBtn.classList.contains("bi-sun-fill")){
            document.body.classList.add("changeTheme");
        }else{
            document.body.classList.remove("changeTheme")
        }
    }