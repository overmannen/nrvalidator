const numberInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


const checkInput = () => {
    if(numberInput.value === "") {
        window.alert("Please provide a phone number")
    }
    else {
        result.innerText = ifValid() ? `Valid US number: ${numberInput.value}` : `Invalid US number: ${numberInput.value}`
    }
    numberInput.value = "";
}
const clearInput = () => {
    result.innerText = "";
    numberInput.value = "";
}

const ifValid = () => {
    const regex = /^1?\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(numberInput.value);
}

checkBtn.addEventListener("click", checkInput)
clearBtn.addEventListener("click", clearInput)
