(function () {
"use strict";

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController ($scope) {
    $scope.lunch = "";
    $scope.lunchMsg = "";
    $scope.msgColor = "";

    $scope.lunchCheck = function() {
        let lunchCnt = $scope.lunch
            .split(",")
            .filter(isNotEmpty)
            .length;
        if (lunchCnt == 0) {
            $scope.lunchMsg = "Please enter data first";
            $scope.msgColor = "red";
        } else if (lunchCnt <= 3) {
            $scope.lunchMsg = "Enjoy!";
            $scope.msgColor = "green";
        } else {
            $scope.lunchMsg = "Too much!";
            $scope.msgColor = "green";
        }
    };
}

function isNotEmpty(item) {
    return item.trim(); // Still need trim to ensure that spaces in between commas are also not counted.
}

})();