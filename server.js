import cors from 'cors';
import express from 'express';
import mysql from 'mysql';

const app = express();
// Middleware
    app.use(express.json());
    app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'schoolsite',
    });

    // Connect to the Database
    db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    return;
    }
        console.log('Connected to MySQL!');
    });

    // Server Listening
    const PORT = 3000; // You can choose any available port
        app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

    app.get('/api/announcements', (req, res) => {
        const query = 'SELECT * FROM announcements';
            db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching announcements:', err);
            res.status(500).json({ error: 'Failed to fetch announcements' });
        return;
        }
            res.json(results);
    });
});