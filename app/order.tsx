import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const QUESTIONS = [
    {
        question: "İlaç kullanmadan önce doğru sıralama nedir?",
        correct: [
            "Ellerimi yıkarım",
            "Son kullanma tarihini kontrol ederim",
            "Doktor önerisini kontrol ederim"
        ]
    },
    {
        question: "Antibiyotik kullanırken doğru sıralama nedir?",
        correct: [
            "Doktora danışırım",
            "Doğru dozu kullanırım",
            "Tedaviyi tamamlarım"
        ]
    },
    {
        question: "İlaç saklama sırası nedir?",
        correct: [
            "Serin yerde saklarım",
            "Güneşten uzak tutarım",
            "Çocuklardan uzak tutarım"
        ]
    },
    {
        question: "İlaç kullanırken dikkat edilmesi gereken sıralama nedir?",
        correct: [
            "Prospektüsü okurum",
            "Dozu kontrol ederim",
            "Saatine göre alırım"
        ]
    },
    {
        question: "Ağrı kesici kullanma sırası nedir?",
        correct: [
            "Sorunun nedenini değerlendiririm",
            "Gerekliyse ilacı alırım",
            "Dozu aşmam"
        ]
    }
];

export default function OrderScreen() {

    const [questionIndex, setQuestionIndex] = useState(0);

    const [items, setItems] = useState(
        [...QUESTIONS[0].correct].sort(() => Math.random() - 0.5)
    );

    const moveUp = (index: number) => {
        if (index === 0) return;

        const newItems = [...items];
        const temp = newItems[index];
        newItems[index] = newItems[index - 1];
        newItems[index - 1] = temp;

        setItems(newItems);
    };

    const checkAnswer = () => {

        const correct = QUESTIONS[questionIndex].correct;

        if (JSON.stringify(items) === JSON.stringify(correct)) {

            if (questionIndex === QUESTIONS.length - 1) {
                Alert.alert("Bitti", "Tüm sıralama sorularını tamamladınız.");
                return;
            }

            Alert.alert("Doğru", "Sonraki soruya geçiliyor.");

            const next = questionIndex + 1;
            setQuestionIndex(next);

            setItems(
                [...QUESTIONS[next].correct].sort(() => Math.random() - 0.5)
            );

        } else {
            Alert.alert("Yanlış", "Sıralama doğru değil.");
        }

    };

    return (

        <View style={styles.container}>

            <Text style={styles.counter}>
                Soru {questionIndex + 1} / {QUESTIONS.length}
            </Text>

            <Text style={styles.question}>
                {QUESTIONS[questionIndex].question}
            </Text>

            {items.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.item}
                    onPress={() => moveUp(index)}
                >
                    <Text style={styles.itemText}>
                        {index + 1}. {item}
                    </Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.button} onPress={checkAnswer}>
                <Text style={styles.buttonText}>Kontrol Et</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f7fb"
    },

    counter: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    question: {
        fontSize: 18,
        marginBottom: 20
    },

    item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2
    },

    itemText: {
        fontSize: 16
    },

    button: {
        backgroundColor: "#3b82f6",
        padding: 15,
        borderRadius: 10,
        marginTop: 20
    },

    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    }

});