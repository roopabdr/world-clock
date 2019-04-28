import React, { Component, Fragment } from 'react';
import './Autosuggestion.css';

const suggestions = [
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
];

class Autosuggestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listItem: '',
      showSuggestion: false,
    };
  }

  render() {
    const { onLocationNameHandler } = this.props;
    const { listItem, showSuggestion } = this.state;
    return (
        <Fragment>
          
          <input type='text' 
          className='inputText' 
          placeholder='Enter location name...' 
          onChange={ (event) => { this.setState({listItem: event.target.value, showSuggestion: true}); return onLocationNameHandler(event.target.value) } }/>
          {/* <div className='autosuggestion'>
          <ul id='listing' className='suggestions'>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
            <li>six</li>
            <li>seven</li>
            <li>eight</li>
            <li>nine</li>
            <li>ten</li>
          </ul>
          </div> */}
          { 
            showSuggestion === true && listItem !== '' ? 
              <div className='autosuggestion suggestions'>
              <ul>
              {
                suggestions.filter((filterItem) => {
                  return filterItem.label.includes(listItem)
                }).map((mapItem) => {
                  return (
                    <li key={ mapItem.label }  className={ showSuggestion ? "showlist" : null }>{ mapItem.label }</li>
                  )
                })
              }
              </ul>
              </div>
            : null            
          }   
        </Fragment>
      );
    }
}

export default Autosuggestion;