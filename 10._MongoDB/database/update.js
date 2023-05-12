import db from "./connection.js";

db.shops.updateOne({ city: "Roskilde"}, { $push: { shops: { name: "Candy Biksen" } } })
