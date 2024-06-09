import { Component } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrl: './bookmarked.component.css'
})
export class BookmarkedComponent {

  dadosMovie: any[] = []
  dadosTv: any[] = []
  constructor(private page: PagesComponent, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(dados => {
      dados.forEach((e: any) => {
        if(e.category === 'Movie' && e.isBookmarked) {
          this.dadosMovie.push(e)
        } else if(e.category !== 'Movie' && e.isBookmarked){
          this.dadosTv.push(e)
        }
      })
    })
  }

  filtroMovie() {
    return this.dadosMovie.filter(e => e.title.toLowerCase().includes(this.page.searchText.toLowerCase()))
  }

  filtroTv() {
    return this.dadosTv.filter(e => e.title.toLowerCase().includes(this.page.searchText.toLowerCase()))
  }
}
