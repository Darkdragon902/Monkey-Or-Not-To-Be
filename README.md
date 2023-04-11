# Monkey-Or-Not-To-Be
The UCF COP 4331 Large Project repository for Monkey Or Not To Be.
## How To Run
Create an Atlas URI connection parameter in `mern/server/config.env` with your Atlas URI:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd server
npm install
npm start
```

Start Web server
```
cd client
npm install
npm start
```
