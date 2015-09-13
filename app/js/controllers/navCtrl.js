/**
 * Created by slashhuang on 2015/9/13.
 */
define([],function(){
    var navCtrl=function($scope,$routeParams,$location,$http){
        $scope.clicked=0;
       $scope.changeNav =function(index){
           return index== $scope.clicked ? "active" : "";
       }
    };
    navCtrl.$inject=['$scope', '$routeParams', '$location', '$http'];
    return navCtrl;
});