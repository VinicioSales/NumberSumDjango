function sum() {
    const num = document.getElementById("num").value;
    fetch("/user_explorer/sum/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: `num=${num}`
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "Result: " + data.result;
    });
}
