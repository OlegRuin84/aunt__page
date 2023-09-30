let button = document.querySelector('.form__button')

    button.onclick = function () {

        let email = document.querySelector('.email');
        
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log(email.value)
        
        if (email.value.match(validRegex)) {
        //    true;
        // console.log(true);
        email.classList.add('_good');     
        email.classList.remove('_error');   
        } else {
        //'false';
        // console.log(false);
        email.classList.add('_error');
        }
        // ===============================
       /* function CheckPassword(inputtxt) 
        { 
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(inputtxt.value.match(decimal)) 
        { 
        alert('Correct, try another...')
        return true;
        }
        else
        { 
        alert('Wrong...!')
        return false;
        }
        } 
        */

        // ===============================
        let pass = document.querySelector('.password')


        
        
        var validPassRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            
        if (pass.value.match(validPassRegex)) {
  /*              true;
            console.log(true);*/
            pass.classList.add('_good');
            pass.classList.remove('_error');   
            } else {
  /*          'false';
            console.log(false);*/
            pass.classList.add('_error');
            }
               
    }

