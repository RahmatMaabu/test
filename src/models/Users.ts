import { Model, DataTypes } from "sequelize";
import  sequelize  from "../db_connection";

class Users extends Model {
    declare id: number;
    declare name: string;   
    declare username: string;
    declare email: string;
    declare password: string;
}

Users.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},
    {
        tableName: "users",
        sequelize,
        timestamps: true, // Otomatis menambahkan kolom created_at dan updated_at
    }
    );
    export default Users

    