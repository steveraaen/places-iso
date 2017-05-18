var React = require("react");
var Results = require("./Results.js");
var helper = require("../utils/helpers.js");

var Form = React.createClass({
            getInitialState: function() {
                return {
                    term: "",
                    features: []
                };
            },
            handleChange: function(event) {
                this.setState({ term: event.target.value });
            },
            handleSubmit: function(event) {

                event.preventDefault();

                  helper.runQuery(this.state.term).then(function(data) {                 
                    if (data !== this.state.features) {  

                      this.setState({ features: data.features });
                      helper.postOCData(this.state);

                    }
                      console.log(data.features[0].properties.formatted)
                      console.log(data.features)
                      return data
                }.bind(this));
            },
           componentDidMount: function(){

            },
    render: function() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Location</strong>
              </h4>
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <Results r={this.state} />}
        </div>
     
        
      </div>
    );
  }
});
module.exports = Form;
