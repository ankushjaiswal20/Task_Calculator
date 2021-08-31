function backspace(){
    document.getElementById("display").value= document.getElementById("display").value.slice(0, - 1);
    }

function clearScreen(){
    document.getElementById("display").value = "";
   }
   
   
function onScreen(value) {
    if(document.getElementById("display").value.length>30)
        alert("Cannot enter more than 30 digits");
    else
        document.getElementById("display").value += value;
}
        
  
function operations() {
        let p = document.getElementById("display").value;
        let q = eval(p);
        document.getElementById("display").value = q;
        if(document.getElementById("display").value.length>10)
            alert("Calulation limit exceeded");
        else
            document.getElementById("display").value = q;
   }
function percent(){
    let p = document.getElementById("display").value;
    let q = p/100;
    document.getElementById("display").value = q;
}
