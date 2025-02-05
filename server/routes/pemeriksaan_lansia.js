const express = require('express');
const router = express.Router();
const PemeriksaanLansia = require('../models/pemeriksaan_lansia');  // Adjust the path as needed

// Create a new PemeriksaanLansia
router.post('/', async (req, res) => {
    try {
        const {
            lansia, tanggal_kunjungan, berat_badan, tinggi_badan, lingkar_perut, tekanan_darah, 
            gula_darah, kolestrol, asam_urat, kesehatan_mata, keterangan, riwayat_obat, 
            riwayat_penyakit, kader, dokter
        } = req.body;
        const newPemeriksaanLansia = await PemeriksaanLansia.create({
            lansia, tanggal_kunjungan, berat_badan, tinggi_badan, lingkar_perut, tekanan_darah, 
            gula_darah, kolestrol, asam_urat, kesehatan_mata, keterangan, riwayat_obat, 
            riwayat_penyakit, kader, dokter
        });
        res.status(201).json(newPemeriksaanLansia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all PemeriksaanLansias
router.get('/', async (req, res) => {
    try {
        const pemeriksaanLansias = await PemeriksaanLansia.findAll();
        res.status(200).json(pemeriksaanLansias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single PemeriksaanLansia by ID
router.get('/:id', async (req, res) => {
    try {
        const pemeriksaanLansia = await PemeriksaanLansia.findByPk(req.params.id);
        if (pemeriksaanLansia) {
            res.status(200).json(pemeriksaanLansia);
        } else {
            res.status(404).json({ error: 'PemeriksaanLansia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a PemeriksaanLansia by ID
router.put('/:id', async (req, res) => {
    try {
        const {
            lansia, tanggal_kunjungan, berat_badan, tinggi_badan, lingkar_perut, tekanan_darah, 
            gula_darah, kolestrol, asam_urat, kesehatan_mata, keterangan, riwayat_obat, 
            riwayat_penyakit, kader, dokter
        } = req.body;
        const pemeriksaanLansia = await PemeriksaanLansia.findByPk(req.params.id);
        if (pemeriksaanLansia) {
            pemeriksaanLansia.lansia = lansia;
            pemeriksaanLansia.tanggal_kunjungan = tanggal_kunjungan;
            pemeriksaanLansia.berat_badan = berat_badan;
            pemeriksaanLansia.tinggi_badan = tinggi_badan;
            pemeriksaanLansia.lingkar_perut = lingkar_perut;
            pemeriksaanLansia.tekanan_darah = tekanan_darah;
            pemeriksaanLansia.gula_darah = gula_darah;
            pemeriksaanLansia.kolestrol = kolestrol;
            pemeriksaanLansia.asam_urat = asam_urat;
            pemeriksaanLansia.kesehatan_mata = kesehatan_mata;
            pemeriksaanLansia.keterangan = keterangan;
            pemeriksaanLansia.riwayat_obat = riwayat_obat;
            pemeriksaanLansia.riwayat_penyakit = riwayat_penyakit;
            pemeriksaanLansia.kader = kader;
            pemeriksaanLansia.dokter = dokter;
            await pemeriksaanLansia.save();
            res.status(200).json(pemeriksaanLansia);
        } else {
            res.status(404).json({ error: 'PemeriksaanLansia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a PemeriksaanLansia by ID
router.delete('/:id', async (req, res) => {
    try {
        const pemeriksaanLansia = await PemeriksaanLansia.findByPk(req.params.id);
        if (pemeriksaanLansia) {
            await pemeriksaanLansia.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'PemeriksaanLansia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
