export const localStorageService = {
    storagePrefix: 'donation-teaser',

    store: function (value) {
        localStorage.setItem(this.storagePrefix + 'donation-amount', value);
    },

    load: function () {
        return localStorage.getItem(this.storagePrefix + 'donation-amount');
    }
};
