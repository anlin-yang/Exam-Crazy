$(function () {
    $('#singleEmpty').on('click', function () {
        $('.input').val("");
        [].forEach.call($("[name='singleAnswer']"), function (elem) {
            elem.checked = false;
        });
    });

    $('#singleSure').click(function () {
        var allsingle = $("[name='singleQuestion']");
        var item = $("[name='singleAnswer']");
        var answer;
        for (var x = 0; x < item.length; x++) {
            if (item[x].checked) {
                answer = item[x].value;
                break;
            }
        }

        var questionInformation = '', questionOptions = [], count = 1;
        var option = ['question', 'A', 'B', 'C', 'D'];

        for (var m = 0; m < allsingle.length; m++) {
            if (!(allsingle[m].value)) {
                var itemOne = '#' + option[m] + 'singleoption';
                $(itemOne).show();
                $(itemOne).delay(3000).hide(1);
            } else {
                if (m === 0) {
                    questionInformation = allsingle[m].value;
                } else {
                    questionOptions.push(option[m] + ':' + allsingle[m].value);
                    count++;
                }
            }
        }

        if (count === allsingle.length) {
            var information = {
                questionContent: questionInformation,
                questionKey: answer,
                questionPoint: 1,
                typeId: 1,
                optionContent: questionOptions
            };
        }
    });
});
