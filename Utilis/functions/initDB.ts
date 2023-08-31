
import * as SQLite from 'expo-sqlite';

import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';


export async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.SQLiteDatabase> {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require(pathToDatabaseFile)).uri,
      FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
    );
    return SQLite.openDatabase('myDatabaseName.db');
  }



