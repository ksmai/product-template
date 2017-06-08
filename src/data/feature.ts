import { FeatureData } from '../models';

export const featureData: FeatureData = {
  name: "P1xt's guide",
  features: [
    'Carefully selected resources that dive deeply into every essential subject',
    'Great, supportive community of motivated learners helping each other',
    'Sequence of managable steps that augment one another',
    'Everything is free, but still top notch',
  ],
  link: 'https://github.com/P1xt/p1xt-guides',
  text: 'Start learning today, for free',
  buttonText: 'Start now',
  variationType: 'Examples',
  variations: [
    require('../../assets/example-website.jpeg'),
    require('../../assets/example-app.jpeg'),
    require('../../assets/example-game.jpeg'),
  ],
};
