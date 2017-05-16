import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';

@Injectable()
export class ToolsService {
  toolsList: ToolModel[] = [
    {
      name: 'Lorem dolor sit amet',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore ' +
      'et dolore magna aliqua. Ut enim ad minimtation ullamco laboris nisi aliquip ex ' +
      'ea commodo consequat.',
      image: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png'
    },
    {
      name: 'Lorem ipsum',
      details: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore.',
      image: 'http://blog.ninja-squad.com/assets/images/ng2-ebook/ng2-logo.png'
    },
    {
      name: 'Lorem ipsum dolor',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/2000px-JSON_vector_logo.svg.png'
    },
    {
      name: 'Consectetur elit',
      details: 'Consectetur consectetur adipiscing elit adipiscing elit, sed do eiusmod tempor incididunt ' +
      'ut labore, ad sed do eiusmod minimtation ullamco.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-' +
      'Unofficial_JavaScript_logo_2.svg.png'
    },
    {
      name: 'Duis voluptate',
      details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://cdn.auth0.com/blog/jwtalgos/logo.png'
    },
    {
      name: 'Duis eu',
      details: 'Duis dolore nulla.',
      image: 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg'
    },
    {
      name: 'Excepteur sint occaecat cupidatat',
      details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit, sed do eiusmod tempor incididunt ut labore. Duis aute irure dolor in reprehenderit. ' +
      'Excepteur sint occaecat cupidatat non proident.',
      image: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png'
    }
  ];

  constructor() {
  }
}
