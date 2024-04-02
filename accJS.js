document.addEventListener('DOMContentLoaded', ()=> {

    localStorage.getItem("name");

  if (localStorage.getItem("name")) {
    
    window.location.href ="./rules.html";

  }

})

function accEnter() {
  
  if (document.getElementById("input1").value === "" ||document.getElementById("input2").value === ""  ) {
    
    document.getElementById("errtext").innerHTML = "Il manque des information !"

  }
  else {

    document.getElementById("errtext").innerHTML = "Bienvenue ! :)"
    document.getElementById("errtext").style.color = "green" ;
    localStorage.setItem('name', document.getElementById("input1").value)
    setTimeout(() => {
      
      window.location.href = "./rules.html";

    }, 500);
  }

}