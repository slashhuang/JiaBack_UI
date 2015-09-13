
define([], function () {
    function routecfg($routeProvider){
        //主页部分路由
        $routeProvider.
            when("/users",{
                templateUrl: '/view/users/users.html',
                controller: 'userCtrl'})
            .when("/regUsers",{
                templateUrl: '/view/users/users.html',
                controller: 'regUserCtrl'});
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