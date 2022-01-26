import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github.service";

@Component({
  selector: 'app-respositorios',
  templateUrl: './respositorios.component.html',
  styleUrls: ['./respositorios.component.css']
})
export class RespositoriosComponent implements OnInit {

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.githubService.obtenerRepositoriosGithub().subscribe(console.log);
  }

}
