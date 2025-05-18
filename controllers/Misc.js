'use strict';

var utils = require('../utils/writer.js');
var Misc = require('../service/MiscService');

module.exports.cat = function cat (req, res, next) {
  Misc.cat()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notify_sound = function notify_sound (req, res, next) {
  Misc.notify_sound()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.question_sound = function question_sound (req, res, next) {
  Misc.question_sound()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
