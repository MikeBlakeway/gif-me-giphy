# Gif-Me-Giphy application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About The Project

The project has been built to showcase my front-end skills and show off my React proficiency.

The project has the following functionality:

- The user can search via text for a GIF on the Main Page
  - The search will start after the user fills the search field and clicks search, or
    press enter.
  - The results are presented in a preview grid.
- The user can select a GIF from the preview grid to see it in a detailed view.
  - The detailed view will navigate to a new page based on the id, and is also accessible directly via entering the id into the URL for any known Gif id.
- In the detailed view, the user can see the details of the image and it’s author:
  - From the user: avatar, display_name(linked to their profile_url),
  - From the image: title (linked to its url on Giphy), the image in MP4 format,
    original width, height and amount of frames.

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MikeBlakeway/gif-me-giphy.git gif-me-giphy
   ```
2. Install NPM packages
   ```sh
   cd gif-me-giphy
   npm install
   ```

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in my browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
my app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from my project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into my project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on my own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you willn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
