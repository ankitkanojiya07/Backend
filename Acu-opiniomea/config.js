const { Sequelize } = require('sequelize'); // Import Sequelize constructor from the sequelize package

// Create a new instance of Sequelize to connect to a SQLite database
const sequelize = new Sequelize({
    dialect: 'sqlite',      // Specify the dialect of the database (SQLite in this case)
    storage: './database.sqlite', // Define the path to the SQLite database file
});

// Export the sequelize instance for use in other modules (e.g., models and migrations)
module.exports = sequelize;
