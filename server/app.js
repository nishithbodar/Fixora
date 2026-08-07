const fs = require("fs");

const provider = {

    providerId: 101,

    providerName: "Rahul Sharma",

    service: "Electrician",

    experience: 6,

    rating: 4.8,

    city: "Ahmedabad",

    available: true

};

const jsonString = JSON.stringify(provider, null, 2);

fs.writeFile("../data/provider.json", jsonString, "utf8", (err) => {

    if (err) {

        console.log("Error:", err);

    }

    else {

        console.log("JSON object stored successfully.");

    }

});