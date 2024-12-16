# INST377finalproject
Title: Color Palette Extractor

Description of project: Our project's goal is to create a website that analyzes images for significant colors and generates a base color palette. This tool caters to stakeholders such as UI/UX designers, makeup artists, and visual artists. This will help them design, recreate, and/or match colors effectively. The application is web-based and hopes to provide accessible and user-friendly solutions for its target audience.

Description of target browsers (iOS? Android? Which ones?): The project is designed to work smoothly on modern browsers, including: iOS Browsers-Safari (latest versions), Android Browsers-Chrome (latest versions), Desktop Browsers-Chrome, Firefox, Edge (latest versions).


Developer Manual:

## How to Install Application and Dependencies:

1. Clone github repository in your terminal
```
git clone git@github.com:erivaden/INST377finalproject.git
```
2. Install dependencies: node.js
```
npm install
```
## How to run your application on a server
1. Use commanad to start application:
```
npm start
```
2. By default, the server runs on http://localhost:3000. 
# How to run any tests you have written for your software
1. Install testing framework
```
npm install --save-dev jest
```
2. Run test.
```
npm test
```
# The API for your server application
GET endpoints: <br>
1. /api/colors <br>
  Description: retrives all color palettes found in database <br>
  Response: JSON array of palates <br>
3. /api/colors/:id <br>
  Description: Gets details of specific palette based on ID <br>
  Response: JSON object of palette <br>

POST endpoints: <br>
1. /api/colors <br>
  Description: Uploads image and generates a color palette using the API <br>
  ```
  /api/colors/:id
  ```
  Request:<br>
  ```
  {
    "image":"<base64-encoded image>"
  }
  ```
  Response: JSON object of generated palette <br>

PATCH endpoints: <br>
1. /api/colors <br>
  Description: Updates metedata for specific palette <br>
  ```
  /api/colors/:id
  ```
  Request:<br>
  {
    "title": "Updated Title"
  }
  ```
  Response: Updated JSON oblect of palette <br>

DELETE Endpoints: <br>
1. /api/colors/:id <br>
   Description: deltes palette by ID <br>
   Response: Confirms message of deletion <br>

# Future Development

Authentication
- Add a user authentication to ensure security of data uploads
