// ==UserScript==
// @name      Official Friend Finder Comment Checker
// @namespace https://github.com/r-psnfriends-mods
// @author    Flori4nK
// @license   https://flori4nk.de/LICENSE
// @version   1.1
// @grant     none
// @match 	  https://www.reddit.com/r/PSNFriends/comments/*
// ==/UserScript==

document.getElementsByClassName("flat-list buttons")[0].innerHTML += "<li><button id='offcc-userscript-mainbtn'>OFFCC</button></i>";

document.getElementById("offcc-userscript-mainbtn").addEventListener ("click", OFFCC_CLICK, false);

var comments = document.querySelectorAll(".thing.noncollapsed.comment > .entry > form > .usertext-body > .md");

function OFFCC_CLICK() {
  var found = 0;
  for(i = 0; i < comments.length; i++) {
	if(!comments[i].innerText.match(/\w{1,3}\b *\/.+\/[\s\S]+/g)) {
    		comments[i].style.background = "yellow";
    		found++;
    	}
  }
  document.getElementById("offcc-userscript-mainbtn").innerText = "OFFCC: " + found;
}
