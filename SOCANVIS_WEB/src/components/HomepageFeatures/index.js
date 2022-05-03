import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Why and where?',
    Svg: require('@site/static/img/imgs/1200px-USA_Flag_Map.svg').default,
    description: (
      <>
        The aim of this project is to explore how our options of eating and in our surroundings might affect our health. 
        Are people in areas with a higher density of fastfood restaurents more prone to shortcomings in health? 
        Likewise how does income affect our choices and health?
      </>
    ),
  },
  {
    title: 'Green challenge',
    Svg: require('@site/static/img/imgs/goal3.svg').default,
    description: (
      <>
      This project adheres primarily to the 3rd sustainable development goal provided by the United Nations. 
      </>
    ),
  },
  {
    title: 'Why food and health? ',
    Svg: require('@site/static/img/imgs/food.svg').default,
    description: (
      <>
       The bottom of Marslows hierarychy of needs is food. It is a vitle piece of life. Yet sometimes we as humans makes decision that does not always seem beneficial sadad  
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
        <h3>{title}</h3>
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
