# **Tasker**

#### **_A TODO app to plan fast and easy._**

### **[Click to see a live version](https://sharp-boyd-bb61b5.netlify.com/ 'Go to app')**

##### **Description**

- React / Redux
- Node.js / Express.js
- mongoDB / Mongoose
- Styled components

##### **How to use**

You can use it locally (the tasks will be stored directly on your browser):

1. Clone the repo
2. `cd front-client/`
3. `npm install`
4. `npm start`

Or you can use the backend by setting up an mlab DB:

1. Clone the repo
2. `npm install`
3. `cd back/`
4. Add a `config.js` file to the folder's root and fill with your mlab info using this structure:

```
module.exports = {
    mongodb: "mongodb://<user>:<password>@<name-of-database>"
};
```

5. `npm start` (starts on `port 3000`)
6. `cd front-client/`
7. `npm start` (starts on `port 3001`)
