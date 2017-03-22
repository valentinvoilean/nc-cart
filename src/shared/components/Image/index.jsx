import React, {PropTypes} from 'react';
import uuid from 'uuid';

export default class Image extends React.PureComponent {
  static propTypes = {
    sources: PropTypes.array.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    alt: '',
    className: 'icon'
  };

  render() {
    const {sources, alt, className} = this.props;

    return (sources.length ?
        <picture className={className}>
          {
            sources.map((imageData) => {
                const srcset = imageData.standard + (imageData.retina ? `, ${imageData.retina} 2x` : '');
                const media = imageData.media;

                return (
                  <source srcSet={srcset} media={media} key={uuid.v4()} />
                );
              })
          }
          <img srcSet={sources[0].standard} alt={alt} />
        </picture>
        : null
    );
  }
}
