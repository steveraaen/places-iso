var React = require("react");
var Maps = require("./Maps");



var Results = React.createClass({

  handleClick: function(e){

    console.log(this.props);
  
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Results</h3>
        </div>
        <div className="panel-body text-center">
         { <ul>
          {this.props.r.features.map((search, i) => {
            return (

              <li onClick={() => this.handleClick()} key={i}>{search.properties.formatted}  - {search.properties.components._type}</li>
            );
          })}
          </ul>}
        </div>
         
      </div>
    );
  }
});

module.exports = Results;

