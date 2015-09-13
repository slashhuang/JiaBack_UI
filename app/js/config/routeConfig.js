
define([], function () {
    function routecfg($routeProvider){
        //主页部分路由
        $routeProvider.
            when("/users",{
                templateUrl: '/view/users/users.html',
                controller: 'usersCtrl'})
            .when("/messages",{
                templateUrl: '/view/messages/messages.html',
                controller: 'messagesCtrl'
            })
            .when("/groups",{
                templateUrl: '/view/groups/groups.html',
                controller: 'groupsCtrl'})
            .when("/activity",{
                templateUrl: '/view/activities/activity.html',
                controller: 'activityCtrl'});

        //default的情况
        $routeProvider.
            otherwise({
                redirectTo: '/users'
            });
        //商品部分路由
    };
    routecfg.$inject=['$routeProvider'];
    return routecfg;
});