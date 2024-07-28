let  displayscreen =document.getElementById('display');
let buttons =document.querySelectorAll('button');
let string='';
let clear=document.getElementById('clearAll');
let buttonArr=Array.from(buttons);
buttonArr.forEach(btn=>{
    btn.addEventListener('click',function(event){
        if(event.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            displayscreen.value=string;
        }
        else if (event.target.innerHTML=='C') {
            string='';
            displayscreen.value=string;
        }
        else if(event.target.innerHTML=='='){
            string=eval(string);
            displayscreen.value=string;
        }
        
        else{
            string+=event.target.innerHTML;
            displayscreen.value=string;
        }
    })
});
