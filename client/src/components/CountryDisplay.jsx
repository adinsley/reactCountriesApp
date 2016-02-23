var React = require('react');
var BorderingCountries = require('./BorderingCountries')

var CountriesDisplay = React.createClass({

  findBordering:function(){
  
      var bordering =  this.props.countries.filter(function(country){
        return this.props.currentCountry.borders.includes(country.alpha3Code)
      }.bind(this))
        return bordering;
    },
      

  render:function(){
    if(this.props.currentCountry){
      return (
        <div>
          <h1>{this.props.currentCountry.name} </h1>
          <p>{this.props.currentCountry.capital}</p>
          <p>{this.props.currentCountry.currencies}</p>
          <p>{Number(this.props.currentCountry.population).toLocaleString()}</p>
          <BorderingCountries borderers={this.findBordering()} updateCurrentCountry={this.props.updateCurrentCountry}></BorderingCountries>
          
        </div>
        )
    }else{
     return( <h2>Please Select a country</h2>
            )
    }
  }

})

module.exports = CountriesDisplay;