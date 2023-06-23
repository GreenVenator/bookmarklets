const build =  (input) => {
    let output = "javascript:" + encodeURIComponent(`(function(){${input.trim()}})();`);
    return output;
}

module.exports = { build }