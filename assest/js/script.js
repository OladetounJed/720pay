 let email =  document.querySelector(".email-address");
 let password = document.querySelector(".password");
 let signIn = document.querySelector(".sign-in-btn");
 let signInForm = document.querySelector(".sign-in-form")
 let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
 let incorrectPassword = document.querySelector(".incorrect-password")


 email.addEventListener('keyup', function (event) {
    isValidEmail = email.checkValidity();
    
  
  });

  
console.log(email.value)
 

  signIn.addEventListener('click', function (event) {
    if (email.value === "jed@frontend.geng" && password.value === "test"){
        window.location.href = "dashboard.html";
        
    }
    else {
        incorrectPassword.innerHTML = "Incorrect Email Address or Password!";
        
    }
  });