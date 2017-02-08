// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')

// END OF STUFF TO NOT MODIFY

var React = require('react');
var PropTypes = React.PropTypes;

var Card = React.createClass({
  render: function() {
    return (
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.hand + ".png"} /></h1>
      </div>
      )
    }
  })

var App = React.createClass({
  letsdish: function() {
      var shuffle = getDeck().shuffle().splice(0,5)
      this.setState(
      { hand: shuffle }
      );
    },

  getInitialState: function(){
      return {hand : ["face_down", "face_down", "face_down", "face_down", "face_down"]}
    },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success" onClick={this.letsdish}>Deal</a></h1>
          </div>
            <Card hand={this.state.hand[0]}/>
            <Card hand={this.state.hand[1]}/>
            <Card hand={this.state.hand[2]}/>
            <Card hand={this.state.hand[3]}/>
            <Card hand={this.state.hand[4]}/>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
