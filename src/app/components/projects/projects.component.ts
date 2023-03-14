import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public url: string;

  constructor(private _ProjectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._ProjectService.getProjects().subscribe({
      next: (res) => {
        console.log(res);
        this.projects = res.projectesGuardats;
      },
      error: (e) => { console.log(<String>e); },
      complete: () => { console.log(this.projects); },

    });

  }


}
