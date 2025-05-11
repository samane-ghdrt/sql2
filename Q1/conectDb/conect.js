import {Sequelize} from 'sequelize';
const {MYSQL_HOST,MYSQL_PORT,MYSQL_USERNAME,MYSQL_PASSWORD,MYSQL_DATABASE}=process.env;


export const sequelize =new Sequelize({
  dialect:"mysql",
  host:MYSQL_HOST,
  port:MYSQL_PORT,
  username:MYSQL_USERNAME,
  password:MYSQL_PASSWORD,
  database:MYSQL_DATABASE
})


sequelize.authenticate()
  .then(() => {
    console.log("successfully connected to database ✅");
  })
  .catch((error) => {
    console.log("error connecting to database: ", error);
  });