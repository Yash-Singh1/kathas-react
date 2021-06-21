import KATHAS from './kathas';

const pagesAndContent = [
  ...KATHAS.map((katha) => ({
    name: katha.nameEnglish + ' Chalisa',
    path: '/' + katha.pathName + '/chalisa',
    text: katha.nameHindi + ' चालीसा\n' + katha.chalisa
  })),
  ...KATHAS.map((katha) => ({
    name: katha.nameEnglish + ' Aarti',
    path: '/' + katha.pathName + '/aarti',
    text: katha.nameHindi + ' आरती\n' + katha.aarti
  })),
  {
    name: 'About',
    path: '/about',
    text: 'About\nKathas is a website based on the original Kathas that is rewritten in React'
  },
  {
    name: 'Home',
    path: '/',
    text: KATHAS.map(
      (katha) => `${katha.nameEnglish} / ${katha.nameHindi}`
    ).join('\n')
  }
];

export default pagesAndContent;
