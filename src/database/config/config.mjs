const options = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    migrationStorageTableName: 'migrations',
};

if (process.env.NODE_ENV === 'production') {
    if (process.env.DATABASE_URL) {
        options.url = process.env.DATABASE_URL;  // Use DATABASE_URL if available
    } else {
        options.dialectOptions = {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        };
    }
}

export default {
    development: options,
    test: { ...options, logging: false },  // Disable logging in test environment
    production: options,
};
