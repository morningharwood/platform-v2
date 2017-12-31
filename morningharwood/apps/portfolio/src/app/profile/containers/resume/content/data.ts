import { ResumeBlock } from '../interfaces/index';

// TODO make this in fb.
export const socials = [
  {place: 'Github', url: 'https://github.com/matthewharwood', text: 'matthewharwood'},
  {place: 'Linkedin', url: 'https://www.linkedin.com/in/morningharwood/', text: 'morningharwood'},
  {place: 'Facebook', url: 'https://www.facebook.com/Watashi', text: 'watashi'},
  {place: 'Twitter', url: 'https://twitter.com/Matty0187', text: 'matty0187'},
  {place: 'Google+', url: 'https://plus.google.com/u/1/+MatthewHarwood', text: 'matthewharwood'},
  {
    place: 'Ethereum Wallet',
    url: 'https://etherscan.io/address/0xb3d9dec692031257044a6f366ff4144997bb9205',
    text: 'public key',
  },
];

export const me = {
  name: 'Matthew Harwood',
  title: 'Developer + Multidisciplinary Designer',
  description: 'I am a generalist; slowly becoming a specialist in Web Development. I mix art, design, and technology, to create effective experiences that deliver value at scale. My professional goals are simple: surround myself by smart, energetic, creative people while working on solving problems that matter.',
  phone: '1.415.486.6018',
  email: 'info@morningharwood.com',
  domain: 'www.morningharwood.com',
  fullDomain: 'https://www.morningharwood.com'
};

export const experiences: ResumeBlock[] = [
  {
    place: 'R/GA @ Google Mountain View',
    dateRange: 'August 2015 ~ Present',
    title: 'Senior Software Engineer',
    jobDescription: 'Works as an embedded Software Engineer for Google’s Interactive Marketing Division.',
  },
  {
    place: 'AKQA S.F',
    dateRange: 'August 2014 ~ August 2015',
    title: 'Creative Developer',
    jobDescription: 'Worked as a Designer and Developer for physical and digital brand experiences e.g. Target and Nike. Also, worked as an embedded Web Developer for Apple’s Interactive Marcom division.',
  },
  {
    place: 'QOMO HiteVision',
    dateRange: 'January 2010 ~ January 2012',
    title: 'Marketing Developer',
    jobDescription: 'Created comprehensive marketing materials through web, print, and video for businesses, educational, and governmental establishments.',
  },
  {
    place: 'Red Robin',
    dateRange: ' September 2005 ~ April 2010',
    title: 'Expo/Server',
    jobDescription: 'For 5 long years, I would sets the pace and flow of your kitchen by plating or serve gourmet burgers to valued patrons of Red Robin',
  },
  {
    place: 'AT&T',
    dateRange: 'March 2004 ~ July 2004',
    title: 'Sales Contractor',
    jobDescription: 'Would walk Door-to-door in Detroit Michigan and try to sell ATT U-verse &reg; cable.',
  },
  {
    place: 'PacSun',
    dateRange: 'September 2003 ~ December 2003',
    title: 'Sales Associate',
    jobDescription: 'Sold and organized apparel during Back To School and Christmas.',
  },
  {
    place: 'Journeys',
    dateRange: 'January 2003 ~ December 2003',
    title: 'Sales Associate',
    jobDescription: 'Sold and organized shoes during Back To School and Christmas.',
  },
  {
    place: 'Maria\'s Front Room',
    dateRange: 'September 2000 ~ December 2003',
    title: 'Busboy/Server',
    jobDescription: 'For 3 long years, I would set tables and serve causal Italian food.',
  },
  {
    place: 'Lepanto',
    dateRange: 'June 1999 to March 2000',
    title: 'Busboy',
    jobDescription: 'My first job, bussing tables at a fine dining Italian restaurant.',
  },
];

export const educations: ResumeBlock[] = [
  {
    place: 'Simon Fraser University',
    dateRange: 'September 2011 ~ January 2014',
    title: 'B.S. Interactive Systems',
    jobDescription: ' Studied how to design, develop, and apply interactive systems with particular emphasis on how people use them through a combination of computing foundations, user-centred design principles, and programming practice.',
  },
  {
    place: 'Oakland Community College',
    dateRange: 'September 2008 ~ December 2010',
    title: 'Software Engineering Associate’s Degree',
  },
  {
    place: 'Wayne State University',
    dateRange: 'September 2005 ~ January 2008',
    title: 'B.A. Asian Studies',
    jobDescription: 'To prepare students for the increasing demand for professionals with training in Chinese and Japanese.',
  },
  {
    place: 'Oakland Community College',
    dateRange: 'January 2004 ~ December 2005',
    title: 'Liberal Arts Associate’s Degree',
  },
];

export const awards = [
  {
    place: 'R/GA',
    dateRange: '2017',
    title: 'BotBot',
    jobDescription: 'Voice Actor & Hand Model.',
    url: 'https://www.rga.com/work/case-studies/botbot'
  }
];

export const interests = [
  'Interaction Design',
  'Fullstack Development',
  'ES Next',
  'CSS4+',
  'Modern Web to Native Workflows',
  'Angular',
  'Industrial Design',
  'Typography',
  'Entrepreneurship',
  'Motion Design',
  'Architecture',
  'Skateboarding',
  'and Guitar',
];

export const techniques = [
  'Object Oriented JavaScript',
  'AngularJS',
  'AWS',
  'CSS/SCSS',
  'Vector/DOM',
  'motion graphics',
  'semantic HTML',
  'Typescript',
  'NodeJS',
  'Golang',
  'i18n',
  'a11y',
  'and web workflow',
];
