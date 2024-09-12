import { Model, DataTypes } from "sequelize";
import  sequelize  from "../db_connection";


class Kesiswaan extends Model {
    declare id: number;
    declare fullName: string;
    declare nisn: number;
    declare ttl: string;
    declare jenis_kelamin: string;
    declare agama: string;
    declare nomor_hp: number;
    declare email: string;
    declare alamat: string;
}

Kesiswaan.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nisn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    ttl: {
        type: DataTypes.STRING,
        allowNull: false
    },
   jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_hp: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
        tableName: "siswa",
        sequelize,
        timestamps: true, 
    }
    
);

export default Kesiswaan
