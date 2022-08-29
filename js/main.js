// Start Variables ...

// select 
let proccess = document.getElementById("proccess");

// result code
let text_input = document.getElementById("text_input");

// result code
let result = document.getElementById("result");

// ---------------------------------
// ---------------------------------
// test ...
// console.log(proccess);
// console.log(text_input);
// console.log(result);

// End Variables ...

// Start Function ...

// Start Event 
text_input.addEventListener("input",function () {

    // call function ...
    Encryption_Decryption();    

});

// End  Event 

// ----------------------------------------------------
// ----------------------------------------------------

// Start  Event 
proccess.addEventListener("change" , function (){

    Encryption_Decryption(); 
});

// End  Event 

// ----------------------------------------------------

    function Encryption_Decryption () 
    {
        if (proccess.value == "decode")
        {
            result.value = window.atob(text_input.value);
            
        }else
        {
            result.value = window.btoa(text_input.value);
        }
    }
    
// End  Function ...

// ---------------------------------
// ---------------------------------



