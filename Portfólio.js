
    var modalhtml = document.getElementById("Modal-html");


    var btn1 = document.getElementById("botaohtml");

    btn1.onclick = function() {
        modalhtml.style.display = "block";
    }

    function Fechahtml() {
        modalhtml.style.display = "none";
      }


    var modaljs = document.getElementById("Modal-js");


    var btn2 = document.getElementById("botaojs");

    btn2.onclick = function() {
        modaljs.style.display = "block";
    }

    function Fechajs() {
        modaljs.style.display = "none";
      }


    var modalcss = document.getElementById("Modal-css");


    var btn3 = document.getElementById("botaocss");

    btn3.onclick = function() {
        modalcss.style.display = "block";
    }

    function Fechacss() {
        modalcss.style.display = "none";
      }


    var modalpython = document.getElementById("Modal-python");


    var btn4 = document.getElementById("botaopython");

    btn4.onclick = function() {
        modalpython.style.display = "block";
    }

    function Fechapython() {
        modalpython.style.display = "none";
      }


    window.onclick = function(event) {
        if (event.target == modaljs) {
            modaljs.style.display = "none";
        }
        else if (event.target == modalhtml) {
            modalhtml.style.display = "none";
        }
        else if (event.target == modalcss) {
            modalcss.style.display = "none";
        }
        else if (event.target == modalpython) {
            modalpython.style.display = "none";
        }
    }
    