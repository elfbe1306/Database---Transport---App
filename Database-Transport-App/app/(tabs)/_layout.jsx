import { Stack } from "expo-router";

const TabsLayout = () => {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="home"/>
        <Stack.Screen name="report"/>
        <Stack.Screen name="checkQR"/>
    </Stack>
}

export default TabsLayout