// This script implements simple routing by loading partial HTML files 
// named corresponding to fragment identifiers.
//
// By Curran Kelleher October 2014

// Wrap everything in an immediately invoked function expression,
// so no global variables are introduced.
var url = 'http://localhost:8000/';

(function () {

  // Base URL


  // Stores the cached partial HTML pages.
  // Keys correspond to fragment identifiers.
  // Values are the text content of each loaded partial HTML file.
  var partialsCache = {}
  
  // Gets the appropriate content for the given fragment identifier.
  // This function implements a simple cache.
  function getContent(fragmentId, callback){

    // If the page has been fetched before,
    if(partialsCache[fragmentId]) {

      // pass the previously fetched content to the callback.
      callback(partialsCache[fragmentId]);

    } else {
      // If the page has not been fetched before, fetch it.
      $.get(url + fragmentId, function (content) {

        // Store the fetched content in the cache.
        partialsCache[fragmentId] = content;

        // Pass the newly fetched content to the callback.
        callback(content);
      }); 

    }
  }

  // Sets the "active" class on the active navigation link.
  function setActiveLink(fragmentId){
    
    $("#menu li a").each(function (i, linkElement) {
      
      var link = $(linkElement), pageName = link.attr("href").substr(1);

      if(pageName === fragmentId) {
        link.closest('li').attr("class", "active");
      } else {
        link.closest('li').removeAttr("class");
      }

    });
  
  }

  // Updates dynamic content based on the fragment identifier.
  function navigate(){

    var fragments = ['blog','dashboard','postgen']
    // Isolate the fragment identifier using substr.
    // This gets rid of the "#" character.
    var fragmentId = location.hash.substr(1);


    if($.inArray( fragmentId , fragments ) != -1)
    {
      // Set the "content" div innerHTML based on the fragment identifier.
      getContent(fragmentId, function (content) {
        $("#mainContent").html(content);
      });

      // Toggle the "active" class on the link currently navigated to.
      setActiveLink(fragmentId);
    }
    else
    {
      alert('page not found!');
      location.hash = "#blog";
    }

  }

  // If no fragment identifier is provided,
  if(!location.hash) {

    // default to #blog.
    location.hash = "#blog";
  }

  // Navigate once to the initial fragment identifier.
  navigate();

  // Navigate whenever the fragment identifier value changes.
  $(window).bind('hashchange', navigate);
}());
