//page 연결이 쉬워지도록
//
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const db = require("./../db.js");

router.get("/", (req, res) => {
    res.render("main");
});
router.get("/committee", (req, res) => {
    res.render("committee");
});
router.get("/festival", (req, res) => {
    res.render("festival");
});
router.get("/event", (req, res) => {
    res.render("event");
});
router.get("/notice_list", (req, res) => {
    res.render("notice_list");
});
router.get("/notice_write", (req, res) => {
    res.render("notice_write");
});
router.get("/gallery", (req, res) => {
    res.render("gallery");
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/join", (req, res) => {
    res.render("join");
});
router.get("/test", (req, res) => {
    res.render("test");
});

module.exports = router;
