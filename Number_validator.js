function telephoneCheck(str) {
  let phone_regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
if (phone_regex.test(str)) {
return true
}
else {
  return false
}
}

telephoneCheck("555-555-5555");
