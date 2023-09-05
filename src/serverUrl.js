const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === `development`) {
  serverUrl = `http://localhost:8080`
} else {
  serverUrl = `https://grozny-shop-typescript.onrender.com`;
}