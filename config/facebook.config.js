require("dotenv").config();
const FACEBOOK_API_KEY = process.env.FACEBOOK_API_KEY;//FACEBOOK_API_KEY
const FACEBOOK_API_SECRET = process.env.FACEBOOK_API_SECRET;//FACEBOOK_API_SECRET
const CALLBACK_URL = process.env.CALLBACK_URL;

module.exports = {
  FACEBOOK_API_KEY,
  FACEBOOK_API_SECRET,
  CALLBACK_URL
}