import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { ProfileStatistics } from '@screens/ProfileStatistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>

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