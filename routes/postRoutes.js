import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.urlencoded({extended : true}));

router.get('/', (req, res) => {
    res.render("index.ejs");
})

router.get('/edit', (req, res) => {
    res.render("edit.ejs");
})

router.get('/create', (req, res) => {
    res.render("create.ejs");
})


export default router;