

export const helperFunction = {
    saveItem: function (name, value) {
        localStorage.setItem(`${name}`, JSON.stringify(value));
    },
    removeItem: function (name) {
        localStorage.removeItem(name);
    },
    encryptUserData: function (data, token) {
        if (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
        if (token) {
            localStorage.setItem('uToken', JSON.stringify(token));
        }
        return true;
    },
    getUserKey: function (keys = null) {
        let userData = localStorage.getItem(keys);
        return userData;
    }, getToken: function () {
        let userData = localStorage.getItem('uToken');
        if (userData) {
            return userData;
        }
        return {};
    },
    getHeaders: function () {
        let token = JSON.parse(localStorage.getItem('uToken'));
        let headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        };
        if (token) {
            headers["Authorization"] = "Bearer " + token;
            headers["access-token"] = token;
        }
        return headers;
    }
    , logout: function () {
        localStorage.removeItem('uToken');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('WalletAddress')
    }
}