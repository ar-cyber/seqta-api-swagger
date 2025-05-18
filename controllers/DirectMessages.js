'use strict';

var utils = require('../utils/writer.js');
var DirectMessages = require('../service/DirectMessagesService');

module.exports.load_messages_1 = function load_messages_1 (req, res, next, body) {
  DirectMessages.load_messages_1(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.load_messages_2 = function load_messages_2 (req, res, next, body) {
  DirectMessages.load_messages_2(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.load_messages_3 = function load_messages_3 (req, res, next, body) {
  DirectMessages.load_messages_3(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.send_message = function send_message (req, res, next, body) {
  DirectMessages.send_message(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
