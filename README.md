# News App

### `About project`

The project was developed for 3 months. The main goal was to build a functional news website that is compatible with all devices. This application fetches news upon client request, using various options, and presents the results in the form of well-formatted articles and events. The project utilizes a free API.

### `Functionality`

When a user initially lands on the website, they will encounter a pre-filled search query for news and events. This is done to ensure that the website appears populated with content. If the user wishes, they can click on the "Search" button, which will direct them to a new component where they can choose news based on the following criteria:

1. Categories: Users can select news categories such as Politics, Sports, Technology, etc.
2. Date Range: Users can specify a date range to filter news published within that period.
3. Keywords: Users can enter specific keywords to find news related to their interests.
4. Language: Users can choose one of four languages.

Additionally, a "Clear" button is provided, allowing users to quickly reset the entered search criteria and start a new search from scratch. This feature facilitates an easy and efficient way for users to refine their news search on the website.

### `Versions and used packages`

React version "0.1.0"\
React-redux version "8.1.2"\
React-router-dom version "6.14.2"\
sass version "1.63.6"\
bootstrap version "5.3.0"\
bootstrap-icons version "1.10.5"\
moment version "2.29.4"\
react version "18.2.0"\
react-bootstrap version "2.8.0"\
react-bootstrap-multiselect version "2.4.1"\
react-dom version"18.2.0"\
eact-infinite-scroll-component version "6.1.0",\

### `How to get API`

If you wish to use the API that is employed in this project, you will need to register on the website [Web for free API which gives trial](https://newsapi.ai). To register, you will require a business email. In case you do not have a business email, you can use the resource for temporary mail to complete the registration: [Web for free temporary bussines mail](https://temp-mail.org/). Once you have completed the registration, you will receive an API key (at the bottom of the page) and 2000 free requests. After obtaining the API key, you should add it to the 'env' folder, and make sure to stop your application beforehand.

### `How to use API`

You need to create a file in the root directory with the name ".env" and add your key using the following syntax:

REACT_APP_API_KEY="your_key_number"

Replace "your_key_number" with the API key you obtained from the registration process on [web with free temporary bussines emails](https://temp-mail.org/). This way, your application will be able to access the API using the provided key. Remember to save the file after adding the API key.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Available Scripts`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
