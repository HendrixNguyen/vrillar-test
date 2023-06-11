const { PORT=8080, DATABASE_URL= "mongodb://admin:example@cluster0.k4qfamm.mongodb.net/vrillar-test?retryWrites=true&w=majority" }  = process.env

export { DATABASE_URL, PORT }