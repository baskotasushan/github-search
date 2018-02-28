import { GithubService } from './../services/github.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
    selector : 'profile',
    templateUrl : './profile.component.html' 
})

export class ProfileComponent{
    users: string[];
    repos: string[];
    username: string;

    constructor(private githubService: GithubService){
        this.users = null;
    }

    searchUser(){
        console.log("Working....");
        console.log(this.username);
        this.githubService.updateUser(this.username);

        this.githubService.getUser().subscribe(user =>{
            //console.log(user);
            this.users = user;
         })
 
         this.githubService.getRepo().subscribe(repo =>{
             //console.log(repo);
             this.repos = repo;
          })
         
    }
} 