const houseMixin = {
    wordReplace(searchWord, replaceWord) {
        this.description = this.description.replace(searchWord, replaceWord);
    },

    wordInsertAfter(targetWord, insertWord) {
        const index = this.description.indexOf(targetWord);
        if (index !== -1) {
            this.description = this.description.slice(0, index + targetWord.length) + ' ' + insertWord + this.description.slice(index + targetWord.length);
        }
    },

    wordDelete(deleteWord) {
        this.description = this.description.replace(deleteWord, '');
    },

    wordEncrypt() {
        this.description = this.description.replace(/[a-zA-Z]/g, function (char) {
            return String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() <= 'm' ? 13 : -13));
        });
    },

    wordDecrypt() {
        this.wordEncrypt();
    }
};