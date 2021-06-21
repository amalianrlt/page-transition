import React, { Component } from "react";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      slideIn: false,
      isScrolling: false,
    };
  }

  onScroll = () => {
    // const scrollY = window.scrollY
    const scrollTop = this.myRef.current.scrollTop;
    // console.log(`myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop,
    });
    if (scrollTop > 0) {
      this.setState({
        isScrolling: true,
      });
    }
  };

  render() {
    return (
      <div
        ref={this.myRef}
        onScroll={this.onScroll}
        className={
          this.state.isScrolling === true
            ? "slider"
            : this.state.slideIn === true
            ? "slide-out"
            : "slide-in"
        }
      >
        <button
          onClick={async () => {
            await this.setState({ slideIn: true, isScrolling: false });
            window.setTimeout(() => {
              this.props.history.push(`/`);
            }, 300);
          }}
        >
          back
        </button>
        <h1>detail</h1>
        <div className="userCard">
          <h5>{`Title: ${this.props.location.state.user.title}`}</h5>
          <h5>{`Desc: ${this.props.location.state.user.body}`}</h5>
          <h5>{`Telephone Number : ${this.props.location.state.user.id}`}</h5>
        </div>
      </div>
    );
  }
}

export default DetailPage;
