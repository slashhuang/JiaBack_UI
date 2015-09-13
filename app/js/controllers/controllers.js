/**
 * Created by lianzi on 2015/9/13.
 */

define(['angular','controllers/usersCtrl','controllers/messagesCtrl',
        'controllers/groupsCtrl','controllers/activityCtrl',
        'controllers/navCtrl'],
    function(angular,users,messages,groups,activity,nav){
    var controllers = angular.module("controllers",['ngRoute']);
        controllers.controller("usersCtrl",users);
        controllers.controller("messagesCtrl",messages);
        controllers.controller("groupsCtrl",groups);
        controllers.controller("activityCtrl",activity);
        controllers.controller("navCtrl",nav);

});