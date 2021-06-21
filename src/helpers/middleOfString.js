function middleOfString(string, amount) {
  return string.slice(
    Math.floor((string.length - amount) / 2),
    Math.floor((string.length - amount) / -2)
  );
}

export default middleOfString;
