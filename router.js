const express = require("express");
const router = express.Router();
const patroli = require("./controller/patroli");
const presensi = require("./controller/presensi");
const tamu = require("./controller/tamu");

// Patroli
router.get("/get/patroli/get-note-patroli", patroli.getNotePatroli);
router.post("/post/patroli/insert-patroli", patroli.insertPatroli);
router.post("/post/patroli/insert-note-patroli", patroli.insertNotePatroli);

// Presensi
router.post("/post/presensi/insert-presensi", presensi.insertPresensi);
router.get("/get/presensi/get-piket/:data", presensi.getPiket);

// Tamu
router.post("/post/tamu/insert-tamu", tamu.insertTamu);


module.exports = router;
