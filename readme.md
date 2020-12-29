# Welcome to Products API!

## About this project
This is API to manage a data product.

## This starter project
This starter project already contains some basic library like:  
- Express
- Already installed Sequelize
- Already installed Mysql2
- Already installed Bycript
- Already installed Nodemon
  
## How to run the project
You need to install required dependencies (libraries) by typing in the terminal
```bash
npm install
```
Then you can run this project by:
- Using node
  ```bash
  npm start
  ```
- Using nodemon
  ```bash
  npm run dev
  ```
To generate the database you can run this :
- Create database
```bash
sequelize db:create
```
- Create table/migration
```bash
sequelize db:migrate
```
- Seeding data product
```bash
sequelize db:seed:all
```
----------

## Enviroment Variables
This project uses environment variables likes :
- DB_USERNAME=""
- DB_PASSWORD=""
- DB_DATABASE=""
- DB_HOST="" 
- PORT=
- JWT_SECRET=""
  
Or you can see on the file .env.example 

----------

## Postman Documentation
https://documenter.getpostman.com/view/13621678/TVsyg6S4

----------

### Test Answer 

  1. Apakah Kegunaan JSON pada REST API? 
     JSON digunakan sebagai file format standar pertukaran data pada REST API. Alasan   mengapa mengguanakan JSON adalah :
    • Format pertukaran data tekstual yang ringan
    • Sintaksnya sederhana dan jelas dibandikan XML
    • Dapat digunakan pada berbagai bahasa pemograman. (Properti ini menjadikan JSON bahasa pertukaran data yang ideal.)
  2. controller/userController.js , pada bagian login menggunakan bcyript compare untuk membandingkan karena password telah di hash saat masuk ke dalam database.
  3. biodata.json
  4. products.sql
  5. controller/productController.js
  6. https://documenter.getpostman.com/view/13621678/TVsyg6S4
    - then go to side bar 
    - choose product and choose count product
    - Or see this screenshoot below:
    example request of count.png
    example response of count.png




