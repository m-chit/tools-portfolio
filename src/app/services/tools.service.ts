import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';

@Injectable()
export class ToolsService {
  toolsList: ToolModel[] = [
    {
      name: 'tool1',
      details: 'tool tool tool 1',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    },
    {
      name: 'tool2',
      details: 'tool tool tool 2',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    },
    {
      name: 'tool3',
      details: 'tool tool tool 3',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    },
    {
      name: 'tool4',
      details: 'tool tool tool 4',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    },
    {
      name: 'tool5',
      details: 'tool tool tool 5',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    },
    {
      name: 'tool6',
      details: 'tool tool tool 6',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    },
    {
      name: 'tool7',
      details: 'tool tool tool 7',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
    }
  ];

  constructor() { }
}
