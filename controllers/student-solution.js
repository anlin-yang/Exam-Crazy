var models = require('../models');
var STATUS = require('../public/js/status.js');

var StudentSolution = {};

StudentSolution.getStudentSolution = function(req, res) {
  var user = answer.bulkCreate(req.body.data).then(function(data) {
    if (data.length === 0) {
      res.send({
        status: status.QUR_ERROR,
        messageg: {},
        data: {}
      });
    } else {
      res.send({
        status: status.DATA_SUCCESS,
        messageg: {},
        data: {}
      });
    }
  });
};

module.exports = StudentSolution;
