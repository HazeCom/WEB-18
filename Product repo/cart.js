var cont = document.querySelector('#cart')
var cart = JSON.parse(localStorage.getItem('cart'));

display(cart);

// localStorage.removeItem('ttp')
var tc = localStorage.getItem('itCount');
var item = document.querySelector('#totalIt');
item.innerText = 'Total item: '+ tc;
var ttp = +localStorage.getItem('ttp');

var count = 0;
var submit = document.querySelector('form');
submit.addEventListener('submit',discount);
localStorage.removeItem('ttp');
function discount(){
      event.preventDefault();
      count++;
      cart.forEach(function(el,i){
            // console.log(count)
            
            var dis = document.querySelector('#promo');
            var x = 0;
            if (count<=1){
                  if (dis.value == "masai30"){
                        x = +el.price - (+el.price*30/100);
                  }
                  else{
                        x = +el.price;
                  };
                  el.price = x;
                  
            }
            localStorage.setItem("ttp", ttp);
            return el.price; 
      })
      // console.log(cart)
      display(cart);
};

function display(cart){
      document.querySelector('#cart').innerHTML="";
      var x = 0;
      cart.map(function(el,i){
            window.location.reload;
            var price = document.querySelector('#price');
            x += el.price
            ttp = x;
            price.innerText = '$ '+ ttp;
            localStorage.setItem('ttp',ttp);
            console.log(ttp)
            var div = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("src", el.image_url);
            var name = document.createElement("p");
            name.innerText = el.name;
            var price = document.createElement("p");
            price.innerText = el.price;
            var strike = document.createElement("p");
            strike.innerText = el.strikedoffprice;
            var remove = document.createElement("button");
            remove.innerText = 'Remove';
            remove.addEventListener('click', function (){
                  Remove(el,i)
            })

            
            div.append(img,name,price,strike,remove);
            cont.append(div);
      })
}
   

function Remove(el,i){
      cart.splice(i,1);
      tc--;
      ttp-= +el.price;
      localStorage.setItem('ttp',ttp);
      localStorage.setItem('itCount',tc)
      localStorage.setItem('cart',JSON.stringify(cart));
      window.location.reload();
}