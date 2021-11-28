function ajax(){

    // Creating an XHR object
    var xhttp = new XMLHttpRequest();
    // Eventlistner
    
    
    xhttp.onreadystatechange = function(){
        // Condition
        if(this.readyState==4&&this.status==200){
            // document.getElementById("demo").innerHTML = this.responseText;
            var response = JSON.parse(this.responseText);                                     
            var output ="";
            for(var i=0;i<response.length;i++){
                output +=`
 
 <table>             
                
     <tbody>

     <tr>
        
      <td><input type="checkbox"  ${response[i].completed ? "checked ='true'" : ""} name="brand">
      <label for="packers" class="strikethrough">${response[i].title}</label></td>       
               
    </tr>

      </tbody>
</table>`;  //here + symbol is used to keep all the names otherwise each name will replaced everytime when we hit submit.
            }



            
    
            console.log(output);
            document.getElementById("demo").innerHTML = output;
    
    
        }
    }




    
    
    // xhttp.open("GET", "ajax.txt", true );
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true );
    xhttp.send();
    }
   
    
      var demo = document.getElementById("demo");
      demo.addEventListener('change', function() {
      setTimeout(()=>{
        let checkbox = document.querySelectorAll ('input[type="checkbox"]:checked');
        if (checkbox.length == 95)
        alert("Congrats. 5 Tasks have been Successfully Completed");
        })
      });

     


    

    
    