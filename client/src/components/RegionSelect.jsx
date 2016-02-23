var React = require('react');

var RegionsSelect = React.createClass({

  createOption: function(region, index){
    return <option id={region} value={region}>{region}</option>
  },

  handleChange:function(e){
    var selectedRegion = e.target.value
    this.props.updateCurrentRegion(selectedRegion);
  },

  render: function(){
    return(
      <div>
        <select onChange={this.handleChange}> 
             {this.props.regions.map(this.createOption)}
         </select>
     </div>
      )
  }



})


module.exports = RegionsSelect;