import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project: any;
  public filesToUpload: Array<File> = [];
  public url: string;
  public status: number = 0;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.project = new Project('', '', '', '', '', 0, '', '', '');
    this.title = "Editar proyecto";
    this.url = Global.url;

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getProject(id);
    });
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.status = 1;
        console.log(response);
        this.project = response.projecteObtingut;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit() {
    this._projectService.editProject(this.project).subscribe(
      response => {
        if (response) {
          // Subir la imagen
          if (this.filesToUpload.length > 0) {

            this._uploadService.makeFileRequest(Global.url + "uploadImage/" + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.save_project = result.project;
                this._router.navigate(['/projects']);
              });
          } else {
            this.save_project = response.project;
            this._router.navigate(['/projects']);
          }

        } else {
          console.log('No hi hagut resposta');
          this._router.navigate(['/projects']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
