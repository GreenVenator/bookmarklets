let output = "javascript:" + encodeURIComponent(`(function(){${prompt("Enter code to bookmarkletify:").trim()}})();`);
document.body.focus(); 
navigator.clipboard.writeText(output);
console.log(output);
