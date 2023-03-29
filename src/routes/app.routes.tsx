import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { ProfileStatistics } from '@screens/Profile'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='meal'
                component={NewMeal}
            />

            <Screen
                name='profile'
                component={ProfileStatistics}
            />

            <Screen
                name='home'
                component={Home}
            />
        </Navigator>
    )
}