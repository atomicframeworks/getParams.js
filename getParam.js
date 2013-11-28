/*
                        
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/
/*global document*/

// Get a query string parameter
function getParam(param) {
    "use strict";
    if (param) {
        var query = new RegExp('[?|&]' + param + '(=)?(.*?)(&|#|$)'),
            search = document.URL.match(query);
        if (search) {
            return decodeURIComponent(search[2]);
        }
    }
}