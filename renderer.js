const { shell } = require("electron");

function openSite(site) {
  const links = {
    gmail:    "https://mail.google.com/mail/u/0/#inbox",
    leetcode: "https://leetcode.com/u/Shreywsi/",
    github:   "https://github.com/dashboard",
    noise:    "https://www.youtube.com/watch?v=nU0UTnGgYOg&t=5270s"
  };
  shell.openExternal(links[site]);
}

function closeApp() {
  window.close();
}