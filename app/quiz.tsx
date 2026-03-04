import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const questions = [
    {
        question: "İlaç nedir?",
        options: [
            "A) Hastalıkları tedavi etmek için kullanılan maddeler",
            "B) Sadece vitamin içeren ürünler",
            "C) Yalnızca ağrı kesiciler"
        ],
        answer: 0
    },
    {
        question: "Akılcı ilaç kullanımı nedir?",
        options: [
            "A) İlacı istediğimiz zaman kullanmak",
            "B) İlacı doğru doz ve doğru süre ile kullanmak",
            "C) İlacı başkasına önermek"
        ],
        answer: 1
    },
    {
        question: "Antibiyotikler hangi hastalıklarda kullanılır?",
        options: [
            "A) Viral enfeksiyonlarda",
            "B) Bakteriyel enfeksiyonlarda",
            "C) Baş ağrısında"
        ],
        answer: 1
    },
    {
        question: "İlaç kullanmadan önce ne yapılmalıdır?",
        options: [
            "A) Prospektüs okunmalıdır",
            "B) Arkadaşa danışılmalıdır",
            "C) İnternette araştırılmalıdır"
        ],
        answer: 0
    },
    {
        question: "İlaçların son kullanma tarihi neden önemlidir?",
        options: [
            "A) İlacın etkisi azalabilir veya zararlı olabilir",
            "B) İlacın rengi değişir",
            "C) İlacın tadı değişir"
        ],
        answer: 0
    },
    {
        question: "İlaçlar nasıl saklanmalıdır?",
        options: [
            "A) Güneş altında",
            "B) Serin ve kuru yerde",
            "C) Arabada"
        ],
        answer: 1
    },
    {
        question: "Başkasının ilacını kullanmak doğru mu?",
        options: [
            "A) Evet",
            "B) Hayır",
            "C) Bazen"
        ],
        answer: 1
    },
    {
        question: "Doktorun verdiği doz neden önemlidir?",
        options: [
            "A) Doğru etki için gereklidir",
            "B) İlacın rengi için",
            "C) İlacın tadı için"
        ],
        answer: 0
    },
    {
        question: "İlaç tedavisi ne zaman bırakılmalıdır?",
        options: [
            "A) Kendimizi iyi hissedince",
            "B) Doktorun önerdiği süre sonunda",
            "C) İlacı unutunca"
        ],
        answer: 1
    },
    {
        question: "Akılcı olmayan ilaç kullanımı nedir?",
        options: [
            "A) İlacı doğru kullanmak",
            "B) İlacı gereksiz veya yanlış kullanmak",
            "C) İlacı doktor önerisiyle kullanmak"
        ],
        answer: 1
    }
];

export default function QuizScreen() {

    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (selectedIndex: number) => {

        if (selectedIndex === questions[index].answer) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }

        setModalVisible(true);
    };

    const nextQuestion = () => {

        setModalVisible(false);

        if (index + 1 < questions.length) {
            setIndex(index + 1);
        } else {
            setFinished(true);
        }

    };

    const restartQuiz = () => {
        setIndex(0);
        setScore(0);
        setFinished(false);
    };

    if (finished) {

        return (
            <View style={styles.container}>
                <Text style={styles.resultTitle}>Quiz Tamamlandı</Text>
                <Text style={styles.resultScore}>
                    Skorunuz: {score} / {questions.length}
                </Text>

                <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
                    <Text style={styles.restartText}>Tekrar Başlat</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (

        <View style={styles.container}>

            <View style={styles.progressContainer}>
                <View
                    style={[
                        styles.progressBar,
                        { width: `${((index + 1) / questions.length) * 100}%` }
                    ]}
                />
            </View>

            <Text style={styles.counter}>
                {index + 1} / {questions.length}
            </Text>

            <Text style={styles.question}>
                {questions[index].question}
            </Text>

            {questions[index].options.map((option, i) => (
                <TouchableOpacity
                    key={i}
                    style={styles.option}
                    onPress={() => handleAnswer(i)}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}

            <Modal visible={modalVisible} transparent>

                <View style={styles.modalContainer}>

                    <View style={[
                        styles.popup,
                        { backgroundColor: isCorrect ? "#4CAF50" : "#E53935" }
                    ]}>

                        <Text style={styles.popupText}>
                            {isCorrect ? "Doğru cevap!" : "Yanlış cevap!"}
                        </Text>

                        <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
                            <Text style={styles.nextText}>Sonraki Soru</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center"
    },

    progressContainer: {
        width: "100%",
        height: 10,
        backgroundColor: "#ddd",
        borderRadius: 10,
        marginBottom: 20
    },

    progressBar: {
        height: 10,
        backgroundColor: "#4CAF50",
        borderRadius: 10
    },

    counter: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center"
    },

    question: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 30
    },

    option: {
        backgroundColor: "#f1f1f1",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },

    optionText: {
        fontSize: 18
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)"
    },

    popup: {
        padding: 30,
        borderRadius: 15,
        alignItems: "center"
    },

    popupText: {
        fontSize: 20,
        color: "white",
        marginBottom: 20
    },

    nextButton: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 10
    },

    nextText: {
        fontSize: 16
    },

    resultTitle: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },

    resultScore: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 30
    },

    restartButton: {
        backgroundColor: "#1976d2",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },

    restartText: {
        color: "white",
        fontSize: 16
    }

});