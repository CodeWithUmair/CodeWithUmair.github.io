// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'codewithumair', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['codewithumair/metamask-extension', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI Notepad',
          description:
            'An intelligent note-taking app with AI integeration, built with OpenAI, Pinecone, Next.js, Shadcn UI, Clerk, and more',
          imageUrl: '/chatnote.png',
          link: 'https://chatnote3.vercel.app',
        },
        {
          title: 'Crypto Coins Update',
          description: 'Crypto market updated ✔',
          imageUrl: '/bitcoin.png',
          link: 'https://crypto867.netlify.app/',
        },
        {
          title: 'Data-Structures-Algoritms-Javascript',
          description:
            'This repo help to understand the building blocks of some main Data Structures',
          imageUrl: '/dsa.png',
          link: 'https://github.com/CodeWithUmair/Data-Structures-Algoritms-Javascript',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Umair Amir',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'umair-amir-30b32721a',
    twitter: 'Muhamma50242291',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://codewithumair.github.io/',
    phone: '',
    email: 'codewithumair867@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind',
    'Git',
    'CSS',
    'JavaScript',
    'Node.js',
    'PHP',
    'MySQL',
    'Shopify',
    'WordPress',
    'Web3',
    'Solidity',
  ],
  experiences: [
    {
      company: 'Freelancing ⚡',
      position: 'Frontend Dev | Web3 | Shopify',
      from: 'August 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Ecommerce Inside 🔗',
      position: 'CMS Developer',
      from: 'March 2023',
      to: 'Present',
      companyLink: 'https://www.ecommerceinside.co',
    },
    {
      company: 'Textile Channel 🔗',
      position: 'Web Developer & Assistant Shipment Planner',
      from: 'September 2021',
      to: 'March 2023',
      companyLink: 'https://www.textilechannel.com/',
    },
  ],
  certifications: [
    {
      name: 'Complete React Developer in 2023(w/Redux, Hooks, GraphQL) 📜',
      body: 'Udemy',
      year: 'May 2023',
      link: 'https://ik.imagekit.io/umair/React-dev.jpg?updatedAt=1705902273051',
    },
    {
      name: 'Learn Solidity- Get Started with Web 3.0 and Blockchains 📜',
      body: 'CodeDamn',
      year: 'May 2023',
      link: 'https://ik.imagekit.io/umair/UM_SOLIDITY.png?updatedAt=1693945675778',
    },
    {
      name: 'Shopify Hydrogen (React.js) 📜',
      body: 'SkillShare',
      year: 'Jan 2023',
      link: 'https://ik.imagekit.io/umair/UM_HYDROGEN.png?updatedAt=1693945675474',
    },
    {
      name: 'Shopify Theme Development 📜',
      body: 'SkillShare',
      year: 'Jan 2023',
      link: 'https://ik.imagekit.io/umair/UM_SHOPIFY.png?updatedAt=1693945675478',
    },
    {
      name: 'Frontend Development Libraries 📜',
      body: 'freecodecamp',
      year: 'May 2022',
      link: 'https://ik.imagekit.io/umair/UM_F.png?updatedAt=1693945675728',
    },
    {
      name: 'JavaScript Algorithms and Data Structures 📜',
      body: 'freecodecamp',
      year: 'November 2021',
      link: 'https://ik.imagekit.io/umair/UM_JS.png?updatedAt=1693945675954',
    },
    {
      name: 'Responsive Web Design 📜',
      body: 'freecodecamp',
      year: 'October 2021',
      link: 'https://ik.imagekit.io/umair/UM_R.png?updatedAt=1693945675885',
    },
  ],
  educations: [
    {
      institution: 'Pakistan Shipowner Govt. College',
      degree: 'Intermediate (Engineering)',
      from: '2018',
      to: '2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  /**
   footer: `Made with <a 
       class="text-primary" href="https://github.com/arifszn/gitprofile"
       target="_blank"
       rel="noreferrer"
     >GitProfile</a> and ❤️`,
   */

  enablePWA: true,
};

export default CONFIG;
