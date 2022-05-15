function addMore(){
    let name = document.getElementById("name").value;

    // check if text box show a error message
    if(name==""){
        document.getElementById("error").innerHTML = "Please Enter The Text";
    }

    else{
       let box  = document.getElementById("box");
       let li = document.createElement("li");
       li.textContent=name;

    // Remove Element

    let a=document.createElement('a');
    a.textContent="x";
    a.href="javascript:void(0)";
    li.appendChild(a);


       let pos=box.firstElementChild;
       if(pos==null){
        box.appendChild(li);
       }
       else{
           box.insertBefore(li,pos);
       }
         // After Adding From Input Clear The Text Box
          document.getElementById("name").value="";
    }
    
    // Removing The Function
     let btn=document.querySelector('ul');
     btn.addEventListener('click', function(e){
        let box  = document.getElementById("box");
        let li =  e.target.parentNode;
        box.removeChild(li); 
     })


}