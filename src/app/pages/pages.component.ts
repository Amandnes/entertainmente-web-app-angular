import { Component, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrl: './pages.component.css'
})
export class PagesComponent{

    searchText: any = ''

}