// Import the express package
const express = require('express');

// Simulated database
const data =  [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
];

// Initialize the Express app
const app = express();
app.use(express.json());


// Start the server and listen on the specified port
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});



// GET /posts: Return all blog posts
app.get('/posts', (req, res) => {
    res.json(data);
});

// GET /posts/:id: Return a specific blog post by id
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = data.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
});

// POST /posts: Create a new blog post
app.post('/posts', (req, res) => {
    const { id, title, content } = req.body;
    const newPost = {
        id: id,
        title,
        content,
    };
    data.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id Update an existing blog post
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id); // Extract the ID from the URL
    const { title, content } = req.body;       // Extract title and content from the request body

    const postIndex = data.findIndex(p => p.id === postId); // Find the index of the post
    if (postIndex !== -1) {
        // Update only the provided fields; retain the original values if not provided
        const updatedPost = { 
            id: postId, 
            title: title || data[postIndex].title, 
            content: content || data[postIndex].content 
        };
        data[postIndex] = updatedPost; // Replace the old post with the updated one
        res.json(updatedPost);         // Send back the updated post as the response
    } else {
        res.status(404).json({ error: 'Post not found' }); // Send 404 if no post matches the ID
    }
});

// DELETE /posts/:id - delete a blog post 
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id)
    const postIndex = posts.findIndex( post => post.id === postId)
    if (postIndex !== -1) {
        posts.slice(postIndex)
    } else {
        res.json("Error! Can't find this post id")
    }
})