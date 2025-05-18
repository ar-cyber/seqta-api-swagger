'use strict';

var utils = require('../utils/writer.js');
var General = require('../service/GeneralService');

module.exports.fileUploadXhr2POST = function fileUploadXhr2POST (req, res, next, body) {
  General.fileUploadXhr2POST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_photo_of_student = function get_photo_of_student (req, res, next, uuid, format) {
  General.get_photo_of_student(uuid, format)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.heartbeat = function heartbeat (req, res, next, body) {
  General.heartbeat(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.settings = function settings (req, res, next, any) {
  General.settings(any)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePet = function updatePet (req, res, next, body) {
  General.updatePet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
