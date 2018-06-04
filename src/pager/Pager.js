import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './Pager.css';


class Pager extends PureComponent {

  render() {
    const { pageOne, pageTwo, pageThree, pageFour, pageFive, position } = this.props;
    return (
      <div  className="pager" style={{ transform: `translate( ${position * -100}vw, 0vw )`, width: '500vw' }}
      >
        <div className="page">
          {pageOne}
        </div>
        <div className="page">
          {pageTwo}
        </div>
        {pageThree &&
        <div className="page">
          {pageThree}
        </div>
        }
        {pageFour &&
        <div className="page">
          {pageFour}
        </div>
        }
        {pageFive &&
          <div className="page">
            {pageFive}
          </div>
        }
      </div>
    );
  }
}

// TODO: test if needed
export default withRouter(Pager);