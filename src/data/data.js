import { GitHub, LinkedIn } from '@material-ui/icons';
import agr from '../data/agr.jpg';
import gym from '../data/gym.jpg';
import cldc from '../data/cldc.jpg';
import notes from '../data/notes.jpg';
import news from '../data/news.jpg';
import util from '../data/util.jpg';
import imdb from '../data/imdb.jpg';
import myImg from '../data/image.jpg'

export const heroInfo = {
  name: 'Deven Kapadia',
  image: myImg,
  title: [
    'MERN Stack Developer',
    'Software Engineer',
    'Aspiring Data Scientist',
    'AI/ML Enthusiast',
  ],
  contacts: [
    {
      id: 1,
      name: 'GitHub',
      icon: GitHub,
      username: 'devenkapadia',
      link: 'https://github.com/devenkapadia',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedIn,
      username: 'devenkapadia',
      link: 'https://www.linkedin.com/in/devenkapadia/',
    },
  ],
};

export const aboutInfo = [
  {
    title: "About Me",
    desc: "",
  }
]

export const resumes = [
  {
    id: 1,
    year: 'Apr 2023 - July 2023',
    role: 'Full Stack Developer',
    companyName: 'Charusat Learning and Developer Club, Anand',
    companyUrl: 'https://www.instagram.com/cldc_charusat/',
    description: 'Improved tools to boost user interaction and deliver design versatility. Reviewed code, debugged problems, and corrected issues. Managed time efficiently in order to complete all tasks within deadlines.',
  },
  {
    id: 2,
    year: 'May 2023 - July 2023',
    role: 'Data Science Intern',
    companyName: 'BrainyBeam Technologies, Ahmedabad',
    companyUrl: 'https://www.brainybeam.com/',
    description: 'Created data visualization graphics, translating complex data sets into comprehensive visual representations. Translated cost and benefits of machine learning technology for non-technical audiences. Shadowed database personnel to learn new methods to achieve job duties.',
  },
  {
    id: 3,
    year: 'Aug 2021 - Aug 2022',
    role: 'AIESEC intern',
    companyName: 'AIESEC in VVN, Anand',
    companyUrl: 'https://aiesec.org/',
    description: 'Completed research, compiled data, updated spreadsheets, and produced timely reports. Interacted with students by phone, email, or in-person to provide information. Organized local events, led a team of 5 members. Attended March National Conference(MNC) at Bengaluru.',
  },
  {
    id: 4,
    year: 'May 2022 - July 2022',
    role: 'Python Programming intern',
    companyName: 'Sparks to Ideas, Ahmedabad',
    companyUrl: 'https://www.sparkstoideas.com/',
    description: 'Learned Python modules: tkinter, numpy, pandas. Created projects: wordle, bingo games, Paint, Notepad using GUI.',
  },
];


export const educations = [
  {
    id: 1,
    year: '2020 - Present',
    universityName: 'Charotar University of Science and Technology',
    department: 'Btech in Computer Engineering',
    description: 'CGPA: 9.39',
  },
  {
    id: 2,
    year: '2018 - 2020',
    universityName: 'Parth School of Science and Competetion',
    department: 'High School',
    description: 'PR: 97.24 (JEE)',
  },
  {
    id: 3,
    year: '2011 - 2018',
    universityName: 'Jay Ambe Vidhyalaya',
    department: 'Primary School',
    description: 'Percentage: 95% (10th)',
  },
];

const projectData = [
  {
    title: 'Agriculture Crop Prediction',
    image: agr,
    tools: ['Machine Learning', 'Flask', 'React', 'Material-UI', 'Node-js'],
    description: 'Built an ML model which predict the optimized crop according to weather and soil conditions. Used react material-UI framework and python Flask-API to connect it with web',
    gitLink: 'https://github.com/devenkapadia/Crop_Prediction',
  },
  {
    title: 'CLDC- Official Website',
    image: cldc,
    tools: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'Material-UI'],
    description: 'Developed a modern and responsive design for the CLDC website. Collaborated with a team of designers and developers to implement the new design using ReactJS',
    gitLink: 'https://github.com/devenkapadia/cldc-backup',
  },
  {
    title: 'Fitness Tracker',
    image: gym,
    tools: ['Python', 'OpenCV', 'Mediapipe', 'StreamLit'],
    description: 'Created a web application using Python, OpenCV, Mediapipe, and the Streamlit framework to create a fitness tracker that counts reps and sets for various exercises',
    gitLink: 'https://github.com/devenkapadia/Fitness_Tracker',
  },
  {
    title: 'Digital Notes',
    image: notes,
    tools: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'HTML'],
    description: 'Developed a web application using React, MongoDB, Node.js, and Express.js to create a digital notebook for storing and organizing notes',
    gitLink: 'https://github.com/devenkapadia/Digital-Notes',
  },
  {
    title: 'NewsTak',
    image: news,
    tools: ['React', 'Node.js', 'API', 'Express', 'CSS', 'HTML'],
    description: 'A website which fires an API request to fetch latest news, also filters the news according to different categories',
    gitLink: 'https://github.com/devenkapadia/newstak',
  },
  {
    title: 'Text-Utils',
    image: util,
    tools: ['React', 'Node.js', 'Express', 'CSS', 'HTML'],
    description: 'Website which helps to perform various text transformation according to user preference',
    gitLink: 'https://github.com/devenkapadia/text-Utils',
  },
  {
    title: 'IMDB Clone',
    image: imdb,
    tools: ['React', 'Node.js', 'API', 'Express', 'CSS', 'HTML'],
    description: 'Clone of popular movie database IMDB for learning styling, designing and working with API requests',
    gitLink: 'https://github.com/devenkapadia/IMDB-clone',
  },

];

export const projects = projectData.map((project, index) => ({
  id: index + 1,
  image: project.image,
  name: project.title,
  description: project.description,
  tools: project.tools,
  live: '',
  source: project.gitLink,
}));


export const skills = [
  {
    title: 'C++',
    logo: 'https://logowik.com/content/uploads/images/911_c_logo.jpg',
  },
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'TypeScript',
    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
  },
  {
    title: 'Python',
    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
  },
  {
    title: 'OpenCV',
    logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
  },
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },
  {
    title: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },
  {
    title: 'Material-UI',
    logo: 'https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667',
  },
  {
    title: 'MySQL',
    logo: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },
  {
    title: 'Machine Learning',
    logo: 'https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg',
  },
];
