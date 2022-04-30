var form = document.querySelector('#form');
form.addEventListener('submit',myFunction);

function myFunction(){
      event.preventDefault();
      var count = localStorage.getItem('count') || 0;
      var data = JSON.parse(localStorage.getItem('signup'));
      console.log(data[0].name)
      if (form.email.value != data[0].email || form.password.value != data[0].password){
            alert('Incorrect passord or email')
      }
      else{
            alert('Succesfully Sign-in')
            count++;
            localStorage.setItem('count',count)
            window.location.href = "home.html"
      }
}