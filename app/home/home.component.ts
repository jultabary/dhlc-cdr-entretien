import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl : 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title = "Accueil";
    }


}