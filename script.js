function calculateBMI() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  const resultEl = document.getElementById("result");
  const idealEl = document.getElementById("ideal-weight");

  if (!height || !weight || !age) {
    resultEl.textContent = "Please enter valid age, height, and weight.";
    idealEl.textContent = "";
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  resultEl.textContent = `BMI: ${bmi} (${category})`;

  // Ideal weight range (18.5 – 24.9 BMI)
  const minWeight = (18.5 * heightM * heightM).toFixed(1);
  const maxWeight = (24.9 * heightM * heightM).toFixed(1);

  idealEl.textContent = `Ideal weight range: ${minWeight} – ${maxWeight} kg`;
}

function resetForm() {
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("ideal-weight").textContent = "";
  document.querySelector('input[name="gender"][value="male"]').checked = true;
}
