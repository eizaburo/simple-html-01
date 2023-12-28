const btn_submit = document.getElementById("btn_submit");

const _name = document.getElementById("name");
const _email = document.getElementById("email");
const _body = document.getElementById("body");

const _name_error = document.getElementById("name_error");
const _email_error = document.getElementById("email_error");
const _body_error = document.getElementById("body_error");

btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (_name.value == "") {
        _name_error.classList.remove("hidden");
    }

    if (_email.value == "") {
        _email_error.classList.remove("hidden");
    }

    if (_body.value == "") {
        _body_error.classList.remove("hidden");
    }

    if (_name_error.classList.contains("hidden") &&
        _email_error.classList.contains("hidden") &&
        _body_error.classList.contains("hidden")) {
        alert(`name=${_name.value}, email=${_email.value}, body=${_body.value}`);
    }
});