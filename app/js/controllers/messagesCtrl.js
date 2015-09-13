/**
 * Created by slashhuang on 2015/9/13.
 */
define([],function(){
    var messagesCtrl=function($scope,$routeParams,$location,$http){
        $scope.messagesData= [{
            id:1,
            tags:"开心",
            description:"testing json data,waiting for db data",
            imgNum:2,
            location:"nanjing",
            createTime:"2015-08-22 01:06:01",
            refreshTime:"	2015-08-22 01:06:01 "
        }]
    };
    messagesCtrl.$inject=['$scope', '$routeParams', '$location', '$http'];
    return messagesCtrl;
});