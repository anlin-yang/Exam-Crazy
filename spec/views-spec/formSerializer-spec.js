describe("Dom Test", function() {
  var form;
  beforeEach(function() {
    var foo = document.createElement("div");
    foo.id = "test-container";
    document.body.appendChild(foo);
    var testContainer = document.getElementById('test-container');
    testContainer.innerHTML = "<form>" + "一、填空题" +
      "<br>1. UML 的中文全称是:<input type='text' name='question1' value='桃子'/> </br>" +
      "2. 对象最突出的特征是:<input type='text' name='question2' value='葡萄'/>" +
      "<input type='text' name='question2' value='橘子'/>" +
      "<input type='text' name='question2' value='荔枝'/>" +
      "<br>1.UML 与软件工程的关系是:<br><input type='radio' name='question3' value='A' checked />A </br>" +
      "<input type='radio' name='question3' value='B'/>B" +
      "<br>1. 用例的粒度分为以下哪三种。</br><input type='radio' name='question4' value='A' checked />A " +
      "<br><input type='radio' name='question4' value='B' />B</br>" +
      "<input type='radio' name='question4' value='C'/>C" + "<br>1. 用例的粒度分为以下哪三种。</br><input type='checkbox' name='question5' value='A' checked />A " +
      "<br><input type='checkbox' name='question5' value='B' checked />B</br>" +
      "<input type='checkbox' name='question5' value='C' checked/>C";
    form = document.getElementsByTagName('form')[0];
  });
  it('should return correct tag name', function() {
    var forminfo = new formSerializer();
    var foos = forminfo.getFormInfo(form);
    expect(foos).toEqual(
      [{
        name: "question1",
        type: "text",
        value: ["桃子"]
      }, {
        name: "question2",
        type: "text",
        value: ["葡萄", "橘子", "荔枝"]
      }, {
        name: "question3",
        type: "radio",
        value: ["A"]
      }, {
        name: "question4",
        type: "radio",
        value: ["A"]
      }, {
        name: "question5",
        type: "checkbox",
        value: ["A", "B", "C"]
      }]
    );
  });
});
