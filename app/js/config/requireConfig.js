/**
 * Created by slashhuang on 15/8/21.
 */
require.config({
    baseUrl:"/js",
    paths:{
        "angular":"lib/angular.min",
        "angular-route":"lib/angular-route.min",
    },
    shim:{
        "angular":{
            "exports":"angular"
        },
        "angular-route": {
            deps: ["angular"]
        }
    }
});