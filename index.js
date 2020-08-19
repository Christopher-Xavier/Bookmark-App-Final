import render from './render.js';
import  api from './api.js';
import store from './store.js';

function main() {
    return api.fetchBookmarks()
    .then(bookmark => {
        store.bookmarks = bookmark;
        render.bookmarkHome();

    })
}
$(main);