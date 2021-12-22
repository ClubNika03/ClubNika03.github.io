function setCookie(name, options) {
    var value = document.getElementById('ttt').value;
  
      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }
    
      var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    
      for (var optionKey in options) {
        updatedCookie += "; " + optionKey;
        var optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }
    
      document.cookie = updatedCookie;
    }
    
  
  
    function getCookie(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      
      if(matches){
        document.getElementById("ttt").value = decodeURIComponent(matches[1]);
      }
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  
    
  
    function deleteCookie(name) {
      setCookie(name, {path: '/','max-age': -1});
      document.getElementById("ttt").value = "";
    }

    