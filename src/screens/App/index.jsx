import React, {PropTypes} from 'react';

import {Footer, Header, MainContainer} from './components';
import {Breadcrumb} from 'shared/components';

// Import Global Styles
import 'normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import 'static/scss/styles.global.scss';

export default class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
      PropTypes.string
    ]),
    routes: PropTypes.array
  };

  static defaultProps = {
    children: null,
    routes: []
  };

  render() {
    const {children, routes} = this.props;

    return (
      <div className="clearfix">
        <Header />
        <MainContainer>
          <Breadcrumb routes={routes} />
          {children}
        </MainContainer>
        <Footer />
      </div>
    );
  }
}
