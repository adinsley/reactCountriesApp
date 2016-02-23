var React = require('react');

var CountriesSelect = React.createClass({

  
  handleChange: function(e){
    var alpha3Code = e.target.value;
    
    for(var country of this.props.countries){
      if(country.alpha3Code == alpha3Code){
        this.props.updateCurrentCountry(country) 
      }
    }
  },

  createOption: function(country, index){
    return <option id={country.name} value={country.alpha3Code}>{country.name}</option>
  },

  render:function(){
    return (
      <div>
        <select onChange={this.handleChange}> 
          {this.props.countries.map(this.createOption)}
        </select>
      </div>
      )
  }





})

module.exports = CountriesSelect;