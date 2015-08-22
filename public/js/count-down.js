  var a=6;
  function fomtime()
  {
    a=a-1;
    if(a >= 0) {
      document.getElementById('minua').innerHTML = whetherSingle(parseInt(a / 60));
      document.getElementById('secoa').innerHTML = whetherSingle(a % 60);
    }
    else {
      document.getElementById('minua').innerHTML = '00';
      document.getElementById('secoa').innerHTML = '00';
    }
    setTimeout("fomtime()",1000);
  }
  fomtime();
  function whetherSingle(num) {
        return num < 10 ? '0' + num : num;

      };
