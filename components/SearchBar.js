import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
    state = { term: '' };

    render() {
        const {
            containerStyle,
            searchTextStyle,
        } = styles;

        return (
            <View style={containerStyle}>
                <TextInput
                    style={searchTextStyle}
                    onChangeText={term => this.setState({ term })}
                    value={this.state.term}
                    placeholder="Search"
                />
                <Button
                    icon={{ name: 'search', color: '#283EA7', size: 30 }}
                    title={this.props.loading ? 'Loading...' : ''}
                    onPress={() => this.props.onPressSearch(this.state.term)}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    searchTextStyle: {
        flexGrow: 1,
        marginLeft: 25,
        fontSize: 16,
        fontWeight: '500',
    }
};


export default SearchBar;
