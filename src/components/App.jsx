class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page">
        <Nav/>
        <Portfolio/>
      </div>
    );
  }
}

window.App = App;