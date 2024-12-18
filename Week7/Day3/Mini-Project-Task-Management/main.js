const express = require("express")
const taskRouter = require('./routes/index') // Import taskRouter from routes/index.js

const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/tasks', taskRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
