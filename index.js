let screen = document.getElementById('output');
buttons = document.querySelectorAll('button');

let inputonscreen = '';

for(item of buttons) {

    item.addEventListener('click', (e) => {

        buttonText = e.target.innerText;
       
        if (buttonText == 'X') {
            buttonText = '*';
            if(inputonscreen[0]=='0' && inputonscreen.length==1)
            {
                inputonscreen='';
            }
            inputonscreen += buttonText;
            screen.value = inputonscreen;
        }
        else if (buttonText == 'AC') {
            inputonscreen = "0";
            screen.value = inputonscreen;
        }
       else if(buttonText=='←')
        {
            if(!(inputonscreen[0]=='0' && inputonscreen.length==1))
            {
                
                inputonscreen=inputonscreen.substring(0,inputonscreen.length-1);
                screen.value = inputonscreen;
            }
        }
        
        else if (buttonText == '=') {
            try{

                screen.value = eval(inputonscreen);
                
            }catch
            {
                screen.value='ERROR!';
            }
        }
        else {

            if(inputonscreen[0]=='0' && inputonscreen.length==1)
            {
                inputonscreen='';
            }
           
            inputonscreen += buttonText;
            screen.value = inputonscreen;
        }

    })
}

