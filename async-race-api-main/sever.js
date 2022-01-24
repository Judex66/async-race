// //запросы на сервак
 const adress='http://127.0.0.1:3000/garage';
 fetch(adress)  
 .then((response) => {
  return response.json();
 })
 .then((data) => {
  for (let i=0;i<data.length;i++){
let docum=document.querySelector('.road12');
docum.innerHTML+=`
<div class="road">

    <button data-action="motion"  class="delet" name="deet">A</button>
<button data-action="motion2" class="start">B</button>       <p class="car_name">${data[i].name}</p>
<img src="/svg/car.svg" alt="" style="background-color: ${data[i].color};width:50px;height:auto">

<p>____________________________________________________________________________________________________________________</p >
</div>
`
          console.log(data[i])
  }

 })
   .catch(function(err) {  
     console.log('Fetch Error :-S', err);  
  });