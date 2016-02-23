var React = require('react');

var BorderingCountries = React.createClass({

  countriesElement: function(country, index){
         return (
          <div>
            <h3>{country.name}</h3>
            <button value={country.alpha3Code} onClick={this.handleButton}>See Country Info</button>
          </div>
          )
  },

  handleButton: function(e){
    var newCountryA3C = e.target.value
    console.log(newCountryA3C);
    
    for(var country of this.props.borderers){
        console.log(country)
      if(country.alpha3Code == newCountryA3C){
        this.props.updateCurrentCountry(country) 
      }
    }

  },

  render:function(){
    return (
      <div>
        <h1>Bordering Countries</h1>
          {this.props.borderers.map(this.countriesElement)}
        
      </div>
      )
  }


})

module.exports = BorderingCountries;