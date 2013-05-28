'use strict';

angular.module('511517App')
  .directive('rickshaw', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the rickshaw directive');
      }
    };
  });
