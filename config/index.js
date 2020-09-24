require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8000,
  apiUrl: process.env.API_URL,
  apiKeyToken: process.env.API_KEY_TOKEN,
  GoogleClientId: proccess.env.GOOGLE_CLIENT_ID,
  GoogleClientSecret:proccess.env.GOOGLE_CLIENT_SECRET
};

module.exports = { config: config };
