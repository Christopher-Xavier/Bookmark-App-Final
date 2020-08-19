'use strict';
const BASE_URL =
  "https://thinkful-list-api.herokuapp.com/Christopher/bookmarks";

// handle errors where an e is not thrown
const bookmarksApiFetch = async (...args) => {
  // The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
  let error = null;
  const res = await fetch(...args);
  console.log(`res: ${res}`);
  if (!res.ok) {
    error = { code: res.status }; // define our error
  }
  const data = await res.json();
  if (error) {
    error.message = data.message;
    return Promise.reject(error);
  }
  console.log(`data: ${data}`);
  return data;
};

const deleteBookmark = (id) => {
  return bookmarksApiFetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "_Content-Type": "application/json",
      get "Content-Type"() {
        return this["_Content-Type"];
      },
      set "Content-Type"(value) {
        this["_Content-Type"] = value;
      },
    },
  });
};

const createNewBookmark = (bookmark) => {
  // bookmark will be an object
  const newBookmark = JSON.stringify(bookmark);
  return bookmarksApiFetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: newBookmark,
  });
};

const fetchBookmarks = () => {
  return bookmarksApiFetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default {
  deleteBookmark,
  createNewBookmark,
  fetchBookmarks,
};
