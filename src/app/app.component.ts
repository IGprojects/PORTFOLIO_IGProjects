import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  rutaActiva: boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.rutaActiva = true;
  }



}
