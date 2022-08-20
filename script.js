document.getElementById("Germany").addEventListener("click", Germany_clicked);
document.getElementById("USA").addEventListener("click", USA_clicked);

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
//########################################################//



function USA_clicked(){
    if(document.getElementById("USA").checked){
    document.getElementById("Texas").checked = true;
    document.getElementById("Florida").checked = true;
    }
    else{
        document.getElementById("Texas").checked = false;
        document.getElementById("Florida").checked = false;  
    }
}

/////////////////////////////////////////////////////////////////////

document.getElementById("Texas").addEventListener("click", USA_city_clicked);
document.getElementById("Florida").addEventListener("click", USA_city_clicked);


function USA_city_clicked(){
    if(document.getElementById("Texas").checked 
    && document.getElementById("Florida").checked)
    document.getElementById("USA").checked = true;

    if(!document.getElementById("Texas").checked)
    document.getElementById("USA").checked = false;

    if(!document.getElementById("Florida").checked)
    document.getElementById("USA").checked = false;
}