document.getElementById("Germany").addEventListener("click", Germany_clicked);

function Germany_clicked(){
    if(document.getElementById("Germany").checked){
    document.getElementById("Berlin").checked = true;
    document.getElementById("Frankfurt").checked = true;
    document.getElementById("Oldenburg").checked = true;
    }
    else{
        document.getElementById("Berlin").checked = false;
        document.getElementById("Frankfurt").checked = false;
        document.getElementById("Oldenburg").checked = false;   
    }
}

/////////////////////////////////////////////////////////////////////

document.getElementById("Berlin").addEventListener("click", Germany_city_clicked);
document.getElementById("Frankfurt").addEventListener("click", Germany_city_clicked);
document.getElementById("Oldenburg").addEventListener("click", Germany_city_clicked);

function Germany_city_clicked(){
    if(document.getElementById("Berlin").checked 
    && document.getElementById("Frankfurt").checked
    && document.getElementById("Oldenburg").checked)
    document.getElementById("Germany").checked = true;

    if(!document.getElementById("Berlin").checked)
    document.getElementById("Germany").checked = false;

    if(!document.getElementById("Frankfurt").checked)
    document.getElementById("Germany").checked = false;

    if(!document.getElementById("Oldenburg").checked)
    document.getElementById("Germany").checked = false;
}
//////////////////////////////////////////////////////////////////////