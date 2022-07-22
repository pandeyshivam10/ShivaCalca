let screen = document.getElementById('output');
buttons = document.querySelectorAll('button');

let inputonscreen = '';

for (item of buttons) {



    item.addEventListener('click', (e) => {

        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            if (inputonscreen[0] == '0' && inputonscreen.length == 1) {
                inputonscreen = '';
            }
            inputonscreen += buttonText;
            screen.value = inputonscreen;
        }
        else if (buttonText == 'AC') {
            inputonscreen = "0";
            screen.value = inputonscreen;
        }
        else if (buttonText == 'sin') {

            screen.value = Math.sin(inputonscreen);
        }
        else if (buttonText == 'log') {
            screen.value = Math.log(inputonscreen);

        }
        else if (buttonText == 'cos') {
            screen.value = Math.cos(inputonscreen);

        }
        else if (buttonText == 'tan') {
            screen.value = Math.tan(inputonscreen);

        }
        else if (buttonText == '√') {
            screen.value = Math.sqrt(inputonscreen);

        }
        else if (buttonText == '∛') {
            screen.value = Math.cbrt(inputonscreen);

        }
        else if (buttonText == 'π') {

            screen.value = screen.value + '3.14';
            inputonscreen += '3.14';


        }
        else if (buttonText == 'X²') {
            screen.value = Math.pow(inputonscreen, 2);

        }
        else if (buttonText == 'x!') {

            n = inputonscreen;
            f = 1;

            for (i = 2; i <= n; i++) {

                f = f * i;
            }
            screen.value = f;

        }
        else if (buttonText == 'DEL') {
            if (!(inputonscreen[0] == '0' && inputonscreen.length == 1)) {

                inputonscreen = inputonscreen.substring(0, inputonscreen.length - 1);
                screen.value = inputonscreen;
            }
        }
        else if (buttonText == '=') {
            try {

                screen.value = eval(inputonscreen);

            } catch
            {
                screen.value = 'ERROR!';
            }
        }
        else {

            if (inputonscreen[0] == '0' && inputonscreen.length == 1) {
                inputonscreen = '';
            }

            inputonscreen += buttonText;
            screen.value = inputonscreen;
        }

    })
}

