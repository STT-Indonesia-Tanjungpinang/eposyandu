const express = require('express');
const router = express.Router();
const OrangTua = require('../models/orangtua');  // Adjust the path as needed

// Create a new OrangTua
router.post('/', async (req, res) => {
    try {
        const {
            no_kk, nik_ibu, nama_ibu, tempat_lahir_ibu, tanggal_lahir_ibu, alamat_ktp_ibu, kelurahan_ktp_ibu,
            kecamatan_ktp_ibu, kota_ktp_ibu, provinsi_ktp_ibu, alamat_domisili_ibu, kelurahan_domisili_ibu,
            kecamatan_domisili_ibu, kota_domisili_ibu, provinsi_domisili_ibu, no_hp_ibu, email_ibu, pekerjaan_ibu,
            pendidikan_ibu, nik_ayah, nama_ayah, tempat_lahir_ayah, tanggal_lahir_ayah, alamat_ktp_ayah, kelurahan_ktp_ayah,
            kecamatan_ktp_ayah, kota_ktp_ayah, provinsi_ktp_ayah, alamat_domisili_ayah, kelurahan_domisili_ayah,
            kecamatan_domisili_ayah, kota_domisili_ayah, provinsi_domisili_ayah, no_hp_ayah, email_ayah, pekerjaan_ayah,
            pendidikan_ayah
        } = req.body;
        const newOrangTua = await OrangTua.create({
            no_kk, nik_ibu, nama_ibu, tempat_lahir_ibu, tanggal_lahir_ibu, alamat_ktp_ibu, kelurahan_ktp_ibu,
            kecamatan_ktp_ibu, kota_ktp_ibu, provinsi_ktp_ibu, alamat_domisili_ibu, kelurahan_domisili_ibu,
            kecamatan_domisili_ibu, kota_domisili_ibu, provinsi_domisili_ibu, no_hp_ibu, email_ibu, pekerjaan_ibu,
            pendidikan_ibu, nik_ayah, nama_ayah, tempat_lahir_ayah, tanggal_lahir_ayah, alamat_ktp_ayah, kelurahan_ktp_ayah,
            kecamatan_ktp_ayah, kota_ktp_ayah, provinsi_ktp_ayah, alamat_domisili_ayah, kelurahan_domisili_ayah,
            kecamatan_domisili_ayah, kota_domisili_ayah, provinsi_domisili_ayah, no_hp_ayah, email_ayah, pekerjaan_ayah,
            pendidikan_ayah
        });
        res.status(201).json(newOrangTua);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all OrangTuas
router.get('/', async (req, res) => {
    try {
        const orangTuas = await OrangTua.findAll();
        res.status(200).json(orangTuas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single OrangTua by ID
router.get('/:id', async (req, res) => {
    try {
        const orangTua = await OrangTua.findByPk(req.params.id);
        if (orangTua) {
            res.status(200).json(orangTua);
        } else {
            res.status(404).json({ error: 'OrangTua not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an OrangTua by ID
router.put('/:id', async (req, res) => {
    try {
        const {
            no_kk, nik_ibu, nama_ibu, tempat_lahir_ibu, tanggal_lahir_ibu, alamat_ktp_ibu, kelurahan_ktp_ibu,
            kecamatan_ktp_ibu, kota_ktp_ibu, provinsi_ktp_ibu, alamat_domisili_ibu, kelurahan_domisili_ibu,
            kecamatan_domisili_ibu, kota_domisili_ibu, provinsi_domisili_ibu, no_hp_ibu, email_ibu, pekerjaan_ibu,
            pendidikan_ibu, nik_ayah, nama_ayah, tempat_lahir_ayah, tanggal_lahir_ayah, alamat_ktp_ayah, kelurahan_ktp_ayah,
            kecamatan_ktp_ayah, kota_ktp_ayah, provinsi_ktp_ayah, alamat_domisili_ayah, kelurahan_domisili_ayah,
            kecamatan_domisili_ayah, kota_domisili_ayah, provinsi_domisili_ayah, no_hp_ayah, email_ayah, pekerjaan_ayah,
            pendidikan_ayah
        } = req.body;
        const orangTua = await OrangTua.findByPk(req.params.id);
        if (orangTua) {
            orangTua.no_kk = no_kk;
            orangTua.nik_ibu = nik_ibu;
            orangTua.nama_ibu = nama_ibu;
            orangTua.tempat_lahir_ibu = tempat_lahir_ibu;
            orangTua.tanggal_lahir_ibu = tanggal_lahir_ibu;
            orangTua.alamat_ktp_ibu = alamat_ktp_ibu;
            orangTua.kelurahan_ktp_ibu = kelurahan_ktp_ibu;
            orangTua.kecamatan_ktp_ibu = kecamatan_ktp_ibu;
            orangTua.kota_ktp_ibu = kota_ktp_ibu;
            orangTua.provinsi_ktp_ibu = provinsi_ktp_ibu;
            orangTua.alamat_domisili_ibu = alamat_domisili_ibu;
            orangTua.kelurahan_domisili_ibu = kelurahan_domisili_ibu;
            orangTua.kecamatan_domisili_ibu = kecamatan_domisili_ibu;
            orangTua.kota_domisili_ibu = kota_domisili_ibu;
            orangTua.provinsi_domisili_ibu = provinsi_domisili_ibu;
            orangTua.no_hp_ibu = no_hp_ibu;
            orangTua.email_ibu = email_ibu;
            orangTua.pekerjaan_ibu = pekerjaan_ibu;
            orangTua.pendidikan_ibu = pendidikan_ibu;
            orangTua.nik_ayah = nik_ayah;
            orangTua.nama_ayah = nama_ayah;
            orangTua.tempat_lahir_ayah = tempat_lahir_ayah;
            orangTua.tanggal_lahir_ayah = tanggal_lahir_ayah;
            orangTua.alamat_ktp_ayah = alamat_ktp_ayah;
            orangTua.kelurahan_ktp_ayah = kelurahan_ktp_ayah;
            orangTua.kecamatan_ktp_ayah = kecamatan_ktp_ayah;
            orangTua.kota_ktp_ayah = kota_ktp_ayah;
            orangTua.provinsi_ktp_ayah = provinsi_ktp_ayah;
            orangTua.alamat_domisili_ayah = alamat_domisili_ayah;
            orangTua.kelurahan_domisili_ayah = kelurahan_domisili_ayah;
            orangTua.kecamatan_domisili_ayah = kecamatan_domisili_ayah;
            orangTua.kota_domisili_ayah = kota_domisili_ayah;
            orangTua.provinsi_domisili_ayah = provinsi_domisili_ayah;
            orangTua.no_hp_ayah = no_hp_ayah;
            orangTua.email_ayah = email_ayah;
            orangTua.pekerjaan_ayah = pekerjaan_ayah;
            orangTua.pendidikan_ayah = pendidikan_ayah;
            await orangTua.save();
            res.status(200).json(orangTua);
        } else {
            res.status(404).json({ error: 'OrangTua not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an OrangTua by ID
router.delete('/:id', async (req, res) => {
    try {
        const orangTua = await OrangTua.findByPk(req.params.id);
        if (orangTua) {
            await orangTua.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'OrangTua not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
