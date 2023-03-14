import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {
    public url: string;

    constructor() {
        this.url = Global.url; //localhost:3700/api/getProject
    }

    //5.SENVIAN ELS FITXERS PASSATS COM A PARAMETRE COM SI FOS UN FORMULARI
    makeFileRequest(url: String, params: Array<string>, files: Array<File>, name: String) {
        return new Promise(function (resolve, reject) {
            var formData: any = new FormData();//AIXO ES COM UN FORMULARI QUE ENPLENAREM AMB ELS FITXERS QUE ENS PASSI EL CLIENT
            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            console.log(url);
            xhr.open('POST', <string>url, true); //FA UNA HTTPREQUEST PER CRIDAR L API I ENVIAR EL FORMULARI EMPLENAT AMB ELS FITXERS PASSATS PER EL PARAMETRE DE LA FUNCIO
            xhr.send(formData);
        });

    }
}