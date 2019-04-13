import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

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

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <div className='center'>
    <div style={{width: '65%'}}>
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
    </div>
    </div>
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          ),
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',            
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
  },
    input: {
	  margin: 10,
	  color: 'inherit',
	  fontWeight: 'inherit',
	  lineHeight: '10px',
    padding: '15px 22px',
    margin: '10px 5px',
    boxSizing: 'border-box',
    background: 'white'
    }
});

class Autosuggestion extends Component {
	constructor() {
		super();
		this.state = {
			single: '',
    		popper: '',
    		suggestions: [],
		};
	}

	handleSuggestionsFetchRequested = ({ value }) => {
	    this.setState({
	      suggestions: getSuggestions(value),
	    });
	};

	handleSuggestionsClearRequested = () => {
	   this.setState({
	     suggestions: [],
	   });
	};

	handleChange = name => (event, { newValue }) => {
	  this.setState({
	    [name]: newValue,
	  });
	};

	render() {
		const { classes } = this.props;

		const autosuggestProps = {
	      renderInputComponent,
	      suggestions: this.state.suggestions,
	      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
	      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
	      getSuggestionValue,
	      renderSuggestion,
	    };

		return (
			<div>
				<Autosuggest
			          {...autosuggestProps}
			          inputProps={{
			            classes,
			            placeholder: 'Enter a name of a place...',
			            value: this.state.popper,
			            onChange: this.handleChange('popper'),
			            inputRef: node => {
			              this.popperNode = node;
			            },
			            InputLabelProps: {
			              shrink: true,
			            },
			          }}
			          theme={{
			            suggestionsList: classes.suggestionsList,
			            suggestion: classes.suggestion,
			          }}
			          renderSuggestionsContainer={options => (
			            <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
			              <Paper
			                square
			                {...options.containerProps}
			                style={{ width: this.popperNode ? this.popperNode.clientWidth : null }}
			              >
			                {options.children}
			              </Paper>
			            </Popper>
			          )}
        			/>
			</div>
		);
	}
}

Autosuggestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Autosuggestion);