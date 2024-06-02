document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = parseFloat(document.getElementById("num2").value);
    console.log("enter in cal", num1, num2, operator);
    const formData = { num1, num2, operator };
    fetch("http://localhost:3000/api/cal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        document.getElementById("result").innerText = `Result: ${data.result}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
