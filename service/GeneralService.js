'use strict';


/**
 * Upload a file using xhr2
 * The only way to upload a file
 *
 * body   (optional)
 * no response value expected for this operation
 **/
exports.fileUploadXhr2POST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get student
 * Returns an array of settings
 *
 * uuid String 
 * format String 
 * no response value expected for this operation
 **/
exports.get_photo_of_student = function(uuid,format) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Keep-alive the session
 * Returns the current data for the user
 *
 * body   (optional)
 * no response value expected for this operation
 **/
exports.heartbeat = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get settings
 * Returns an array of settings
 *
 * any String 
 * no response value expected for this operation
 **/
exports.settings = function(any) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get login information from SEQTA. REQUIRES THE _ga COOKIE.
 * Returns name, some info about the user and (if applicable) SAML information
 *
 * body  
 * no response value expected for this operation
 **/
exports.updatePet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

