import { Component, OnInit } from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {ToolsService} from '../services/tools.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  toolsList: ToolModel[] = [];
  toolsListFav: ToolModel[] = [];
  constructor(private toolsService: ToolsService) {
  }

  ngOnInit() {
    this.toolsList = this.toolsService.toolsList;
    this.toolsListFav = this.toolsList.filter((current) => current.favorite ===  true);
  }

}
