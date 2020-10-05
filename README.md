# Image Search

Image Search is a responsive web application where the user can search, bookmark and download hundreds of high definition images. <br />
![build](https://github.com/sammy9867/image-search/workflows/GitHub%20CI/CD/badge.svg)
![License](https://img.shields.io/github/license/sammy9867/image-search)

## Getting Started
The following instructions will help you to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* Make sure you created an account at [Unsplash](https://unsplash.com/documentation). The API provides 50 free api calls/hour.
* After signing up, you will receive an access key which is required in this project.

### Installing

* To clone this repository, you need to have [GIT](https://git-scm.com) installed on your local machine.
* Paste the following on the command line:
```
$ git clone https://github.com/sammy9867/image-search.git
```

### Deployment
* After you have cloned the repository, switch to the directory containing the repository and install the dependencies using npm.
```
$ npm install
```
* Create a *.env* file and add the following. Enter your own access key.
```
REACT_APP_BASE_URL=https://api.unsplash.com/search/photos
REACT_APP_CLIENT_ID=YOUR_ACCESS_KEY
```
* Finally, use the following command to the run the application:
```
$ npm start
```

## Built With
* React Hooks
* Context API
* React-Axios
* React-Router

## Contributing
All pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author
* **Samuel Menezes**