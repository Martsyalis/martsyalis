import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Pager.css';


class Pager extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (!this.props.match.isExact) {
        this.setState ({ scroll: this.container.scrollTop });
        this.container.scrollTop = 0;
      } else {
        this.container.scrollTop = this.state.scroll;
      }
    }
  }

  render() {
    const { master, detailOne, detailTwo, detailTree, detailFour, position } = this.props;
    return (
      <div className="pager" style={{ transform: `translate( ${position * -100}vw, 0vw )`, width: '500vw' }}
        ref = {node => this.container = node}>
        <div className="page">
          {master}
        </div>
        <div className="page">
          {detailOne}
        </div>
        {detailTwo &&
        <div className="page">
          {detailTwo}
        </div>
        }
        {detailTree &&
        <div className="page">
          {detailTree}
        </div>
        }
        {detailFour &&
          <div className="page">
            {detailFour}
          </div>
        }
      </div>
    );
  }
}

// TODO: test if needed
export default withRouter(Pager);