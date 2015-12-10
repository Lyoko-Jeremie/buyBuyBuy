var app = angular.module('myApp', []);

app.run(
    function ($rootScope) {
        $rootScope.a = "Ari Lener";
        $rootScope.logoData = {
            heightPx: 50
        };
        $rootScope.menuData = {
            topPx: $rootScope.logoData.heightPx,
            heightPx: 20
        };

        $rootScope.centerData = {
            NowPage: "subtemplate/init.html"
        };
        $rootScope.centerData.topHrPx = $rootScope.menuData.topPx + $rootScope.menuData.heightPx;
        $rootScope.centerData.topPx = $rootScope.centerData.topHrPx;
        $rootScope.centerData.heightPx = 200;
        $rootScope.centerData.downHrPx = $rootScope.centerData.heightPx + $rootScope.centerData.topPx;


        $rootScope.bottomData = {
            topPx: $rootScope.centerData.downHrPx

        };
        $rootScope.bottomData.topAbout = {
            //topPx: $rootScope.bottomData.topPx,
            line1: 20,
            line2: 20 * 2,
            line3: 20 * 3,
            line4: 20 * 4,
            line5: 20 * 5,
            line6: 20 * 6
        };
        $rootScope.bottomData.topOther = {
            line1: 0
        };


        $rootScope.user = {
            Name: "ahhhhh",
            Logined: false,
            IsAdmin: false,
            ToLoginIn: function () {
                this.Logined = true;
                this.IsAdmin = true;
            },
            ToLoginOut: function () {
                this.Logined = false;
                this.IsAdmin = false;
            }
        };

    }
);

//angular.module('myApp',[]).factory('UserInfoService', function () {
//
//});


app.controller('userLogin', function ($scope) {
});


app.controller('menu', function ($scope) {
    $scope.AdminFunc = {};
    $scope.AdminFunc.User = function () {

    };
    $scope.AdminFunc.Product = function () {

    };
    $scope.AdminFunc.Check = function () {

    };


    $scope.UserFunc = {};
    $scope.UserFunc.Check = function () {

    };
    $scope.UserFunc.Pay = function () {

    };
    $scope.UserFunc.Search = function () {

    };
    $scope.UserFunc.Help = function () {

    };

});











