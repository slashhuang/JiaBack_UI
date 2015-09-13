/**
 * Created by slashhuang on 2015/9/13.
 */
define([],function(){
    var groupsCtrl=function($scope,$routeParams,$location,$http){
        $scope.groupData= [{
            id:93698,
            name:"留学",
            description:"留学项目",
            capacity:200,
            inNum:10,
            location:"nanjing",
            createTime:"2015-08-22 01:06:01",
            refreshTime:"	2015-08-22 01:06:01 "
        }]
    };
    groupsCtrl.$inject=['$scope', '$routeParams', '$location', '$http'];
    return groupsCtrl;
});