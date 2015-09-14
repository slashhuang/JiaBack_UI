/**
 * Created by slashhuang on 15/8/21.
 */
requirejs.config({
    baseUrl:"/js",
    paths:{
        "angular":"lib/angular",
    },
    shim:{
        "angular":{
            "exports":"angular"
        },
        "lib/angular-route": {
            deps: ["angular"],
        }
    }
});