import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Home() {

    const router = useRouter();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <DrawerToggleButton />,
            title: "Ana Sayfa"
        });
    }, [navigation]);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>İlaç Rehberiniz</Text>

            <Text style={styles.subtitle}>
                Akılcı ilaç kullanımı hakkında bilgi edinin ve kendinizi test edin.
            </Text>

            <TouchableOpacity
                style={[styles.card, styles.blue]}
                onPress={() => router.push("/info")}
            >
                <Text style={styles.icon}>📚</Text>

                <View>
                    <Text style={styles.cardTitle}>İlaç Bilgileri</Text>
                    <Text style={styles.cardDesc}>
                        İlaçlar hakkında detaylı bilgi öğrenin
                    </Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.card, styles.green]}
                onPress={() => router.push("/quiz")}
            >
                <Text style={styles.icon}>🧠</Text>

                <View>
                    <Text style={styles.cardTitle}>Bilgi Testi</Text>
                    <Text style={styles.cardDesc}>
                        10 soruluk test ile bilginizi ölçün
                    </Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.card, styles.orange]}
                onPress={() => router.push("/order")}
            >
                <Text style={styles.icon}>📋</Text>

                <View>
                    <Text style={styles.cardTitle}>Sıralama Soruları</Text>
                    <Text style={styles.cardDesc}>
                        Doğru ilaç hazırlama adımlarını sıralayın
                    </Text>
                </View>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#f2f5fa",
        justifyContent: "center"
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },

    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#666",
        marginBottom: 40
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 18,
        marginBottom: 18,
        elevation: 6
    },

    icon: {
        fontSize: 30,
        marginRight: 15
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "700"
    },

    cardDesc: {
        fontSize: 14,
        color: "#777",
        marginTop: 3
    },

    blue: {
        borderLeftWidth: 6,
        borderLeftColor: "#2F80ED"
    },

    green: {
        borderLeftWidth: 6,
        borderLeftColor: "#27AE60"
    },

    orange: {
        borderLeftWidth: 6,
        borderLeftColor: "#F2994A"
    }

});