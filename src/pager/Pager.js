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
      <div className={styles.pager} style={{ transform: `translate( ${position * -100}vw, 0vw )`, width: '500vw' }}
        ref = {node => this.container = node}>
        <div className={styles.page}>
          {master}
        </div>
        <div className={styles.page}>
          {detailOne}
        </div>
        {detailTwo &&
        <div className={styles.page}>
          {detailTwo}
        </div>
        }
        {detailTree &&
        <div className={styles.page}>
          {detailTree}
        </div>
        }
        {detailFour &&
          <div className={styles.page}>
            {detailFour}
          </div>
        }
      </div>
    );
  }
}

// TODO: test if needed
export default withRouter(Pager);