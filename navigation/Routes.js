import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'react-native'

import AppStack from './AppStack';

StatusBar.setBarStyle("dark-content")

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}
export default Routes;