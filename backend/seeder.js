import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import users from './data/users.js';
import User from './models/userModel.js';
import Blog from './models/blogModel.js';
import blogs from './data/blogs.js';


dotenv.config();

connectDB();

const importData = async () => {
	try {
		await User.deleteMany();
		await Blog.deleteMany();

		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;

		const sampleBlogs = blogs.map((blog) => {
			return { ...blog, user: adminUser };
		});
		await Blog.insertMany(sampleBlogs);

		console.log('Data imported'.green.inverse);
		process.exit();
	} catch (err) {
		console.error(`${err}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
	
		await User.deleteMany();
		await Blog.deleteMany();

		console.log('Data destroyed'.red.inverse);
		process.exit();
	} catch (err) {
		console.error(`${err}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
