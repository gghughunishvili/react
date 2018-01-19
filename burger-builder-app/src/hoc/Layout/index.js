import React, {Component} from 'react'

import Aux from '../Aux'
import classes from './style.css'
import Toolbar from '../../components/Navigation/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer'

class Layout  extends Component {
  state = {
    showSideDrawer: false
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