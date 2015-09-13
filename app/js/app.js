/**
 * Created by slashhuang on 15/8/21.
 */
define(['angular','config/routeConfig','lib/angular-route','controllers/controllers'],
    function(angular,routeConfig){

      var app = angular.module('app', ["ngRoute",'controllers']);
      //配置路由
      app.config(routeConfig);
      angular.bootstrap(document, ['app']);
    });