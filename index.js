// const getColor = function()
// {
//     const randomNumber = Math.floor(Math.random * 16777215);
//     const randomCode = "#" + randomNumber.toString(16);
//     document.getElementById("color-code").innerText = randomCode;
//     document.body.style.backgroundColor = randomCode;
// }

// document.getElementById("btn").addEventListener("click", getColor);
const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    // navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// init call
getColor();