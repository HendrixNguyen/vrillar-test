# Vrillar Iterview Test
The interview test project
  
## Các bước thực hiện
- Crawling Data tại trang https://www.formula1.com/en/teams.html
- Crawling Data with Axios, Cheerio
- Tạo Rest API với ExpressJS Framework

## Installing

Clone this GitHub project:
    
    git clone https://github.com/HendrixNguyen/vrillar-test.git

Change directory into vrillar-test and install package with yarn:

    yarn install

Crawling Data:
    
    yarn crawling

Copy then .env.example to .env and then start the Rest API:

    yarn start

The REST API will listen on port 8080

## REST API Example

Get All Team and Rank:

    http://localhost:8080/teams

Get Team By Name:

    http://localhost:8080/getTeamByName
