'use strict';

const Tool = require('../api/tools/tools.model');

module.exports = () => {
  return Tool.find({}).remove({}).then(() => {
    return Tool.create(
      {
        name: 'Lorem dolor sit amet',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore ' +
            'et dolore magna aliqua. Ut enim ad minimtation ullamco laboris nisi aliquip ex ' +
            'ea commodo consequat.',
        image: '../../assets/logo/logo-2.png',
        favorite: false,
        category: 'Programming',
        tags: ['Javascript', 'Node.js']
      },
      {
        name: 'Lorem ipsum',
        details: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore.',
        image: '../../assets/logo/logo-4.png',
        favorite: false,
        category: 'Programming',
        tags: ['Javascript', 'Bootstrap']
      },
      {
        name: 'Lorem ipsum dolor',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore.',
        image: '../../assets/logo/logo-6.png',
        favorite: true,
        category: 'Programming',
        tags: ['Javascript', 'Node.js', 'Bootstrap']
      },
      {
        name: 'Consectetur elit',
        details: 'Consectetur consectetur adipiscing elit adipiscing elit, sed do eiusmod tempor incididunt ' +
            'ut labore, ad sed do eiusmod minimtation ullamco.',
        image: '../../assets/logo/logo-8.png',
        favorite: true,
        category: 'Programming',
        tags: ['Bootstrap', 'GitHub']
      },
      {
        name: 'Duis voluptate',
        details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '../../assets/logo/logo-10.png',
        favorite: false,
        category: 'Programming',
        tags: ['Javascript', 'Node.js', 'Bootstrap', 'GitHub']
      },
      {
        name: 'Duis eu con adipsc elit si in adipiscing elit',
        details: 'Duis dolore nulla.',
        image: '../../assets/logo/logo-1.png',
        favorite: false,
        category: 'Programming',
        tags: ['Javascript', 'Node.js', 'GitHub']
      },
      {
        name: 'Excepteur sint occaecat cupidatat',
        details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
            'laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur ' +
            'adipiscing elit, sed do eiusmod tempor incididunt ut labore. Duis aute irure dolor in reprehenderit. ' +
            'Excepteur sint occaecat cupidatat non proident.',
        image: '../../assets/logo/logo-3.png',
        favorite: true,
        category: 'Health care',
        tags: ['Diet', 'Cycling', 'Volleyball', 'Football']
      },
      {
        name: 'Duiduptate',
        details: 'Duis dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: '../../assets/logo/logo-5.png',
        favorite: false,
        category: 'Health care',
        tags: ['Running', 'Football', 'Diet']
      },
      {
        name: 'Irure dolor in reprehenderit irure dolor in repreh',
        details: 'Duis aute irure dolor in ruis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
            'eu fugiat nulla pariatur.',
        image: '../../assets/logo/logo-7.png',
        favorite: true,
        category: 'Health care',
        tags: ['Diet']
      },
      {
        name: 'Excepnt occaecat cupidatat',
        details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
            'laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur ' +
            'adipiscing elit, sed do eiusmod tempor incididunt ut labore. Duis aute irure dolor in reprehenderit. ' +
            'Excepteur sint occaecat cupidatat non proident.',
        image: '../../assets/logo/logo-9.png',
        favorite: false,
        category: 'Health care',
        tags: ['Running', 'Cycling']
      },
      {
        name: 'Axcedatat',
        details: 'Pccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
            'laborum. Duis aute it in voluptate velit esse. Lorem ipsum dolor sit amet, consectetur ' +
            'adipiscing elitor incididunt ut labore. Duis aute irure dolor in reprehenderit. ' +
            'Excepteur sint occaecat cupidatat non proident.',
        image: '../../assets/logo/logo-11.png',
        favorite: false,
        category: 'Health care',
        tags: ['Diet', 'Running', 'Football']
      }


    );
  });
};
