import React, { Component } from 'react';
import './Autosuggestion.css';

/*const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
];*/

class Autosuggestion extends Component {
	constructor() {
		super();
		this.state = {
      locationName: ''
		};
	}

  onAddClockClick = () => {
    console.log('Adding Clock',this.state.locationName);
  };

  onInputChange = (event) => {
    this.setState({locationName: event.target.value});
  };

	render() {
		return (
			<div className='autoSuggestion'>
        <input type='text' className='inputText' placeholder='Enter location name...' onChange={this.onInputChange}/>
        <button className='butn' onClick={this.onAddClockClick}>Add Clock</button>
			</div>
		);
	}
}

export default Autosuggestion;