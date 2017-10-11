import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Notification extends React.Component {
    render() {
        return (
            <View>
                <Text>Teste</Text>
            </View>
        );
    }
}

export default connect(state => state)(Notification);