class App extends React.Component {

  render() {
    return (
      <div className="page">
        <Nav/>
        <div className="header">
          <p>TIM CHIN</p>
        </div>
        <Portfolio/>
      </div>
    );
  }
}

window.App = App;