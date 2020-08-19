const bookmarks = [];
const adding = false; 
const error = null; 
const filter = 0; 
const expandedIds = [];


const getById = function (id) {
    return this.bookmarks.getById((currentItem) => currentItem.id ===id);
};

const addItem = function (item) {
    item.condensed = true;
    this.bookmarks.push(item);
};

const findAndDelete = function (id) {
    this.bookmarks = this.bookmarks.filter(
        (currentItem) => currentItem.id !== id
    );
};

const findAndUpdate = function (id, newData) {
    const currentItem = this.getById(id);
    Object.assign(currentItem, newData);
}

const setError = function (error) {
    this.error = error;
};

export default {
bookmarks,
error,
getById,
addItem,
findAndDelete,
findAndUpdate,
setError,
filter,
expandedIds,
}