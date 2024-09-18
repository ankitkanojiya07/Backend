const sequelize = require('./config'); // Import the Sequelize instance from the config file
const app = require('./app'); // Import the Express application from the app file

const PORT = process.env.PORT || 3000; // Define the port to listen on, defaulting to 3000 if not specified in environment variables

(async () => {
    try {
        // Sync the database with the Sequelize models
        await sequelize.sync({ force: false }); // { force: false } means the database schema will not be dropped and recreated; it will only sync changes
        console.log('Database synced successfully!'); // Log a success message once the database is synced

        // Start the Express server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`); // Log a message indicating the server is running and listening on the specified port
        });
    } catch (err) {
        console.error('Error syncing database:', err); // Log any errors that occur during database synchronization
    }
})();
