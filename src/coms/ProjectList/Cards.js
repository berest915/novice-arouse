import portfolio from '../../img/portfolio.png';
import wsInfoClone from '../../img/ws-info-clone.png';
import woocel from '../../img/woocel.png';


export const Cards = [
  {
    image: portfolio,
    alt: 'portfolio',
    title: 'Portfolio',
    p: `[P1] So the, I'm a self-taught frontend developer and very likely having insufficient of profesional development experience. Thus I do believe a clean & decent looking of portfolio would help me on seeking greater chance to be hired by those great companies out there. As my main focus on ReactJS, this site is built using ReactJS and Styled-Components.`,
    stack: '# React # Styled-Components # Github',
    demoUrl: 'https://www.google.com',
    sourceUrl: 'https://www.github.com',
    isRowReverse: false,
  },
  {
    image: woocel,
    alt: 'woocel',
    title: 'woocel',
    p: `[P2] This project is meant to build a WhatsApp-alike chatroom. The major difference comparing the actual web-whatsApp is, Woocel behaves as a shared-data chatroom for all user signing in using their Google account. This site is using firebase auth feature to log in while localStorage token to keep user logging in. Any chatroom & its messages are stored into firebase. For anyone who tried to login with different Google account, you might wanna add some other google account onto the browser you're using.`,
    stack: '# React # Firebase # Styled-Components # Github',
    demoUrl: 'https://www.google.com',
    sourceUrl: 'https://www.github.com',
    isRowReverse: true,
  },
  {
    image: wsInfoClone,
    alt: 'whatsapp-info-clone',
    title: 'whatsapp-info-clone',
    p: `[P3] I figured that if I attempt to make a clone of web-whatsApp, I might as well, clone the information site of whatsApp ( at least ui alike ). This site's element-styles are mostly refer to https://www.whatsapp.com/ while links are exactly same for the time being. Main difference would be one navigation named "WSChat Web", it would direct you to the previous project being mentioned, which is https://woocel-v0.web.app/ .`,
    stack: '# React # Styled-Components # Github',
    demoUrl: 'https://www.google.com',
    sourceUrl: 'https://www.github.com',
    isRowReverse: false,
  },
];