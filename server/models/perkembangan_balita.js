const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');
const Balita = require('./balita');
const Pengguna = require('./pengguna');
const Dokter = require('./dokter');

class PerkembanganBalita extends Model {}

PerkembanganBalita.init({
    balita: {
        type: DataTypes.INTEGER,
        references: {
            model: Balita,
            key: 'id'
        }
    },
    tanggal_kunjungan: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    berat_badan: {
        type: DataTypes.INTEGER
    },
    tinggi_badan: {
        type: DataTypes.INTEGER
    },
    status_gizi: {
        type: DataTypes.ENUM('buruk','kurang','baik','lebih','obesitas'),
    },
    keterangan: {
        type: DataTypes.STRING
    },
    tipe_imunisasi: {
        type: DataTypes.ENUM('BCGE','Hepatitis B','Polio','DPT-HB-Hib','Campak','MR'),
    },
    tipe_vitamin: {
        type: DataTypes.ENUM('A','Cacing'),
    },
    lingkar_kepala: {
        type: DataTypes.INTEGER
    },
    kader: {
        type: DataTypes.INTEGER,
        references: {
            model: Pengguna,
            key: 'id'
        }
    },
    dokter: {
        type: DataTypes.INTEGER,
        references: {
            model: Dokter,
            key: 'id'
        }
    },
}, {
    sequelize,
    modelName: 'PerkembanganBalita'
});

module.exports = PerkembanganBalita;
