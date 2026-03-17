const inputs = document.querySelectorAll(".otp-box");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9]/g, "");
        if (input.value && index < inputs.length - 1) inputs[index + 1].focus();
        checkOTPComplete();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) inputs[index - 1].focus();
    });
});

inputs[0].addEventListener("paste", (e) => {
    const pasteData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, inputs.length);
    pasteData.split("").forEach((char, i) => inputs[i] && (inputs[i].value = char));
    inputs[Math.min(pasteData.length, inputs.length) - 1]?.focus();
    checkOTPComplete();
    e.preventDefault();
});

function checkOTPComplete() {
    const otp = [...inputs].map(input => input.value).join("");
    if (otp.length === inputs.length) console.log("OTP Entered:", otp);
}
