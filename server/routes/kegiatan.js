const express = require('express');
const router = express.Router();
const Kegiatan = require('../models/kegiatan');  // Adjust the path as needed

// Create a new Kegiatan
router.post('/', async (req, res) => {
    try {
        const { nama, tanggal, jenis, deskripsi } = req.body;
        const newKegiatan = await Kegiatan.create({ nama, tanggal, jenis, deskripsi });
        res.status(201).json(newKegiatan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all Kegiatans
router.get('/', async (req, res) => {
    try {
        const kegiatans = await Kegiatan.findAll();
        res.status(200).json(kegiatans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single Kegiatan by ID
router.get('/:id', async (req, res) => {
    try {
        const kegiatan = await Kegiatan.findByPk(req.params.id);
        if (kegiatan) {
            res.status(200).json(kegiatan);
        } else {
            res.status(404).json({ error: 'Kegiatan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Kegiatan by ID
router.put('/:id', async (req, res) => {
    try {
        const { nama, tanggal, jenis, deskripsi } = req.body;
        const kegiatan = await Kegiatan.findByPk(req.params.id);
        if (kegiatan) {
            kegiatan.nama = nama;
            kegiatan.tanggal = tanggal;
            kegiatan.jenis = jenis;
            kegiatan.deskripsi = deskripsi;
            await kegiatan.save();
            res.status(200).json(kegiatan);
        } else {
            res.status(404).json({ error: 'Kegiatan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Kegiatan by ID
router.delete('/:id', async (req, res) => {
    try {
        const kegiatan = await Kegiatan.findByPk(req.params.id);
        if (kegiatan) {
            await kegiatan.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Kegiatan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
