import { useRouter } from "expo-router";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreens() {
    const router = useRouter();

    const handlePress = () => {
        // Navigate to the Home tab inside (tabs)
        // router.push("/(router)/settings");
        router.push("/counter");
    };

    return (
        <View style={styles.container}>
            <View style={styles.welcomeSection}>
                <Text style={styles.title}>Welcome to EShop</Text>
                <Text style={styles.subTitle}>Discount amazing products and shop with easy</Text>
            </View>
             <TouchableOpacity onPress={handlePress} style={styles.actionButton}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    welcomeSection:{
        paddingVertical: 50,
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 500,
        color: '#fff',
        lineHeight: 40,
    },
    subTitle:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 400,
        color: '#fff',
    },
    actionButton:{
        backgroundColor: 'red',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10, 
        alignItems: 'center',
        marginVertical: 30,
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 400,
    }
})
