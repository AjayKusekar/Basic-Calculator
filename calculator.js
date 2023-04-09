let string = "";
let btns = document.querySelectorAll('.c');
Array.from(btns).forEach((c)=>{
    c.addEventListener('click',(e) =>{ 
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            document.querySelector('.a').value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = " ";
            document.querySelector('.a').value = string;
        }
        else
        {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.a').value = string;
        }      
    })
})
    
    
    
    
    

