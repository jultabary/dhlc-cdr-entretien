import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl : 'app/home/home.component.html',
    styleUrls : ['app/home/home.component.css']
})

export class HomeComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title = "Accueil";
    }


}