const isInt = (num) => {
  let status = false;
  let number = undefined;

  if (!isNaN(num) && Number.isInteger(parseFloat(num))) {
    status = true;
    number = parseFloat(num);
  }

  return [status, number];
};

module.exports = { isInt };
