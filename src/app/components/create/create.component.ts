import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})


export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: number = 0;
  public filesUpload: Array<File> = [];

  constructor(private _projectService: ProjectService, private _uploadService: UploadService) {
    this.title = 'Crear Proyectos';
    this.project = new Project('', '', '', '', '', 0, '', '', '');
  }


  onSubmit(form: any) {
    //3.PRIMER GUARDA LES DADES DE TEST/NUMEROS
    this._projectService.addProject(this.project).subscribe(
      response => {
        console.log(response);
        if (response.project) {

          //4.PUJEN ELS FITXERS(IMATGE) SELS I PASSA LA URL PER CRIDAR L API , ELS FITXERS I EL NOM DEL CAMP
          this._uploadService.makeFileRequest(Global.url + 'uploadImage/' + response.project._id, [], this.filesUpload, 'image').then((response) => {
            this.status = 1;
            form.reset();
          }).catch((error) => { console.log(error); });


        } else {
          this.status = 2;
        }
      },

      error => {
        this.status = 2;
        console.log(error);
      }

    );
  }

  //2.CARREGAR FITXERS QUE ENS HAN PASSAT ELS GUARDEM PERQUE DESPRES ES PUJARAN
  fileChangeEvent(fileInput: any) {
    this.filesUpload = <Array<File>>fileInput.target.files;
  }

  ngOnInit(): void {
  }

}
