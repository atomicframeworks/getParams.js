/*!
                        
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/
/*global window*/

// Get a query string parameter value, an object containing all parameters and values, or a subset in object or array form
var getParams = (function () {
    'use strict';
    // Store key/value pairs of all params
    var paramsObj = decodeURIComponent(window.location.search.slice(1))
            .split('&')
            .reduce(function (obj, param) {
                param = param.split('=');
                obj[param[0]] = param[1];
                return obj;
            }, {}),
        getParams = function (params) {
            var type = Object.prototype.toString.call(params),
                prop,
                ret;
            if (type === '[object Array]') {
                // Type is an array so map each value
                ret = params.map(getParams);
            } else if (type === '[object Object]') {
                // Type is an object so check each key and set the value
                for (prop in params) {
                    if (params.hasOwnProperty(prop)) {
                        params[prop] = getParams(prop);
                    }
                }
                ret = params;
            } else if (params) {
                // Check if stored in the params object
                if (paramsObj.hasOwnProperty(params)) {
                    ret = paramsObj[params];
                } else {
                    // Param is not in query string return null
                    ret = null;
                }
            } else {
                // No param passed return entire object
                ret = paramsObj;
            }
            return ret;
        };
    return getParams;
}());