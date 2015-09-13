/**
 * Created by slashhuang on 15/8/21.
 */
define(['angular','config/routeConfig','angular-route'],
    function(angular,routeConfig){
      var app = angular.module('app', ["ngRoute"]);
      //配置路由
      app.config(routeConfig);

      angular.bootstrap(document, ['app']);
    });