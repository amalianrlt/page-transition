import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class ItemsPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      data: [],
    };
  }

  getUsersData() {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((res) => {
        // console.log(res.data);
        this.setState({ data: res.data.slice(0, 10) });
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  }

  componentDidMount(){
    this.getUsersData()
}

  //   componentWillMount() {
  //     this.unregisterLeaveHook = this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this));
  // }

  // routerWillLeave(nextLocation) {
  //   return false;
  // }

  render() {
    console.log(this.props);

    return (
      <div style={{ backgroundColor: "wheat" }}>
        <h1>Customer's Data</h1>
        {this.state.data?.length >= 1 &&
          this.state.data?.map((user) => (
            <div key={user.id} className="userCard">
              {/* <Link to={{ pathname: `/detail/${user.id}`, state: { modal: true } }}> */}
              <Link to={{ pathname: `/detail/${user.id}`, state: { user, modal: true } }}>
                <h5>{`Title: ${user.title}`}</h5>
                <h5>{`Desc: ${user.body}`}</h5>
                <h5>{`Telephone Number : ${user.id}`}</h5>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default withRouter(ItemsPage);
// export default ItemsPage;
