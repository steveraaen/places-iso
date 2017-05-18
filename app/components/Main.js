var React = require("react");
var Form = require("./children/Form.js");



var Main = React.createClass({
    getInitialState: function() {
      return {
          term: "",
      };
  },
    componentDidMount: function() {
      console.log('Main component mounted')
  },

    componentDidUpdate: function() {
	     console.log('component has updated')
  },
    setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
    render: function() {
      return (
      <div className="container">
        <div className="row">
            <h2 className="text-center">Places</h2>
          <div className="col-md-4">
            <Form setTerm={this.setTerm} />
          </div>
        </div>
      <div className="row">
        <div className="col-md-8">

        </div>
      </div> 

      </div>
    );
  }
});

module.exports = Main;
