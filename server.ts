require("dotenv").config();
import express from "express";
import bodyparser from "body-parser";
import path from "path";
const app = express();
const port = process.env.PORT;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, function () {
	console.log(`server is listening on port: ${port}`);
});
