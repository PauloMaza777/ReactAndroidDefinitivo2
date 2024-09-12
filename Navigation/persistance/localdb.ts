import SQLite from "react-native-sqlite-storage";

export default class LocalDB {
  
  static async connect() {
    const prom = SQLite.openDatabase({ name: 'foro' });
    console.log({prom});
    return prom;
  }

  static async init() {
    const db = await LocalDB.connect();
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS noticias (
            id              INTEGER           PRIMARY KEY       AUTOINCREMENT,
            title           VARCHAR(64)       NOT NULL,
            author          VARCHAR(64)       NOT NULL,
            date            VARCHAR(64)       NOT NULL,
            description     VARCHAR(100)      NOT NULL
          );`,
          
        [],
        () => console.log('CREATED TABLE noticias'),
        error => console.error({error}),
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS esport (
            id              INTEGER           PRIMARY KEY       AUTOINCREMENT,
            title           VARCHAR(64)       NOT NULL,
            author          VARCHAR(64)       NOT NULL,
            date            VARCHAR(64)       NOT NULL,
            description     VARCHAR(100)      NOT NULL
          );`,
          
        [],
        () => console.log('CREATED TABLE esport'),
        error => console.error({error}),
      );
    });
  }
}
