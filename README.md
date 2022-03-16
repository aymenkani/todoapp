# todoapp with typescript
a nodejs/graphql api that serve a simple todo app 

**run the app**</br>
This app uses typescript, so, when running the app, it will, first, compile the code,
then it will execute 'node app.js' from the "dist" folder using nodemon package for auto reloading and compiling.</br>
command: npm run dev

**jest for testing**</br>
command: npm run test

**eslint**</br>
This app uses eslint as a linting tool.

**Docker**</br>
This app has docker implementation.
If you want to build an image from this app using docker you have to run these commands:
  - docker-compose build
  - docker-compose up -d mongo
  - docker-compose up -d api
