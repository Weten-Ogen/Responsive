const btn = document.querySelector('#icon');

//function to add the media query
function myFunc(){
    let container = document.querySelector('#container');
    if (container.className === "topNav"){
        //adding the responsive style to the container
        container.className += " responsive";

    }else{
        container.className = "topNav";
    }
}

//The Event Listener
btn.addEventListener('click',myFunc,false)
