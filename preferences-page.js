document.querySelectorAll(".topics").forEach(topic => {
    topic.addEventListener('click', function onClick(){
        if (topic.classList.contains("topics-removed")) {
            topic.classList.remove("topics-removed");
            const icon = topic.querySelector(".topics .icon");
            icon.classList.remove("fa-circle-plus")
            icon.classList.add("fa-circle-xmark");
        }
        else {
            topic.classList.add("topics-removed");
            const icon = topic.querySelector(".topics .icon");
            icon.classList.remove("fa-circle-xmark");
            icon.classList.add("fa-circle-plus")
        }
    });
});
