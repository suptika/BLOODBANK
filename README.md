# BLOODBANK

Our blood bank management website offers secure login/signup with bcrypt.js for data protection 🔒. MongoDB powers efficient data storage and retrieval 📊. Real-time updates via WebSocket ensure instant inventory adjustments ⏰. Hospitals can request blood units seamlessly 🏥. Admins manage users, inventory, and requests with role-based access control 🛡️. Automated email notifications enhance communication for efficient blood supply management 📧.

## Deployed Link: [click here](https://bloodbank-buzj.onrender.com/)

## Sig-up/Login Page:
<img src="https://firebasestorage.googleapis.com/v0/b/react-netflix-clone-c36b6.appspot.com/o/Screenshot%202024-03-31%20152352.png?alt=media&token=e0ca0e58-6cad-4bd5-a485-939aff13a078" alt="poster" width="500">

## Organization Dashboard:
<img src="https://firebasestorage.googleapis.com/v0/b/react-netflix-clone-c36b6.appspot.com/o/Screenshot%202024-03-31%20152424.png?alt=media&token=fedf5a63-cc15-45de-a067-e81a2c1a0fcf" alt="poster" width="500">

## Adding Inventory Section:
<img src="https://firebasestorage.googleapis.com/v0/b/react-netflix-clone-c36b6.appspot.com/o/Screenshot%202024-03-31%20152438.png?alt=media&token=bb4ceea5-1241-4aa1-afca-3361f117afdb" alt="poster" width="500">

## User Dashboard:
<img src="https://firebasestorage.googleapis.com/v0/b/react-netflix-clone-c36b6.appspot.com/o/Screenshot%202024-03-31%20152708.png?alt=media&token=9f09e54b-2998-4e9a-be87-2a4eab92c723" alt="poster" width="500">

## Hospital Dashboard:
<img src="https://firebasestorage.googleapis.com/v0/b/react-netflix-clone-c36b6.appspot.com/o/Screenshot%202024-03-31%20152801.png?alt=media&token=0e6a5aed-5f5a-4928-867d-d07ce94b9061" alt="poster" width="500">


## Problem Statement:
Manual data handling of blood campaign leads to trouble like data loss, moreover donor or organisation does not have the history or real time tracking of blood units being used or if there is further requirement of blood or not. This can result in critical shortages or wastage of blood units.


## Our Solution:
- For blood banks, our platform provides comprehensive management tools 🩸, facilitating the efficient categorization and meticulous tracking of various blood types within the inventory 📋.
-  Hospitals, in urgent need, can seamlessly request and promptly receive blood units, ensuring swift access during critical moments ⏰. Moreover, our intuitive interface simplifies the process, empowering users to navigate effortlessly through the system. With real-time updates 🔄, stakeholders remain informed of inventory changes, optimizing decision-making processes.

- Additionally, our solution prioritizes user experience, delivering a seamless and intuitive interface that enhances overall efficiency and effectiveness 💼.


## Key Features:
- Real-time Updates: Implementing WebSocket or Server-Sent Events for instant inventory updates.
- Seamless Integration: Integrating with hospital systems via RESTful APIs for smooth blood request and delivery workflows.
- Comprehensive Inventory Management: Categorizing and tracking various blood types with detailed inventory management tools.
- Blood Request Handling: Hospitals can submit blood requests seamlessly, ensuring swift access during critical moments.
- History Tracking: Recording and displaying historical data of blood donations, requests, and inventory changes for auditing purposes.
- Organization Dashboard: Providing administrators with a centralized dashboard for managing users, inventory, and requests efficiently.
- Role-based Access Control: Restricting access to certain features based on user roles, ensuring data security and privacy.

# Tech Stacks: 

## For Frontend Part
- React.Js
- Material-Ui
- Tailwind CSS

## For Database
- MongoDB

## For Backend Part
- Node.js
- Express.js
- nodemon
- react-dom

## For API Call
- axios
- moment

## For Data Encryption
- jsonwebtoken
- bycriptjs



### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/suptika/BLOODBANK.git
```

### Install packages

```shell
npm i
```

### Setup .env file for Server


```js
CREATE .env FILE in root Directory

MONGO_URL=
JWT_SECRET=

```


### Start Client

```shell
cd .\client\
npm start
```
### Start Server

```shell
cd .\server\
npm start
```

## Available commands

Running commands with npm `npm [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `install`           | Install all the dependency |
| `start`           | Starts the client/server |
