import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thingList: [
        {
          id: 1,
          name: "Georges",
          status: "Doctor"
        },
        {
          id: 2,
          name: "Will",
          status: "SED"
        }
      ]
    };
    this.oncreated = this.onCreated.bind(this);
  }

  onCreated(thing) {
    const thingList= [...this.state.thingList, thing]
    this.setState({thingList})
  }

  render() {
    return (
      <div className="App">
        <Header thingCount={this.state.thingList.length} />
        <ThingList thingList={this.state.thingList} oncreated={this.onCreated} />
        <Footer />
      </div>
    );
  }
}

function Header(props) {
  return <h1>Thing Tracker: {props.thingCount}</h1>
}

function ThingList(props) {

    return (
      <div>
        <ThingForm onCreated={props.onCreated} />
        <ul>
          {
            props.thingList.map(thing => (
              < ThingItem key={thing.id} name={thing.name} status={thing.status} />
            ))
          }
        </ul>
      </div>
    )
}

class ThingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    //  I do not underastand this part right here why this.props .oncreated?? 
    // why arre we using this instead of this props?
    this.props.onCreated(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function ThingItem(props) {
  return <li>{props.name}</li>
}

function Footer() {
  return <small>I do not know yet</small>
}

export default App;
