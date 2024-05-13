function setCookie(name, value, lifetimeDays=30, path="/") {
  var expires = "";
  if (lifetimeDays) {
      var date = new Date();
      date.setTime(date.getTime() + (lifetimeDays*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=" + path;
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for(var i=0; i < cookies.length; i++) {
      var c = cookies[i];
      while (c.charAt(0) == " ")
          c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
          return c.substring(nameEQ.length, c.length);
  }
  return null;
}