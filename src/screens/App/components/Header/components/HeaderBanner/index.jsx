import React from 'react';
import {Parallax, Background} from 'react-parallax';

import {mediaQueries} from 'shared/constants/mediaQueries';

import {Image} from 'shared/components';
import styles from './styles.scss';

import defaultMobileSource from 'static/img/title.small.jpg';
import retinaMobileSource from 'static/img/title.small.2x.jpg';
import defaultDesktopSource from 'static/img/title.large.jpg';
import retinaDesktopSource from 'static/img/title.large.2x.jpg';

export default class HeaderBanner extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          standard: defaultMobileSource,
          retina: retinaMobileSource,
          media: mediaQueries.mobile
        },
        {
          standard: defaultDesktopSource,
          retina: retinaDesktopSource,
          media: mediaQueries.desktop
        }
      ]
    }
  }

  render() {
    return (
      <div className={styles.banner}>
        <Parallax strength={300} bgStyle={{bottom: '-55px'}}>
          <Background>
            <Image alt="Netcentric" sources={this.state.images} className={styles.image} />
          </Background>
        </Parallax>
        <a href="/trips">
          <h1 className={styles.title}><span>Netcentric.</span> <span>Expect sailing trips as well!</span></h1>
        </a>
      </div>
    );
  }
}
