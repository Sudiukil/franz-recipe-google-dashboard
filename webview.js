const path = require('path');

module.exports = (Franz) => {

  const handleLinks = function handleLinks() {
    const whitelist = [
      "drive.google.com",
      "keep.google.com",
      "myaccount.google.com",
      "mail.google.com",
      "play.google.com",
      "maps.google.fr",
      "photos.google.com",
      "translate.google.fr",
      "inbox.google.com",
      "plus.google.com",
      "news.google.fr",
      "docs.google.com",
      "books.google.fr",
      "hangouts.google.com",
      "classroom.google.com"
    ];
    const elems = document.querySelectorAll('a');

    elems.forEach(function(e) {
      if(whitelist.includes(e.host)) e.onclick = function() {
        location.href=this.href;
        return false;
      }
    })
  }

  Franz.loop(handleLinks);
};
