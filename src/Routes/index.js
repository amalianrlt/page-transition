import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ItemsPage from "../Pages/ItemsPage";
import DetailPage from "../Pages/DetailPage";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = location?.state && location?.state.modal && this?.previousLocation !== location;
    // console.log(this.props, 'loc');
    // console.log(isModal, "modal");
    console.log(this.previousLocation, location, 'ismodal')
    return (
      <>
        <Switch location={isModal ? this.previousLocation : location}>
          <Fragment>
            <Route path="/" component={ItemsPage} exact />
            {/* <Route path="/detail/:id" component={DetailPage} /> */}
            <Route path="/detail/:id" render={(props) => <DetailPage isModal={isModal} {...props} />}></Route>
          </Fragment>
        </Switch>
        {isModal
          ? <Route path="/detail/:id" render={(props) => <DetailPage isModal={isModal} {...props} />}></Route>
          : null
        }
      </>
    );
  }
}

export default withRouter(Routes);

// import React, { Fragment } from "react";
// import { Route, Switch } from "react-router-dom";
// import ItemsPage from "../Pages/ItemsPage";
// import DetailPage from "../Pages/DetailPage";

// const Routes = () => {
//   return (
//     <Switch>
//       <Fragment>
//         <Route path="/" component={ItemsPage} exact />
//         <Route path="/detail/:id" component={DetailPage} exact />
//       </Fragment>
//     </Switch>
//   );
// };

// export default Routes;

// <Switch>
// <Switch location={isModal ? this.previousLocation : location}>
//   <Route exact path="/" component={ItemsPage} />
//   <Route exact path="/detail/:id">
//     <DetailPage isModal={DetailPage} />
//   </Route>
// </Switch>
// {isModal ? (
//   <Route exact path="/detail/:id">
//     <DetailPage isModal={DetailPage} />
//   </Route>
// ) : null}
