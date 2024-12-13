import { Stack } from "expo-router";

const TabsLayout = () => {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="homebranch"/>
        <Stack.Screen name="reportbranch"/>
        <Stack.Screen name="scannerbranch"/>
    </Stack>
}

export default TabsLayout