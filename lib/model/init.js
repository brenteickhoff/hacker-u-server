import mysql2 from 'mysql2'
import Sequelize from 'sequelize';
import { db } from './../../config';

export const findOrCreateDatabase = (callback) => {
  const mysql = mysql2.createConnection({
    host: db.host,
    user: db.user,
  });
  const SQL1 = `DROP DATABASE IF EXISTS ${db.name};`;
  const SQL2 = `CREATE DATABASE ${db.name};`;

  mysql.connect((err, msg) => {
    if (!err) {
      mysql.query(SQL1);
      mysql.query(SQL2, (err, msg) => {
        if (!err) {
          console.log(`:) Database created`);
        } else {
          console.error(`**Error creating database`, err);
        }
        callback(err, msg);
      });
    } else {
      callback(err);
    }
  });
};

export const connectORM = (callback) => {
  const connection = new Sequelize(
    db.name, db.user, db.password, {
      host: db.host,
      dialect: db.dialect,
      logging: false,
      operatorsAliases: false,
      define: {
        timestamps: false
      },
  });
  
  connection.authenticate()
    .then(() => {
      console.log(`:) Sequelize connected`);
      callback(null, connection);
    })
    .catch(error => {
      console.error('FATAL ERROR: during sequelize authentication', error);
      callback(error);
    });
};


  

