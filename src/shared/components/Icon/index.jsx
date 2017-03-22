import React, {PropTypes} from 'react';

export default class Icon extends React.PureComponent {
  static propTypes = {
    glyph: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    glyph: '',
    className: 'icon'
  };

  render() {
    const {glyph, className} = this.props;

    return (
      <svg className={className}>
        <use xlinkHref={glyph} />
      </svg>
    );
  }
}
