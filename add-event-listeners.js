let input = document.getElementById("grocery-input");
input.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
        addGrocery();
    }
})