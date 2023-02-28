import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.inicial}>
      <View style={styles.navbar}>
        <View style={{ marginLeft: 20, flex: 1 }}>
          <Image
            source={require("../../../assets/adaptive-icon.png")}
            style={{
              width: 150,
              height: 40,
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{ width: 40, height: 40, marginRight: "5%" }}
          >
            <Image
              source={{
                uri: "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            margin: "5%",
            fontWeight: "900",
            color: "#70bdb5",
          }}
        >
          Bem vindo ao Skedoo!!
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inicial: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFF",
    height: 80,
    width: "100%",
    marginTop: "15%",
    alignItems: "center",
  },
});
