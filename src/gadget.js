/*global window, rJS */
(function () {
  "use strict";

  rJS(window).ready(function () {

    var area = document.getElementById("textarea-a");

    rJS(window).declareMethod('setContent', function (value) {
      return area.value = value;

    }).declareMethod('getContent', function () {
      return area.value;

    });

  });

}());
