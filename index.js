const express = require('express');
const {scraping} = require("./scraping");
const app = express();
const PORT = process.env.PORT || 4000;
app.get('/', function (req, res) {
    scraping(res).then(r => {
        console.log(r);
    });
});
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});