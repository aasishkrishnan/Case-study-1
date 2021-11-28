var sbt = document.getElementById("btn2");
var email1 = document.getElementById("exampleInputEmail1");
var pass1 = document.getElementById("exampleInputPassword1");
var formid = document.getElementById("formlogin");
   
if(formid){



formid.addEventListener('submit', function(evt){
    evt.preventDefault();
             
    if(pass1.value.trim()=="12345" && email1.value.trim()=="admin"){

        location.href = "home.html";
        return true;
    }

    else{
        alert("wrong");
        return false;
    }
    

});

}



// function checklogin(){
//     console.log("function check");
   
    
    
    
  
//     if(pass1.value.trim()=="12345" && email1.value.trim()=="admin"){

//         // alert("Login Successful");
//         console.log("how are you?") ;  
          
                 
//        return true;
    
    
             
//     }

      
//     else{
        
//         str = null;
        
//     }


    
// }

// nextPage(checklogin);

// function nextPage(getchecklogin){
   
//     getchecklogin();    
//     console.log("function next page");
//     document.getElementById("btn2").onclick = function () {
//         location.href = "home.html";
//     };
    
// }










