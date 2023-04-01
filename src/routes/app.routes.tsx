import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { ProfileStatistics } from '@screens/Profile'
import { Feedback } from '@screens/Feedback'
import { ViewMeal } from '@screens/ViewMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='meal'
                component={NewMeal}
            />

            <Screen
                name='viewMeal'
                component={ViewMeal}
            />

            <Screen
                name='profile'
                component={ProfileStatistics}
            />



            <Screen
                name='feedback'
                component={Feedback}
            />
        </Navigator>
    )
}