document.querySelectorAll(".edit-button").forEach(button => {
    button.addEventListener('click', function onClick() {
        const index = Array.from(document.querySelectorAll(".edit-button")).indexOf(button);
        const input_field = document.querySelectorAll("input")[index];
        const icon = document.querySelectorAll("i")[index+1];
        if (input_field.type == "password"){
            input_field.type = "text"
            icon.classList.remove("fa-eye")
            icon.classList.add("fa-eye-slash")
            input_field.focus = true;
        }

        else if (input_field.type == "text"){
            input_field.type = "password"
            icon.classList.remove("fa-eye-slash")
            icon.classList.add("fa-eye")
        }
    });
});

