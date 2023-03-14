import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public confirm: boolean = false;
  public project: Project;
  public url: string;

  constructor(
    private _ProjectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.project = new Project('', '', '', '', '', 0, '', '', '');
    this.url = Global.url;
  }


  ngOnInit(): void {
    //AIXO ES PER OBTENIR DADES DE LA URL (PARAMETRES)
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getProject(id);
    });



  }

  getProject(id: string) {
    this._ProjectService.getProject(id).subscribe({
      next: (res: any) => {
        this.project = res.projecteObtingut;
      },
      error: (e: any) => { console.log(<String>e); },
      complete: () => { console.log(this.project); },

    });

  }

  setConfirm(resposta: boolean) {
    this.confirm = resposta;

  }

  deleteProjectSelected(id: any) {
    console.log(id);
    this._ProjectService.deleteProject(id).subscribe({
      next: (res: any) => {
        this.confirm = false;
        this._router.navigate(['/projects']);
        //redigir al path on estan tots els projectes
      },
      error: (e: any) => { console.log(<String>e); },
    });
  }



}
