import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class LocationSearchInput extends Component {
    render() {
        return (
            <PlacesAutocomplete
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}
                onSelect={this.props.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            name={this.props.name}
                            value={this.props.value}
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                            required
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                let suggestionString = `${suggestion.terms[0].value}`
                                if (suggestion.terms[2]) {
                                    suggestionString = suggestionString + `, ${suggestion.terms[2].value}`
                                }

                                if (suggestion.terms[3]) {
                                    suggestionString = suggestionString + ` ${suggestion.terms[3].value}`
                                }
                                // const filteredSuggestion = suggestion.filter(suggestion => suggestion.type)
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestionString, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestionString} </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;