const express = require('express');
const path = require('path');
const multer = require('multer');
const { PythonShell } = require('python-shell');

const app = express();
const port = 3000;

// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Route for serving the predicted genre page
app.post('/uploadAudio', upload.single('audioFile'), (req, res) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Define options for PythonShell
    const options = {
        mode: 'text',
        pythonOptions: ['-u'], // unbuffered stdout
        scriptPath: path.join(__dirname, 'path_to_your_python_script'), // Path to the directory containing your Python script
        args: [uploadedFile.path] // Pass the path to the uploaded audio file as an argument
    };

    // Run the Python script
    PythonShell.run('your_python_script.py', options, (err, results) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: 'Failed to process the file' });
        }
        // Render the predicted genre page with the predicted genre
        res.render('predicted', { genre: results });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
