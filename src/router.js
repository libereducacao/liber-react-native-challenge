import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainList from "./components/MainList"
import CarDetails from "./components/CarDetails"

const StackRoutes = {
    Main: {
        screen: (props) => <MainList {...props}/>
    },
    Details: {
        screen: (props) => <CarDetails {...props}/>
    },
}

const StackConfig = {
    initialRouteName: 'Main',
    headerMode: 'none',
    unmountInactiveRoutes: true,
}

const StackNavigator = createStackNavigator(StackRoutes, StackConfig)

export default createAppContainer(StackNavigator);