
const tasksList = document.querySelector(".road12");
function saveData() {
    localStorage.setItem("race", tasksList.innerHTML);
  }
  


  function loadData() {
    if (localStorage.getItem("race")) {
      tasksList.innerHTML = localStorage.getItem("race");
    }
  }
  loadData() ; 
function buttonsAll(){
let craname=document.getElementById('namecar')
      let cracolor=document.getElementById('colorcar')
      let name1=craname.value;
      let color1=cracolor.value;

   if(event.target.closest(".crat")){
        var elem = document.createElement("div");
             elem.innerHTML = `
             <div class="road">
        
                 <button data-action="motion"  class="delet" name="deet">A</button>
         <button data-action="motion2" class="start">B</button> <p class="car_name">${name1}</p>
            <img src="/svg/car.svg" alt="" style="background-color: ${color1};width:50px;height:auto">

            <p>____________________________________________________________________________________________________________________</p >
            </div>
          `;
            document.querySelector(".road12").appendChild(elem);
    }
    if(event.target.closest(".crat")){
      
      let newPost={
        name:  name1 ,
        color:color1,
        id:data[i]+1,
      }
      fetch("http://127.0.0.1:3000", {
        method: "POST", 
        body: JSON.stringify(newPost), 
        headers: {
          
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data) 
        })
      
    }
    if(event.target.closest("#reset")){
        document.querySelector(".road12").innerHTML='';
    }
    if(event.target.closest(".delet")){
  document.querySelector('.road').remove();
    }
    saveData();
}
export default buttonsAll;
