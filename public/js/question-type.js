function JudgeQuestionType(type) {
  var obj;
  switch (type) {
    case "fill":
      obj = addFill();
      break;
    case "single":
      obj = addSingleChoice();
      break;
    case "multiple":
      obj = addMultipleChoice();
      break;
  }
  return obj;
}
