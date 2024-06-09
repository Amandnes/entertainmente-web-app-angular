import { Component, OnInit } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  data: any[] = []
  constructor(private page: PagesComponent, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(dados => {
      dados.forEach((e: any) => {
        if(e.category === 'Movie') {
          this.data.push(e)
        }
      })
    })
  }

  filtro() {
    return this.data.filter(e => e.title.toLowerCase().includes(this.page.searchText.toLowerCase()))
  }
}
