# Image Search

Image Search is a simple web application that displays images using Unsplash API.

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
* Navigate to the *.env* file and enter your access key.
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
* Axios

## Contributing
All pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author
* **Samuel Menezes**