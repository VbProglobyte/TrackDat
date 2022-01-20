# TrackDat
An employee tracker 
This is a database using MySQL - the command line is how we will be inserting the data (using Node, Inquirer, MySQL2). 

![image](https://user-images.githubusercontent.com/83515305/150441003-70c309ec-ded4-4859-b511-7ba31d29d168.png)


## Installation 

Through the command line : open up a terminal under server.js 
    
    1. npm i
    2. npm mysql
    3. npm inquirer
    4. npm start (this will automatically start the promts for the user to select and answer)

## Usage 

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

To view/select the database, you will have to access mysql in the terminal using :  mysql -u root -p

![image](https://user-images.githubusercontent.com/83515305/150429534-0912d04c-8636-4387-98d0-3aa57fca396d.png)

Once you see that you have successfully logged in to mysql, type in the terminal :  show databases; 

![image](https://user-images.githubusercontent.com/83515305/150429784-f09bfd55-2d99-47a2-a078-f3263700841c.png)

from here you can select the desired database (in this case company_db) by typing :  use company_db;
and now you can view your tables and feilds 

![image](https://user-images.githubusercontent.com/83515305/150430140-93f35f61-0e23-477e-83c0-2621052506b9.png)


## Mock DEMO : (right click on video to open in another window for a larger view)



https://user-images.githubusercontent.com/83515305/150440078-b412c05c-5c08-4d37-bd35-f02c4120ee4e.mp4



## REFS

https://www.mysqltutorial.org/mysql-left-join.aspx

https://www.npmjs.com/package/mysql2
