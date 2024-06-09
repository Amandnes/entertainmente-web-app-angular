import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PagesComponent } from '../pages.component';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.css'
})
export class PageMainComponent implements OnInit{

  data: any[] = []
  outrosDados: any[] = []

  constructor(private dataService: DataService, private pages: PagesComponent) {
    
  }

  ngOnInit() {
    this.dataService.getData().subscribe(dados => {
      dados.forEach((element: any) => {
        if(element.isTrending) {
          this.data.push(element)
        } else{
          this.outrosDados.push(element)
        }
      });
    })
  }

  filtroFalseTrend() {
    return this.outrosDados.filter(e => e.title.toLowerCase().includes(this.pages.searchText.toLowerCase()))
  }

  filtroTrueTrend() {
    return this.data.filter(e => e.title.toLowerCase().includes(this.pages.searchText.toLowerCase()))
  }
}
