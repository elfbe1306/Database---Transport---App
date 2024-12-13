import { Stack } from "expo-router";

const TabsLayout = () => {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="home"/>
        <Stack.Screen name="checkQR"/>
        <Stack.Screen name="scanner"/>
    </Stack>
}

export default TabsLayout