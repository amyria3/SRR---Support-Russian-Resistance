//used to seed the DB

export const NowayaGazeta = {
  name: 'Nowaya Gazeta',
  description:
    'Novaya Gazeta is an independent investigative newspaper. It is published in Moscow, in regions within Russia, and in some foreign countries. (Wikipedia, 14.04.2023)',
  img_url: '',
  keywords: ['Freedom of speech', 'Anti-war movement', 'Transparancy'],
  resources: [
    {
      url: 'https://novayagazeta.ru/',
      description: 'Web publishing',
      typeOfRessourceName: 'Website',
    },
    {
      url: 'https://www.instagram.com/novayagazeta/',
      description: 'Infographics & Merchandise',
      typeOfRessourceName: 'Instagram',
    },
    {
      url: 'https://t.me/novaya_pishet',
      description: 'Telegram channel',
      typeOfRessourceName: 'Telegram',
    },
  ],
};

export const rawData = [NowayaGazeta,];