// https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript

// DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let remove = ['www.', 'http://', 'https://', 'http://www.', 'https://www.'];
  let domain = remove
    .map((el) => url.replace(el, ''))
    .sort((a, b) => a.length - b.length)[0];
  let dot = domain.indexOf('.');
  return domain.slice(0, dot);
}
