'use strict';

const Tool = require('../api/tools/tools.model');

module.exports = () => {
  return Tool.find({}).remove({}).then(() => {
    return Tool.create(
      {
        name: 'Slack',
        details: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.' +
        ' Slack began as an internal tool used by their company, Tiny Speck, in the development of Glitch, a now defunct ' +
        'online game. The name is an acronym for "Searchable Log of All Conversation and Knowledge".',
        image: '../../assets/logo/logo-11.png',
        link: 'https://slack.com/',
        favorite: true,
        category: 'Communication',
        tags: []
      },
      {
        name: 'Facebook',
        details: 'Facebook is an American for-profit corporation and an online social media and social networking service ' +
        'based in Menlo Park, California. The Facebook website was launched on February 4, 2004, by Mark Zuckerberg, ' +
        'along with fellow Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.',
        image: '../../assets/logo/logo-1.png',
        link: 'https://www.facebook.com/',
        favorite: true,
        category: 'Social media',
        tags: []
      },
      {
        name: 'Twitter',
        details: 'Twitter is an online news and social networking service where users post and interact with messages, ' +
        '"tweets", restricted to 140 characters. Registered users can post tweets, but those who are unregistered can ' +
        'only read them. Users access Twitter through its website interface, SMS or a mobile device app. Twitter Inc. ' +
        'is based in San Francisco, California, United States, and has more than 25 offices around the world.',
        image: '../../assets/logo/logo-2.png',
        link: 'https://twitter.com/',
        favorite: false,
        category: 'Social media',
        tags: []
      },
      {
        name: 'Angular',
        details: 'Angular is a JavaScript-based open-source front-end web application framework mainly maintained by Google.',
        image: '../../assets/logo/logo-16.png',
        link: 'https://angular.io/',
        favorite: true,
        category: 'Programming',
        tags: ['Web developers']
      },
      {
        name: 'Bootstrap',
        details: 'Bootstrap is a free and open-source front-end web framework for designing websites and web applications. ' +
        'It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface ' +
        'components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end ' +
        'development only.',
        image: '../../assets/logo/logo-9.png',
        link: 'https://v4-alpha.getbootstrap.com/',
        favorite: true,
        category: 'Programming',
        tags: ['HTML & CSS', 'Web developers']
      },
      {
        name: 'GitHub',
        details: 'GitHub is a web-based Git or version control repository and Internet hosting service. It offers all of ' +
        'the distributed version control and source code management (SCM) functionality of Git as well as adding its own ' +
        'features. It provides access control and several collaboration features such as bug tracking, feature requests, ' +
        'task management, and wikis for every project.',
        image: '../../assets/logo/logo-10.png',
        link: 'https://github.com/',
        favorite: true,
        category: 'Programming',
        tags: ['Repository']
      },
      {
        name: 'Inbox',
        details: 'Inbox by Gmail is an email service developed by Google. Announced in limited invitation-only basis on ' +
        'October 22, 2014, it was officially released to the public on May 28, 2015. Made by the same people who work on ' +
        'Gmail, Inbox serves as a "completely different type of inbox, designed to focus on what really matters.',
        image: '../../assets/logo/logo-3.png',
        link: 'https://inbox.google.com/',
        favorite: false,
        category: 'Communication',
        tags: []
      },
      {
        name: 'Trello',
        details: 'Trello is a web-based project management application originally made by Fog Creek Software in 2011, ' +
        'that was spun out to form the basis of a separate company in 2014[1] and later sold to Atlassian in January 2017. ' +
        'The company is based in New York City.',
        image: '../../assets/logo/logo-4.png',
        link: 'https://trello.com/',
        favorite: false,
        category: 'Communication',
        tags: []
      },
      {
        name: 'LinkedIn',
        details: 'LinkedIn is a business- and employment-oriented social networking service that operates via websites and mobile apps. ',
        image: '../../assets/logo/logo-5.png',
        link: 'https://pl.linkedin.com/',
        favorite: false,
        category: 'Social media',
        tags: []
      },
      {
        name: 'Bitbucket',
        details: 'Bitbucket is a web-based hosting service that is owned by Atlassian, used for source code and development ' +
        'projects that use either Mercurial (since launch) or Git (since October 2011) revision control systems. ' +
        'Bitbucket offers both commercial plans and free accounts.',
        image: '../../assets/logo/logo-6.png',
        link: 'https://www.bitbucket.com/',
        favorite: false,
        category: 'Programming',
        tags: ['Repository']
      },
      {
        name: 'Travis CI',
        details: 'Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.',
        image: '../../assets/logo/logo-7.png',
        link: 'https://travis-ci.org/',
        favorite: false,
        category: 'Programming',
        tags: ['CI']
      },
      {
        name: 'Udemy',
        details: 'Udemy.com is an online learning platform. It is aimed at professional adults who want to add new skills ' +
        'to their resumes, or explore their passions. Unlike academic MOOC programs driven by traditional collegiate ' +
        'coursework, Udemy provides a platform for experts of any kind to create courses which can be offered to the public, ' +
        'either at no charge or for a tuition fee. Udemy provides tools which enable users to create a course, ' +
        'promote it and earn money from student tuition charges.',
        image: '../../assets/logo/logo-8.png',
        link: 'https://www.udemy.com/',
        favorite: true,
        category: 'Education',
        tags: ['Online courses']
      },
      {
        name: 'Coursera',
        details: 'Coursera is a venture-backed, education-focused technology company founded by Stanford professors ' +
        'Andrew Ng and Daphne Koller that offers online courses and is based in Mountain View, CA.[3] Coursera works ' +
        'with universities and other organizations to offer online courses, specializations, and degrees in a variety of ' +
        'subjects, such as engineering, humanities, medicine, biology, social sciences, mathematics, business, computer ' +
        'science, digital marketing, data science, and others. As of February 2017, Coursera had more than 24 million ' +
        'registered users and more than 2,000 courses.',
        image: '../../assets/logo/logo-13.png',
        link: 'https://www.coursera.org/',
        favorite: true,
        category: 'Education',
        tags: ['Online courses']
      },
      {
        name: 'Jenkins',
        details: 'Jenkins is an open source automation server written in Java. The project was forked from Hudson after ' +
        'a dispute with Oracle.Jenkins helps to automate the non-human part of the whole software development process with n' +
        'ow common things like continuous integration and by empowering teams to implement the technical aspects of continuous ' +
        'delivery. It is a server-based system running in a servlet container such as Apache Tomcat. It supports version ' +
        'control tools, including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, ClearCase and RTC, and can execute ' +
        'Apache Ant, Apache Maven and sbt based projects as well as arbitrary shell scripts and Windows batch commands. ' +
        'The creator of Jenkins is Kohsuke Kawaguchi. Released under the MIT License, Jenkins is free software.',
        image: '../../assets/logo/logo-12.png',
        link: 'https://jenkins.io/',
        favorite: true,
        category: 'Programming',
        tags: ['CI']
      },
      {
        name: 'edX',
        details: 'JedX is a massive open online course (MOOC) provider. It hosts online university-level courses in a wide ' +
        'range of disciplines to a worldwide student body, including some courses at no charge. It also conducts research ' +
        'into learning based on how people use its platform. EdX differs from other MOOC providers, such as Coursera and ' +
        'Udacity, in that it is a nonprofit organization and runs on the Open edX open-source software.',
        image: '../../assets/logo/logo-14.png',
        link: 'https://www.edx.org/',
        favorite: false,
        category: 'Education',
        tags: ['Online courses']
      },
      {
        name: 'Sitepoint',
        details: 'SitePoint is a Melbourne, Australia-based website, and publisher of books, courses and articles for ' +
        'web developers. In January 2014, SitePoint.com had an Alexa ranking of 889, and a Quantcast rating of 14,934.',
        image: '../../assets/logo/logo-15.png',
        link: 'https://www.sitepoint.com/',
        favorite: false,
        category: 'Education',
        tags: ['HTML & CSS', 'Angular', 'Web developers']
      }


    );
  });
};
