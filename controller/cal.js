exports.calculator = async (req, res, next) => {
  try {
    const { num1, num2, operator } = req.body;
    console.log("req body", req.body);
    let result;
    if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else {
      result = num1 / num2;
    }
    res.status(200).json({ result });
  } catch (error) {}
};
