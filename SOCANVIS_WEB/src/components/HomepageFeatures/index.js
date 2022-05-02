import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Why and where?',
    Svg: require('@site/static/img/imgs/1200px-USA_Flag_Map.svg').default,
    description: (
      <>
        The project was create to give people an oppertuninity to explore for them selves how accumulated Fastfood restaurents affect our health with base in the United States
      </>
    ),
  },
  {
    title: 'Green challenge',
    Svg: require('@site/static/img/imgs/goal3.svg').default,
    description: (
      <>
        In line with this years goals of the <i>Technical University of Denmark's GreenChallenge</i>
      </>
    ),
  },
  {
    title: 'Focus on food',
    Svg: require('@site/static/img/imgs/food.svg').default,
    description: (
      <>
        Food is a basic need for all humans as the bottom row of Marslows hierarychy of needs. Yet we cut corners and make suboptimal choices.
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
