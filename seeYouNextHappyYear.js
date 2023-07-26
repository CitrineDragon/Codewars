// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript

function nextHappyYear(year) {
  let i = year + 1;
  while (new Set(String(i)).size < 4) {
    i++;
  }
  return i;
}
