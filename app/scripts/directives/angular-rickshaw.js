'use strict';

angular.module('angularRickshawApp').directive('rickshaw', function() {
    return {
        template: '<div></div>',
        restrict: 'E',
        scope: {
            data: '='
        },
        link: function postLink(scope, element, attrs) {
            var graph = new Rickshaw.Graph({
                element: element[0],
                width: attrs.width,
                height: attrs.height,
                series: [{
                    color: 'steelblue',
                    data: scope.data
                }]
            });

            graph.render();
        }
    };
});
