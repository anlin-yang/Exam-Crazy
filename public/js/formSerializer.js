function formSerializer() {
}

formSerializer.prototype.getFormInfo = function(form) {
  function getResult(val, result) {
    for (var i = 0; i < result.length; i++) {
      if (val.name === result[i].name) {
        result[i].value.push(val.value);
        return;
      }
    }
    result.push({
      name: val.name,
      type: val.type,
      value: [val.value]
    });
  }
  var result = [];
  [].forEach.call(form, function(val) {
    if (val.type === "text" || val.checked) {
      getResult(val, result);
    }
  });
  return result;
};
