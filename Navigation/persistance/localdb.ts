// Paulo Esteban Maza Rivera - 20460351
// Aqui se realiza la conexión con la base de datos Firebase y la creación de las tablas que seran utilizadas en el foro

import SQLite from "react-native-sqlite-storage";

export default class LocalDB {
  
  static async connect() {
    const prom = SQLite.openDatabase({ name: 'foro' }); // Base de datos llamada foro
    console.log({prom});
    return prom;
  }

  static async init() {
    const db = await LocalDB.connect();
    db.transaction((tx) => {
      tx.executeSql(
        // Creación de la tabla noticias
        `CREATE TABLE IF NOT EXISTS noticias ( 
            id              INTEGER           PRIMARY KEY       AUTOINCREMENT,
            title           VARCHAR(64)       NOT NULL,
            author          VARCHAR(64)       NOT NULL,
            date            VARCHAR(64)       NOT NULL,
            description     VARCHAR(100)      NOT NULL
          );`,
          
        [],
        () => console.log('CREATED TABLE noticias'), // Tabla creada con exito
        error => console.error({error}), // Mensaje de error por si no se crea la tabla como corresponde
      );
      tx.executeSql(
        // Creación de la tabla E-Sports
        `CREATE TABLE IF NOT EXISTS esport (
            id              INTEGER           PRIMARY KEY       AUTOINCREMENT,
            title           VARCHAR(64)       NOT NULL,
            author          VARCHAR(64)       NOT NULL,
            date            VARCHAR(64)       NOT NULL,
            description     VARCHAR(100)      NOT NULL
          );`,
          
        [],
        () => console.log('CREATED TABLE esport'), // Tabla creada con exito
        error => console.error({error}), // Mensaje de error por si no se crea la tabla como corresponde
      );
      tx.executeSql(
        // Creación de la tabla de registro de usuarios
        `CREATE TABLE IF NOT EXISTS registro (
            id              INTEGER           PRIMARY KEY       AUTOINCREMENT,
            email           VARCHAR(64)       NOT NULL,
            password          VARCHAR(64)       NOT NULL
          );`,
          
        [],
        () => console.log('CREATED TABLE registro'), // Tabla creada con exito
        error => console.error({error}), // Mensaje de error por si no se crea la tabla como corresponde
      );
    });
  }
}

// Paulo Esteban Maza Rivera - 20460351
