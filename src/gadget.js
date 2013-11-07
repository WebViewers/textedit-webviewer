/*global window, rJS */
(function () {
  "use strict";

  rJS(window).ready(function () {
    rJS(window).declareMethod('setContent', function (value) {
      return rJS(this).context.find('textarea').val(value);

    }).declareMethod('getContent', function () {
      return rJS(this).context.find('textarea').val();

    }).declareMethod('setReadOnly', function (isReadOnly) {
      if (isReadOnly) {
        rJS(this).context.find('textarea').attr('readonly', 'readonly');
      } else {
        rJS(this).context.find('textarea').removeAtte('readonly');
      }
    });
  });

}());
