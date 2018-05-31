import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Color } from '../config/style'
import AccountHeader from '../component/AccountHeader'
import AccountBody from '../component/AccountBody'

export default class AccountScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: Color.darkDongker, height: '100%', width: '100%' }} >
            <ScrollView>
                <AccountHeader />
                <View style={{ width: '90%', height: '4.5%', alignSelf: 'center', marginTop: '1.5%', marginBottom: '0.5%' }} >
                    <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 9.5, fontWeight: '100' }} >Please do not disclose SMS and Google Authentication codes to anyone, including Binance costumer support </Text>
                </View>
                <AccountBody navigation={this.props.navigation} />
            </ScrollView>
            </View>
        )
    }
};
