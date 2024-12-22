// Import the Express module
import express from 'express';

// Create an instance of an Express app
const app = express();
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});