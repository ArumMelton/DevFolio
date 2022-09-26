import Mock from "../mock";
import "../../etcassets/centered_logo.png"
import "../../etcassets/ncstate-type-2x2-red-max.png"

const database = {
  information: {
    name: 'Arum Melton',
    aboutContent: "Full Stack Developer from Raleigh, NC. Welcome to my page!",
    age: '',
    phone: '',
    nationality: '',
    language: '',
    email: 'arummeltondev@gmail.com',
    address: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: 'https://twitter.com/just_melt',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/arum-melton-9b21b0237/',
      dribbble: '',
      github: 'https://github.com/ArumMelton',
      instagram: 'https://www.instagram.com/itsjustmelt_/',
      soundcloud: 'https://soundcloud.com/dvise',
      spotify: 'https://open.spotify.com/artist/3jtj8lhpwHDOFtfET0OSH7?si=YB1CcVFmSUOk2FOAbUnt1Q',
      itunes: 'https://music.apple.com/us/artist/dvise/1449641255'
    },
    brandImage: '/images/ArumsLogo.png',
    aboutImage: '/images/falls.jpg',
    aboutImageLg: '/images/falls.jpg',
    cvfile: '/files/ArumResume2022.docx'
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "Provide beautiful, interactive, and responsive designs."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Intuitive user experience integrated with an optimized build, resulting in endless opportunities for expansion."
    },
    {
      title: "Full Stack Engineering",
      icon: 'layers',
      details: "Ability to build, write, and design full stack applications. Local machine deployments that include Audio Unit Packages, VST2, and VST3 plugins for Digital Audio Workstations or DAWs)."
    },
    {
      title: "Mobile Applications",
      icon: 'mobile',
      details: "Develop an application for Web, IOS, Android."
    },
    {
      title: "Music & Sound Production",
      icon: 'music',
      details: "7 Years of music production experience. Extremely well versed in Logic Pro, Ableton Live, and Izotope Ozone. "
    },
    {
      title: "Audio Engineering & Design",
      icon: 'headphone',
      details: "7 Years of audio engineering and design experience. Mixing, tracking, sound design with Xfer Serum (Wavetable), mastering with Izotope's Ozone Advanced."
    },
    {
      title: "Videography & Production",
      icon: 'video',
      details: "5 years of education and training at NCSU for videography, typically using Final Cut Pro"
    },
  ],
  reviews: [
    {
      id: 1,
      content: "Arum built me a website that began as a front-end webpage. As we grew as a company, we needed more capability that extended to back-end development. He was extremely accomadating and was easily able to fit our needs!",
      author: {
        name: 'Tom V.',
        designation: 'Client - Tombachi Restaurants'
      }
    },
    {
      id: 2,
      content: "Arum's app that he created for me and my disc golf community was absolutely incredible. Very easy to navigate and the UI is beautiful",
      author: {
        name: 'Antonio F.',
        designation: 'Client - Disc Golfer'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Tombachi Restaurants",
      subtitle: "Full stack website for Tombachi Restaurants.",
      imageUrl: "https://github.com/ArumMelton/melts-portfolio/blob/main/assets/images/TombachiDemo.png?raw=true",
      url: 'http://www.tombachirestaurants.com/'
    },
    {
      id: 2,
      title: "Sip-Happens",
      subtitle: "Full Stack application allowing a user to sign in/up and view wines and then save expert suggested food pairings. The site is also linked to a retailer, allowing the user to purchase wines as well.",
      imageUrl: "https://github.com/ArumMelton/melts-portfolio/blob/main/assets/images/DemoHome.png?raw=true",
      url: 'https://sip-happens-unc.herokuapp.com/'
    },
    {
      id: 3,
      title: "CheckIt",
      subtitle: "Intuitive weather checking web application.",
      imageUrl: "https://github.com/ArumMelton/melts-portfolio/blob/main/assets/images/Check%20This%20Weather%20Mock.png?raw=true",
      url: 'https://arummelton.github.io/check-this-weather/'
    },
    {
      id: 4,
      title: "NoteApp",
      subtitle: "Simple notes application that allows users to take a note and save using local storage.",
      imageUrl: "https://github.com/ArumMelton/melts-portfolio/blob/main/assets/images/DaNoteTakerDemo.png?raw=true",
      url: "https://danotetaker-app.herokuapp.com/"
    },
    {
      id: 5,
      title: "Password Generator",
      subtitle: "Simple password generator.",
      imageUrl: "https://github.com/ArumMelton/melts-portfolio/blob/main/assets/images/passmock1.jpg?raw=true",
      url: 'https://arummelton.github.io/pass-the-word/'
    },
    {
      id: 6,
      title: "ScheduleMe",
      subtitle: "Allows users to keep track of daily schedule.",
      imageUrl: "https://github.com/ArumMelton/schedule-me/raw/main/assets/images/ScheduleMeScreenshot.png",
      url: 'https://arummelton.github.io/schedule-me/'
    },
    {
      id: 7,
      title: "Quizless",
      subtitle: "An Interactive Coding Quiz Application",
      imageUrl: "https://github.com/ArumMelton/melts-portfolio/blob/main/assets/images/quizmock1.jpg?raw=true",
      url: "https://github.com/ArumMelton/Quizless"
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2022",
        position: "Contract/Freelance Web Development",
        company: "Tombachi Restaurants",
        details: "Develop and maintain full stack web application for Tombachi Restaurants.",
       
      },
      {
        id: 2,
        year: "2019 - 2022",
        position: "Banquet & Event Lead Server/Bartender",
        company: "Drive Shack (Raleigh)",
        details: "Individually handled large parties of up to 30 people, took lead of parties up to 300 guests. In charge of fellow servers for private events held at Drive Shack. I also bartended and handled most of the customer experience of service at the venue."
      },
      {
        id: 3,
        year: "2016 - 2019",
        position: "Bartender, Server",
        company: "Brio Tuscan Grill",
        details: "Bartended and Served at Brio. Handled money, and cash outs for servers. In charge of opening and closing the bar with extremely limited supervision."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2022",
        graduation: "Certification",
        university: "University of North Carolina at Chapel Hill",
        details: "Earned Certification for Full Stack Software Engineering and Development.",
        
      },
      {
        id: 2,
        year: "2013-2018",
        graduation: "(M) Film; (m) Communications, English",
        university: "North Carolina State University",
        details: "Attended NCSU and majored in Film. Minoring in Communications and English."
      },
      {
        id: 3,
        year: "2009-2013",
        graduation: "Higher School Diploma",
        university: "Southeast Guilford High",
        details: "Graduated 13th in a class of 367. Weighted GPA: 4.675, Unweighted: 3.87. Varsity letterman and captain in Football and Lacrosse (3yrs)"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['(919)819-9414', ''],
    emailAddress: ['arummeltondev@gmail.com', 'meltworkmail@gmail.com'],
    address: "Raleigh, NC"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});