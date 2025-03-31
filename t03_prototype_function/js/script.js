String.prototype.removeDuplicates = function () {
    return this.trim()
        .split(/\s+/)
        .filter((word, index, arr) => arr.indexOf(word) === index)
        .join(' ');
};