import express from "express";
import route from "./routes/postRoutes.js";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use('/', route);

app.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
})