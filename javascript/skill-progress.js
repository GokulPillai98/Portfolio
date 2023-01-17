var lang = {
    "html": "100%",
    "css": "98%",
    "javascript": "98%",
    "angular": "95%",
    "ionic": "95%",
    "ds": "95%",
    "node": "90%",
    "mysql": "95%"
  };
  
  var multiply = 8;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 400;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });