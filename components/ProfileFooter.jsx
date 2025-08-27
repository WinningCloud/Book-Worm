import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";

export default function ProfileFooter() {
  const socialLinks = [
    { name: "logo-linkedin", url: "https://www.linkedin.com/in/farhan6389" },
    { name: "logo-github", url: "https://github.com/WinningCloud" },
    { name: "logo-instagram", url: "https://instagram.com/farhann_6389" },
  ];

  const openLink = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (err) {
      console.warn("Failed to open link:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the Owner</Text>
      <Text style={styles.subtitle}>Farhan – Developer & Book Enthusiast</Text>

      <View style={styles.socialContainer}>
        {socialLinks.map((link, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.socialButton}
            onPress={() => openLink(link.url)}
          >
            <Ionicons name={link.name} size={28} color={COLORS.primary} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: COLORS.border,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    padding: 8,
  },
});
