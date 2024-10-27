import { type SQLiteDatabase } from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

export default async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS catalog (
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                nameScientific TEXT,
                lifeTime TEXT,
                botanicalFamily TEXT,
                habitat TEXT,
                ediblePart TEXT,
                consumption TEXT,
                warning TEXT,
                cultivation TEXT,
                plantTime TEXT
            );
            CREATE TABLE IF NOT EXISTS record (
                id INTEGER PRIMARY KEY NOT NULL,
                catalog INTEGER,
                createDate DATETIME,
                comment TEXT,
                local STRING,
                FOREIGN KEY (catalog) REFERENCES catalog(id)
            );
            CREATE TABLE IF NOT EXISTS recordImages (
                id INTEGER PRIMARY KEY NOT NULL,
                record INTEGER,
                imageURL TEXT,
                FOREIGN KEY (record) REFERENCES record(id)
            )`);
}


export async function refactorDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        DROP TABLE recordImages;
        DROP TABLE record;
        DROP TABLE catalog;
        `);

    initializeDatabase(database);

    console.log(FileSystem.readAsStringAsync(FileSystem.documentDirectory!));

    FileSystem.readDirectoryAsync(FileSystem.documentDirectory!).then((res) => {
        console.log(res);
        res.forEach(async (item) => {
            if (item.endsWith('jpg')) {
                await FileSystem.deleteAsync(FileSystem.documentDirectory + item);
            }
        })
    }).catch((err) => {
        console.log(err);
    });
}