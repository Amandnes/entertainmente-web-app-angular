import { Component } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css'
})
export class TvSeriesComponent {
  
  data: any[] = []
  constructor(private page: PagesComponent, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(dados => {
      dados.forEach((e: any) => {
        if(e.category === 'TV Series') {
          this.data.push(e)
        }
      })
    })
  }

  filtro() {
    return this.data.filter(e => e.title.toLowerCase().includes(this.page.searchText.toLowerCase()))
  }
}
