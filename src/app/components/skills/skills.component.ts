import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'skillsComponent',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  ngOnInit(): void {
  }

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100], label: 'Lenguajes de Programacion' },
    { data: [50, 150, 120], label: '' },
    { data: [250, 130, 70], label: 'Otros' }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

}
