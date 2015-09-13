/**
 * Created by slashhuang on 2015/9/13.
 */
define([],function(){
    var usersCtrl=function($scope,$routeParams,$location,$http){
        $scope.usersData= [{
            hash:'9145f9c146957f05e5b04ed2ea762b2e',
            jiaxinValue:"25905",
            name:"基础用户 沈舫涛小号",
            mobile:15205167080,
            gender:"女",
            hometown:"nanjing",
            createTime:"2015-08-22 01:06:01",
            refreshTime:"	2015-08-22 01:06:01 "
        }]
    };
    usersCtrl.$inject=['$scope', '$routeParams', '$location', '$http'];
    return usersCtrl;
});