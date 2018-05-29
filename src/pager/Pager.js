import React, { PureComponent } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


export class Pager extends PureComponent {

  static defaultProps = { 
    getPosition: match => match.isExact ? 0 : 1
  }
  state = {
    scroll : 0
  }

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
    
    const { extended, match, location, master, detail, getPosition } = this.props;
    const position = getPosition(match, location);
    
    return (
      <div className={styles.pager} style={{ transform: `translate( ${position * -100}vw, 0vw )`, width: extended? '300vw':'200vw' }}
      ref = {node => this.container = node}>
        <div className={styles.page}>
          {master}
        </div>
        <div className={styles.page}>
          {detail}
        </div>
        {extended &&
        <div className={styles.page}>
          {extended}
        </div>
        }
      </div>
    );
  }
}

// TODO: test if needed
export default withRouter(Pager);