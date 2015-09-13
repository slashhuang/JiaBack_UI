/**
 * Created by slashhuang on 2015/9/13.
 */
define([],function(){
    var activityCtrl=function($scope,$routeParams,$location,$http){
        $scope.activityData= [{
            id:1,
            name:"加信启动仪式",
            startTime:"2015-08-22 01:06:01",
            endTime:"2015-08-22 01:06:01",
            location:"翘楚城",
            initiator:"加信科技",
            createTime:"2015-08-22 01:06:01",
        }]
    };
    activityCtrl.$inject=['$scope', '$routeParams', '$location', '$http'];
    return activityCtrl;
});