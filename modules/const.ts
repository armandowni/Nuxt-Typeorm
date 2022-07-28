export const SERVER_HOST = process.env.HOST || "localhost";
export const SERVER_PORT = process.env.PORT || 3000;

export const DB_CONFIG_USER = process.env.DB_USER || "postgres";
export const DB_CONFIG_PORT = parseInt(process.env.DB_PORT) || 5432;
export const DB_CONFIG_HOST = process.env.DB_HOST || SERVER_HOST;
export const DB_CONFIG_PASSWORD = process.env.PASSWORD || "admin123";
export const DB_CONFIG_DATABASE = process.env.DATABASE || "testingdb";
