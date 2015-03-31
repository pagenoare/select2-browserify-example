'use strict';

var $ = require('jquery'),
    _ = require('underscore');

require('Select2');

console.log($);

$(document).ready(function () {
    $('select').select2();
});

module.exports = {};
