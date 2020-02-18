 let email =  document.querySelector(".email-address");
 let password = document.querySelector(".password");
 let signIn = document.querySelector(".sign-in-btn");
 let signInForm = document.querySelector(".sign-in-form")
 let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;


 email.addEventListener('keyup', function (event) {
    isValidEmail = email.checkValidity();
    
    if(isValidEmail){
        signIn.disabled = false;
    }
    else {
        signIn.disabled = true;
    }
  });

 

  signIn.addEventListener('click', function (event) {
    if (email.value === "jed@frontend.geng" && password.value === "test"){
        window.location.href = "dashboard.html";
    }

    else {
        email.style.borderColor = red;
    }
  });