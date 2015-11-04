(function (angular) {
    'use strict';

    angular.module('right-endings', []).filter('rightEndings', rightEndings);

    function rightEndings() {
        return function (number, ends) {

            var sEnding, i;
            var iNumber = number % 100;
            if (iNumber >= 11 && iNumber <= 19) {
                sEnding = ends[2];
            }
            else {
                i = iNumber % 10;
                switch (i) {
                    case (1):
                        sEnding = ends[0];
                        break;
                    case (2):
                    case (3):
                    case (4):
                        sEnding = ends[1];
                        break;
                    default:
                        sEnding = ends[2];
                }
            }
            return sEnding;
        }
    }
})(angular);
