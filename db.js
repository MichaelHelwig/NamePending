const {db_database, db_user, db_password,  db_host, db_dialect} = require('./config.json');
const Sequelize = require('sequelize');

const x = 'test';

const sequelize = new Sequelize(db_database, db_user, db_password, {
    host: db_host,
    dialect: db_dialect,
    logging: false,
});
	
async function db_test_conn() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

const banks = sequelize.define('banks', {
	username: {
		type: Sequelize.STRING,
		unique: true,
	},
	amount: Sequelize.DECIMAL,
});

module.exports = {db_test_conn, banks, x};



