const connection = require('./app/dbConnection');
connection();
const { User } = require('./app/models');
let updatedQuantity = 1;

async function update() {
    try {
        await User.updateMany({}, { $set: { age: ++updatedQuantity } });
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

setInterval(update, 3000);
