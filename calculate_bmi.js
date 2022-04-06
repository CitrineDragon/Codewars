// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(w, h) {
  return w / (h * h) <= 18.5
    ? 'Underweight'
    : w / (h * h) <= 25
    ? 'Normal'
    : w / (h * h) <= 30
    ? 'Overweight'
    : 'Obese';
}
