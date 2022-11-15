/*
    Add constant for the base API url, so you don't copy and paste it everywhere a million times,
    also useful if you ever want to change it, you can simply change it in just one place.
 */
const API_BASE_URL = 'http://localhost:8080';

// Add constants for reusable strings to reduce chance of mistakes.
const REQUEST_METHOD = {
    GET: "GET",
    HEAD: "HEAD",
    OPTIONS: "OPTIONS",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
}

const USER_ENDPOINT = {
    GET_USER: 'user',
    /*
        Even though this is the same as the GET, you want it to have a different definition so if you ever need to
        change it you change it just in one place and don't have to refactor every occurrence of POST methods.
     */
    UPDATE_USER: 'user',
}

const PROFILE_ENDPOINT = {
    GET_PROFILE: 'profile',
}

export {
    API_BASE_URL,
    REQUEST_METHOD,
    USER_ENDPOINT,
    PROFILE_ENDPOINT
}