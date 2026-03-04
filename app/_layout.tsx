import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return (

        <GestureHandlerRootView style={{ flex: 1 }}>

            <Drawer>

                <Drawer.Screen
                    name="index"
                    options={{
                        title: "Akılcı İlaç Uygulama Asistanı"
                    }}
                />

                <Drawer.Screen
                    name="info"
                    options={{
                        title: "İlaç Bilgileri"
                    }}
                />

                <Drawer.Screen
                    name="quiz"
                    options={{
                        title: "Sorular"
                    }}
                />

                <Drawer.Screen
                    name="order"
                    options={{
                        title: "Sıralama Soruları"
                    }}
                />

            </Drawer>

        </GestureHandlerRootView>

    );
}