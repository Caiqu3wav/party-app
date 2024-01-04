const mongoose = require("mongoose")

async function main() {
    try {

        mongoose.set("strictQuery", true); 

        await mongoose.connect(
            "mongodb+srv://asapcaique7:T9to8ca1rN2W5NEk@cluster0.5h5nee7.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado mongo")
    } catch (error) {
        console.log('Erro: ${error}');
    }
}

module.exports = main;