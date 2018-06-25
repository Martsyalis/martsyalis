import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './Pager.css';

class Pager extends PureComponent {
  static defaultProps = {
    getPosition: match => (match.isExact ? 0 : 1)
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.scrollTop();
    }
  }

  scrollTop = () => {
    this.pagerTop.scrollIntoView({ behavior: 'instant' });
  };

  render() {
    const {
      pageOne,
      pageTwo,
      pageThree,
      pageFour,
      pageFive,
      position
    } = this.props;
    return (
      <div
        className="pager"
        style={{
          transform: `translate( ${position * -100}vw, 0vw )`,
          width: '500vw'
        }}
      >
        <div ref={node => (this.pagerTop = node)} />
        <div className="page">{pageOne}</div>
        <div className="page">{pageTwo}</div>
        {pageThree && <div className="page">{pageThree}</div>}
        {pageFour && <div className="page">{pageFour}</div>}
        {pageFive && <div className="page">{pageFive}</div>}
      </div>
    );
  }
}

// TODO: test if needed
export default withRouter(Pager);
