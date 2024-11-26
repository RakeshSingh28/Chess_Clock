export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/113418151?v=4";
export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_API_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const LANGUAGES = [
  { id: "en", name: "English" },
  { id: "hin", name: "Hindi" },
  { id: "esp", name: "Spanish" },
];

export const OPEN_AI_GPT_KEY = process.env.REACT_APP_OPEN_AI_GPT_KEY;
