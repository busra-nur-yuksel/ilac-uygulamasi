import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function InfoScreen() {

    const [page, setPage] = useState("menu");

    if (page === "menu") {
        return (

            <View style={styles.container}>

                <TouchableOpacity style={styles.card} onPress={() => setPage("ilac")}>
                    <Text style={styles.cardText}>İLAÇ NEDİR?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => setPage("akilci")}>
                    <Text style={styles.cardText}>AKILCI İLAÇ KULLANIMI NEDİR?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => setPage("ilkeler")}>
                    <Text style={styles.cardText}>AKILCI İLAÇ KULLANIMI İLKELERİ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => setPage("yanlis")}>
                    <Text style={styles.cardText}>AKILCI OLMAYAN İLAÇ KULLANIMI</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => setPage("antibiyotik")}>
                    <Text style={styles.cardText}>ANTİBİYOTİK NEDİR?</Text>
                </TouchableOpacity>

            </View>

        );
    }

    if (page === "ilac") {
        return (

            <ScrollView style={styles.container}>

                <Text style={styles.title}>İlaç Nedir?</Text>

                <Text style={styles.text}>
                    İlaç; hastalıkları önlemek, teşhis etmek veya tedavi etmek amacıyla
                    kullanılan kimyasal veya biyolojik maddelerdir. İlaçlar insan
                    vücudundaki biyolojik süreçleri etkileyerek hastalığın belirtilerini
                    azaltabilir, hastalığın ilerlemesini durdurabilir veya tamamen
                    iyileşme sağlayabilir.
                    {"\n\n"}
                    Modern tıpta ilaçlar; ağrı kesiciler, antibiyotikler, vitaminler,
                    hormon ilaçları ve aşılar gibi birçok farklı gruba ayrılır.
                    Her ilaç belirli bir hastalığın tedavisi için geliştirilmiştir ve
                    bu nedenle her ilaç herkes için uygun olmayabilir.
                    {"\n\n"}
                    İlaçların etkili ve güvenli olabilmesi için doğru dozda,
                    doğru süre boyunca ve doktor veya sağlık profesyonellerinin
                    önerdiği şekilde kullanılması gerekir. Yanlış doz kullanımı,
                    gereksiz ilaç kullanımı veya başkasına ait ilaçların kullanılması
                    ciddi sağlık sorunlarına yol açabilir.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => setPage("menu")}>
                    <Text style={styles.buttonText}>Geri</Text>
                </TouchableOpacity>

            </ScrollView>

        );
    }

    if (page === "akilci") {
        return (

            <ScrollView style={styles.container}>

                <Text style={styles.title}>Akılcı İlaç Kullanımı</Text>

                <Text style={styles.text}>
                    Akılcı ilaç kullanımı; bireylerin klinik ihtiyaçlarına uygun ilacı,
                    doğru dozda, doğru süre boyunca ve en uygun maliyetle
                    kullanmalarını ifade eden bir yaklaşımdır.
                    {"\n\n"}
                    Bu yaklaşımın amacı hem hastaların sağlığını korumak
                    hem de gereksiz ilaç kullanımını önlemektir.
                    Gereksiz veya yanlış kullanılan ilaçlar hem bireysel sağlık
                    açısından risk oluşturur hem de toplum sağlığını olumsuz etkileyebilir.
                    {"\n\n"}
                    Akılcı ilaç kullanımında doktorun önerileri dikkate alınmalı,
                    ilaçların kullanım talimatları okunmalı ve tedavi süresi
                    tamamlanmalıdır.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => setPage("menu")}>
                    <Text style={styles.buttonText}>Geri</Text>
                </TouchableOpacity>

            </ScrollView>

        );
    }

    if (page === "ilkeler") {
        return (

            <ScrollView style={styles.container}>

                <Text style={styles.title}>Akılcı İlaç Kullanımı İlkeleri</Text>

                <Text style={styles.text}>
                    Akılcı ilaç kullanımının temelinde bazı önemli ilkeler bulunur.
                    {"\n\n"}
                    • Doğru ilaç seçimi: Hastalığın türüne uygun ilaç seçilmelidir.
                    {"\n"}
                    • Doğru doz: İlacın etkili olabilmesi için doktorun önerdiği
                    doz miktarına uyulmalıdır.
                    {"\n"}
                    • Doğru süre: Tedavi süresi doktorun önerdiği şekilde
                    tamamlanmalıdır.
                    {"\n"}
                    • Doğru kullanım şekli: İlaçlar prospektüste belirtilen
                    talimatlara göre kullanılmalıdır.
                    {"\n\n"}
                    Bu ilkelerin uygulanması hem tedavinin başarısını artırır
                    hem de olası yan etkilerin ortaya çıkma riskini azaltır.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => setPage("menu")}>
                    <Text style={styles.buttonText}>Geri</Text>
                </TouchableOpacity>

            </ScrollView>

        );
    }

    if (page === "yanlis") {
        return (

            <ScrollView style={styles.container}>

                <Text style={styles.title}>Akılcı Olmayan İlaç Kullanımı</Text>

                <Text style={styles.text}>
                    Akılcı olmayan ilaç kullanımı; ilaçların gereksiz,
                    yanlış veya bilinçsiz şekilde kullanılması anlamına gelir.
                    {"\n\n"}
                    En sık görülen örnekler şunlardır:
                    {"\n"}
                    • Doktor önerisi olmadan ilaç kullanmak
                    {"\n"}
                    • Başkasına ait ilaçları kullanmak
                    {"\n"}
                    • İlacı önerilen dozdan fazla veya az kullanmak
                    {"\n"}
                    • Tedavi süresi tamamlanmadan ilacı bırakmak
                    {"\n"}
                    • Son kullanma tarihi geçmiş ilaçları kullanmak
                    {"\n\n"}
                    Bu tür yanlış uygulamalar ilaçların etkisini azaltabilir
                    ve ciddi sağlık sorunlarına yol açabilir.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => setPage("menu")}>
                    <Text style={styles.buttonText}>Geri</Text>
                </TouchableOpacity>

            </ScrollView>

        );
    }

    if (page === "antibiyotik") {
        return (

            <ScrollView style={styles.container}>

                <Text style={styles.title}>Antibiyotik Nedir?</Text>

                <Text style={styles.text}>
                    Antibiyotikler bakterilerin neden olduğu enfeksiyonları
                    tedavi etmek için kullanılan ilaçlardır.
                    {"\n\n"}
                    Antibiyotikler bakterileri öldürerek veya çoğalmalarını
                    durdurarak enfeksiyonun kontrol altına alınmasını sağlar.
                    {"\n\n"}
                    Ancak antibiyotikler sadece bakteriyel enfeksiyonlarda
                    etkilidir. Grip ve soğuk algınlığı gibi viral hastalıklarda
                    antibiyotik kullanılması fayda sağlamaz.
                    {"\n\n"}
                    Gereksiz antibiyotik kullanımı antibiyotik direncine
                    neden olabilir ve bu durum gelecekte enfeksiyonların
                    tedavisini zorlaştırabilir.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => setPage("menu")}>
                    <Text style={styles.buttonText}>Geri</Text>
                </TouchableOpacity>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f7f9fc"
    },

    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3
    },

    cardText: {
        fontSize: 18,
        fontWeight: "600"
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20
    },

    text: {
        fontSize: 16,
        lineHeight: 24
    },

    button: {
        backgroundColor: "#2e7dff",
        padding: 15,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30
    },

    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
    }

});