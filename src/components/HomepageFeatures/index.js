import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tezkor va bepul platforma',
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        Odoo ochiq manba kodiga ega bo'lib, uni butunlay bepul foydalanishingiz mumkin. Keng hamjamiyat va kuchli rivojlanish muhiti 
        uni har qanday biznes uchun ideal tanlovga aylantiradi.
      </>
    ),
  },
  {
    title: 'Cheksiz imkoniyatlar va funksiyalar',
    Svg: require('@site/static/img/undraw_possibilities.svg').default,
    description: (
      <>
        Odoo turli modullari orqali cheksiz imkoniyatlarni taqdim etadi: sotuvlar, marketing, HR, buxgalteriya va yana ko'plab sohalar uchun qulay yechimlar mavjud. 
        Har qanday biznes ehtiyojlarini qondirish uchun mo'ljallangan.
      </>
    ),
  },
  {
    title: 'Oddiy va qulay foydalanish',
    Svg: require('@site/static/img/undraw_easy_to_use.svg').default,
    description: (
      <>
        Odoo foydalanuvchi interfeysi juda intuitiv bo'lib, murakkab jarayonlarni oson va tez amalga oshirishga yordam beradi. 
        Hech qanday texnik bilim talab etmasdan, platformani boshqarish oson.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
