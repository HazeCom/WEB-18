document.querySelector('#sign').addEventListener('submit',myFunction);

var signUp = JSON.parse(localStorage.getItem('signup')) || [];
function myFunction(){
      event.preventDefault();
      var form = document.querySelector('#sign');
      var obj11 = {
        name : form.name.value,
        email : form.email.value,
        password : form.password.value
      };

      signUp.push(obj11)
      console.log(signUp)
      localStorage.setItem("signup", JSON.stringify(signUp));
      window.location.href = "login.html"
}
