// Constant variables which should be accessible dependent on their environment
// Solution inspired by:
// https://a-carreras-c.medium.com/development-and-production-variables-for-react-apps-c04af8b430a5

/**
 * Environment variables for the development environment.
 */
const dev = {
  url: {
    API_URL: "http://127.0.0.1:5001/"
  }
};

/**
* Environment variables for the production environment.
*/
const prod = {
  url: {
    API_URL: "https://us-central1-pac-man-solutions.cloudfunctions.net/"
  }
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
