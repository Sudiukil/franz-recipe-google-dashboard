const path = require('path');

module.exports = (Franz) => {
  function cleanPathname(pathname) {
    if(pathname.substr(-1) === '/') return str.substr(0, str.length-1);
  }

  const handleLinks = function handleLinks() {
    const whitelist = [
      "keep.google.com",
      "drive.google.com",
      "myaccount.google.com",
      "mail.google.com",
      "inbox.google.com",
      "photos.google.com",
      "plus.google.com",
      "news.google.fr",
      "hangouts.google.com",
      "/calendar",
      "/contacts",
    ];
    const elems = document.querySelectorAll('a');

    elems.forEach(function(e) {
      if(whitelist.includes(link.host) || whitelist.includes(cleanPathname(link.pathname))) {
        e.onclick = function() {
          location.href=this.href;
          return false;
        }
      }
    })
  }

  Franz.loop(handleLinks);
};
