document.querySelectorAll(".edit-button").forEach(button => {
    button.addEventListener('click', function onClick() {
        const index = Array.from(document.querySelectorAll(".edit-button")).indexOf(button);
        const input_field = document.querySelectorAll("input")[index];
        const icon = document.querySelectorAll("i")[index+1];
        if (input_field.hasAttribute("readonly")){
            input_field.removeAttribute("readonly");
            icon.classList.remove("fa-pen-to-square")
            icon.classList.add("fa-check")
            input_field.focus = true;
        }

        else{
            input_field.readOnly=true;
            icon.classList.remove("fa-check")
            icon.classList.add("fa-pen-to-square")
        }
    });
});

