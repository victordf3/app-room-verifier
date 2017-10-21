import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Today extends React.Component {
    render() {
        return (
            <View>
                <Text>Teste Today</Text>
            </View>
        );
    }
}

export default connect(state => state)(Today);