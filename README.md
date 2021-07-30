# pioneer-membership

This package includes return the component of Pioneer Membership page for the Sumra products.

If the application has multiple instances of React it could be resolved by adding alias to the webpack.config.js :

resolve {
alias {
react: path.resolve("./node_modules/react"),
"react-dom": path.resolve("./node_modules/react-dom"),
}

}

If application is created by create-react-app the webpack.config.js could be found at:
./node_modules/react-scripts/config/
