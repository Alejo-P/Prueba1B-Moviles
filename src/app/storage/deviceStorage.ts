// Instalar el plugin de Capacitor para el sistema de archivos
// npm install @capacitor/filesystem
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DeviceStorage{
    public async writeFile(fileName:string, data:string):Promise<writeResult>{
        try {
            const resultado = await Filesystem.writeFile({
                path: fileName,
                data: data,
                directory: Directory.Documents,
                encoding: Encoding.UTF8
            });
            console.log("Archivo guardado", resultado);
            return {isSaved:true, message:`Archivo guardado en ${resultado.uri}`};      
        } catch (error) {
            console.log("Error al guardar el archivo", error);
            return {isSaved:false, message:"Error al guardar el archivo"};
        }
    }

    public async readFile(fileName:string):Promise<any>{
        try {
            const result = await Filesystem.readFile({
                path: fileName,
                directory: Directory.Documents,
                encoding: Encoding.UTF8,
            });
            return result.data;
        } catch (error) {
            console.log("Error al leer el archivo", error);
            return null;
        }
    }

    public async deleteFile(fileName:string):Promise<void>{
        try {
            await Filesystem.deleteFile({
                path: fileName,
                directory: Directory.Documents,
            });
            console.log('Archivo eliminado');
        } catch (error) {
            console.error('Error al eliminar el archivo:', error);
        }
    }

    public async fileInfo(fileName:string):Promise<any>{
        try {
            const info = await Filesystem.stat({
              path: fileName,
              directory: Directory.Documents,
            });
            return info;
        } catch (error) {
            console.error('Error al obtener la información del archivo:', error);
            return null;
        }
    }
}

const DirectoryNames = {
    Documents: Directory.Documents,
    Data: Directory.Data,
    Cache: Directory.Cache,
    External: Directory.External,
    ExternalStorage: Directory.ExternalStorage
};


export interface writeResult {
    isSaved:boolean;
    message:string;
}