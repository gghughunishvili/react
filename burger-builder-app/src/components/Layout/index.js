import React, {Component} from 'react'

import Aux from '../../hoc/Aux'
import classes from './style.css'
import Toolbar from '../Navigation/Toolbar'
import SideDrawer from '../Navigation/SideDrawer'

class Layout  extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sidedrawerToggleClicked = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sidedrawerToggleClicked} />
        <SideDrawer
          clicked={this.drawerToggleClicked} 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerCloseHandler} />
        <main className={classes.content}>
            {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout