'use strict';

angular.module('stanley-gu.angular-rickshaw', []).directive('rickshaw', function() {
    return {
        template: '<div></div>',
        restrict: 'E',
        scope: {
            data: '='
        },
        link: function postLink(scope, element, attrs) {
            scope.$watch('data', function(newVal, oldVal) {
              if (!newVal) {
                return;
              }
              element[0].innerHTML = '';
              var graph = new Rickshaw.Graph({
                  element: element[0],
                  width: attrs.width,
                  height: attrs.height,
                  series: scope.data,
                  renderer: 'line'
              });
              var hoverDetail = new Rickshaw.Graph.HoverDetail({
                graph: graph
              });
              graph.render();
            });
        }
    };
});
