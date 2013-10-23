/*
                        
       ##    #####      Copyright (c) - Kevin McGinty
     # _ #  ###        
    #   #  #            AtomicFrameworks
    
*/

function getParam(param) {
  if (param) {
     var query = new RegExp('[?|&]'+param+'(=)?(.*?)(&|#|$)');
     var search = document.URL.match(query);
     if (search){
       return decodeURIComponent(search[2]);
     }                     
  }
}
