import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';

@Injectable()
export class ToolsService {
  toolsList: ToolModel[] = [
    {
      name: 'tool1',
      details: 'tool tool tool 1',
      image: ''
    },
    {
      name: 'tool2',
      details: 'tool tool tool 2',
      image: ''
    },
    {
      name: 'tool3',
      details: 'tool tool tool 3',
      image: ''
    },
    {
      name: 'tool4',
      details: 'tool tool tool 4',
      image: ''
    },
    {
      name: 'tool5',
      details: 'tool tool tool 5',
      image: ''
    },
    {
      name: 'tool6',
      details: 'tool tool tool 6',
      image: ''
    },
    {
      name: 'tool7',
      details: 'tool tool tool 7',
      image: ''
    }
  ];

  constructor() { }
}
