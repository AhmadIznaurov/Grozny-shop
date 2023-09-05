const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === `development`) {
  serverUrl = `http://localhost:3000`
} else {
  serverUrl = `https://grozny-shop-ts.onrender.com`;
}