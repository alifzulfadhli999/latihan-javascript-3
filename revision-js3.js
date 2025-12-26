const hE1 = document.getElementById('height');
const wE1 = document.getElementById('weight');
const msg = document.getElementById('msg');

function category(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 20) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'obese';
}

document.getElementById('calcBtn').addEventListener('click', () => {
  msg.className = '';
  const h = Number(hE1.value);
  const w = Number(wE1.value);

  if (!h || !w || h <= 0 || w <= 0) {
    msg.className='error';
    msg.textContent = 'please enter valid height and weight';
    return;
  }

  const meters = h / 100;
  const bmi = w / (meters * meters);
  msg.textContent = `BMI:${bmi.toFixed(1)} (${category(bmi)})`;
});

