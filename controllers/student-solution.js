var models = require('../models');
var STATUS = require('../public/js/status.js');

var StudentSolution = {};

StudentSolution.getStudentSolution = function(req, res) {
  var user = answer.bulkCreate(req.body.data).then(function(data) {
    if (data.length === 0) {
      res.send({
        status: STATUS.QUR_ERROR,
        messageg: {},
        data: {}
      });
    } else {
      res.send({
        status: STATUS.DATA_SUCCESS,
        messageg: {},
        data: {}
      });
    }
  });
};

module.exports = StudentSolution;
