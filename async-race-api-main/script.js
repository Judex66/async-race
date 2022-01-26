// создание кнопок и старт поля



const main=document.querySelector('.all');
let garageButn=` <div>
<button id="garage">garage</button>
<button id="winers">to winners</button>
</div>
<div>
<input type="text" id="namecar" >
<input type="color"  id="colorcar">
<button class="crat" id="creat">creat</button> 
</div>
<div>
<button id="race">
    race
   </button>
<button id="reset">
    reset
</button>
<button id="generate">
   generate
</button>
</div>
<div class="road12">

    </div>
`;
//
main.innerHTML=garageButn;

// добавление нового поля машины


