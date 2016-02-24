var React = require('react');
var CountriesSelect = require('./CountriesSelect.jsx');
var CountryDisplay = require('./CountryDisplay');
var RegionSelect = require('./RegionSelect')



var CountriesBox = React.createClass({
  getInitialState: function(){
    return { countries:[], currentCountry:null, currentRegion:"All"}
  },


  updateCurrentCountry:function(country){
      this.setState({currentCountry:country})

  },

  updateCurrentRegion:function(region){
    this.setState({currentRegion:region})
  },

  getRegions:function(){
   return this.state.countries.reduce(function(regions, country){
      if(!regions.includes(country.region)){
        regions.push(country.region);
      }
      return regions;
   }, ["All"])      

  },

  filterCountries:function(){
    if(this.state.currentRegion == "All"){
        return this.state.countries;
    }else{
         var filteredCountries = this.state.countries.filter(function(country){
            return country.region == this.state.currentRegion
        }.bind(this))
         return filteredCountries;
    }
  },

  componentDidMount: function(){
    var url = "https://restcountries.eu/rest/v1/all"
    var request = new XMLHttpRequest();
    request.open("GET", url)
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      console.log("got data", data)
      this.setState( {countries: data} )
    }.bind(this)
    request.send(null)
  },

  render: function(){
    return(
      <div>
        <h1> Countries Info App </h1>
        <RegionSelect regions={this.getRegions()} updateCurrentRegion={this.updateCurrentRegion} ></RegionSelect>
        <CountriesSelect countries={this.filterCountries()} updateCurrentCountry={this.updateCurrentCountry}></CountriesSelect>
        <CountryDisplay currentCountry={this.state.currentCountry} countries={this.state.countries} updateCurrentCountry={this.updateCurrentCountry}></CountryDisplay>
       </div> 
      )
  }
})

module.exports = CountriesBox