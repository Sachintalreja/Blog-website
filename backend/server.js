import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js'
import path from 'path';
dotenv.config();

connectDB();

const app = express();
app.use(express.json()); // Request Body Parsing



app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running...');
	});
}


app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}.`.yellow
			.bold
	);
});
