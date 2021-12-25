var NumCinK=0, NumCinY=0, NumExist=0, menuOpen=Boolean(false);

onLoad();
function onLoad() {
  AOS.init();
    // document.getElementById("btn").addEventListener("click",onclickf);
    document.getElementById("Humburger").addEventListener("click",clickhamb);

    for ( var i = 0; i < document.getElementsByClassName("gdudim").length; i++) {
      document.getElementsByClassName("gdudim")[i].addEventListener("click",onClickGdud);
      
    }

    setTimeout(() => {
        
        numbers();
    }, 1000);
    
}

function clickhamb(event) {
  // if(menuOpen==false) {
  //   document.getElementById("menu").style.opacity="1";
  //   menuOpen=true;
  // } else {
  //   setTimeout(() => {
      
  //     document.getElementById("menu").style.opacity="0";
  //     menuOpen=false;
  //   }, 800);
  // }
  // document.getElementById("nahshon").classList.toggle("open");
  // document.getElementById("maoz").classList.toggle("open");
  // document.getElementById("lahav").classList.toggle("open");
  // document.getElementById("gefen").classList.toggle("open");

  document.getElementById("menu").classList.toggle('open');
  console.log(document.getElementById("menu").classList+"toggle");
  if(document.getElementById("menu").className=="open"){
    console.log("opennn");
        window.addEventListener('mouseup', function(e) {
          if (e.target != document.getElementById("menu")&& e.target!=document.getElementById("Humburger")) {
            document.getElementById("menu").classList.remove("open");
          }
          this.removeEventListener('mouseup', arguments.callee);

      });
      
    }// } else {
  //   // document.getElementById("menu").classList.toggle('open');

  // }
    
  // document.getElementById("menu").classList.toggle("menuOpacity");
}


function openHamborger(){
  document.getElementById("menu").style.height="10em";
  menuOpen=true;

  for ( var i = 0; i < document.getElementsByClassName("gdudim").length; i++) {
    // document.getElementsByClassName("gdudim")[i].style.height="2em";
    // document.getElementsByClassName("gdudim")[i].style.fontSize="1.5em";

  }
}

function closeHamburger() {
  
  for ( var i = 0; i < document.getElementsByClassName("gdudim").length; i++) {
    // document.getElementsByClassName("gdudim")[i].style.height="0";
    
  }
  document.getElementById("menu").style.height="0";
  menuOpen=false;
  setTimeout(() => {
    
  }, 800);

}

function onClickGdud(event) {
  document.getElementById("menu").classList.remove('open');
    console.log("btn");
    var gdudName=this.id;
    console.log(gdudName);
    document.getElementById(gdudName+"-saction").scrollIntoView();
    // window.scrollTo(0, 50);
    
    // clickhamb();

}

function numbers() {

        var intr = setInterval(function() {
            document.getElementById("Ny").innerText=String(NumCinY);
            NumCinY=NumCinY+125;
            if (NumCinY > 8001) {
                clearInterval(intr);
                document.getElementById("Ny").style.fontWeight="bold";
                document.getElementById("Ny").classList+=" animate__animated animate__pulse";
              }
          }, 30)
          
        var intrK = setInterval(function() {
            document.getElementById("Nk").innerText=String(NumCinK);
            NumCinK=NumCinK+10;
            if (NumCinK > 1800) {
              clearInterval(intrK);
              document.getElementById("Nk").style.fontWeight="bold";
              document.getElementById("Nk").classList+=" animate__animated animate__pulse";

            }
          }, 11)

        var intrEX = setInterval(function() {
            document.getElementById("Exy").innerText=String(NumExist);
            NumExist=NumExist+1;
            if (NumExist > 59) {
              clearInterval(intrEX);
              document.getElementById("Exy").style.fontWeight="bold";
              document.getElementById("Exy").classList+=" animate__animated animate__pulse";

            }
          }, 35)
}