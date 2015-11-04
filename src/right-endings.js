(function (angular) {
    'use strict';

    angular.module('right-endings', []).directive('rightEndings', rightEndingsDirective);

    function rightEndingsDirective(){
        return {
            restrict: 'E',

            scope: {
                values: '=',
                number:'='
            },
            template: '{{result}}',
            controller: function($scope){

                $scope.$watch('number',function(){
                    var sEnding, i;
                    var iNumber = $scope.number % 100;
                    if (iNumber>=11 && iNumber<=19) {
                        sEnding=$scope.values[2];
                    }
                    else {
                        i = iNumber % 10;
                        switch (i)
                        {
                            case (1): sEnding = $scope.values[0]; break;
                            case (2):
                            case (3):
                            case (4): sEnding = $scope.values[1]; break;
                            default: sEnding = $scope.values[2];
                        }
                    }
                    $scope.result = sEnding;
                })



            }
        };
    }
})(angular);
