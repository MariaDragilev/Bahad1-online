var NumCinK=0, NumCinY=0, NumExist=0;

onLoad();
function onLoad() {
    document.getElementById("btn").addEventListener("click",onclickf);
    setTimeout(() => {
        
        numbers();
    }, 1000);
    
}

function onclickf(event) {
    console.log("btn");
    document.getElementById("btn").scrollIntoView();
}

function numbers() {

        var intr = setInterval(function() {
            document.getElementById("Ny").innerText=String(NumCinY);
            NumCinY=NumCinY+125;
            if (NumCinY > 8001) clearInterval(intr);
          }, 25)
          
        var intrK = setInterval(function() {
            document.getElementById("Nk").innerText=String(NumCinK);
            NumCinK=NumCinK+10;
            if (NumCinK > 1800) clearInterval(intrK);
          }, 1)

        var intrEX = setInterval(function() {
            document.getElementById("Exy").innerText=String(NumExist);
            NumExist=NumExist+1;
            if (NumExist > 59) clearInterval(intrEX);
          }, 1)
}