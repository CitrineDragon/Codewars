// https://www.codewars.com/kata/55c423ecf847fbcba100002b/train/javascript

// Oh no, Timmy's received some hate mail recently but he knows better. Help Timmy fix his regex filter so he can be awesome again!

function filterWords(phrase) {
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi, 'awesome');
}
