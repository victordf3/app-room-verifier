import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class Today extends React.Component {
    render() {
        return (
            <View>
                Teste
            </View>
        );
    }
}

export default connect(state => state)(Today);