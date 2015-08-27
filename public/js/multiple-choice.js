$(function () {
    $('#multipleEmpty').on('click', function () {
        $('.input').val("");
        [].forEach.call($("[name='multipleAnswer']"), function (elem) {
            elem.checked = false;
        });
    });

    $('#multipleSure').click(function () {
        var allmultiple = $("[name='multipleQuestion']");
        var item = $("[name='multipleAnswer']");
        var answer;
        for (var x = 0; x < item.length; x++) {
            if (item[x].checked) {
                answer += item[x].value;
            }
        }

        var questionInformation = '', questionOptions = [], count = 1;
        var option = ['question', 'A', 'B', 'C', 'D'];

        for (var m = 0; m < allmultiple.length; m++) {
            if (!(allmultiple[m].value)) {
                var itemOne = '#' + option[m] + 'multipleoption';
                $(itemOne).show();
                $(itemOne).delay(3000).hide(1);
            } else {
                if (m === 0) {
                    questionInformation = allmultiple[m].value;
                } else {
                    questionOptions.push(option[m] + ':' + allmultiple[m].value);
                    count++;
                }
            }
        }

        if (count === allmultiple.length) {
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
