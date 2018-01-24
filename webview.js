const path = require('path');

module.exports = (Franz) => {
  function cleanPathname(pathname) {
    if(pathname.substr(-1) === '/') return pathname.substr(0, pathname.length-1);
    return pathname;
  }

  const handleLinks = function handleLinks() {
    const whitelist = [
      "calendar.google.com",
      "keep.google.com",
      "drive.google.com",
      "myaccount.google.com",
      "mail.google.com",
      "inbox.google.com",
      "hangouts.google.com",
      "photos.google.com",
      "plus.google.com",
      "news.google.fr",
      "contacts.google.com",
      "/calendar",
      "/keep",
      "/drive",
      "/myaccount",
      "/mail",
      "/inbox",
      "/hangouts",
      "/photos",
      "/plus",
      "/news",
      "/contacts",
    ];

    document.querySelectorAll('a').forEach(function(link) {
      if(whitelist.includes(link.host) || whitelist.includes(cleanPathname(link.pathname))) {
        link.onclick = function() {
          location.href = this.href;
          return false;
        }
      }
    });
  }

  Franz.loop(handleLinks);
};
