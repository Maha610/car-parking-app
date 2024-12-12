import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../components/CustomButton";
import { useRouter } from "expo-router";
import { CustomImage } from "../components/CustomImage";

export default function SplashScreen() {
  const router = useRouter();
  const handlePress = () => {
    router.push("/onboarding/FirstOnboarding");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.tagline}>Find Parking Spots Easily</Text>
      <CustomImage
        source={require("../assets/Welcome.jpg")}
        style={{ height: 400 }}
      />
      <CustomButton onPress={handlePress} title="Let's Go" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    color: "#171616",
    fontWeight: "medium",
  },
  tagline: {
    fontSize: 22,
    color: "#171616",
  },
});
