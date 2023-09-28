function sum() {
    const num = document.getElementById("num").value;
    res = isNumeric(num)
    if (res) {
        console.log(`num: ${num}`);
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
            document.getElementById("title").innerText = "Result: " + data.result;
        });
    } else {
        alert("Numbers only!");
    }
    }

function isNumeric(data) {
    const regex = /^[0-9]+$/;

    if (data.match(regex)) {
        return true;
    } else {
        return false;
    }
}
