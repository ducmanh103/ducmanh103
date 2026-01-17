import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Pressable, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3B5CB8",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}
    >
      {/* Trang chủ */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Khách hàng */}
      <Tabs.Screen
        name="customers"
        options={{
          title: "Khách hàng",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />

      {/* Nút + */}
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarLabel: () => null,
          tabBarButton: () => {
            const router = useRouter();

            return (
              <Pressable
                onPress={() => router.push("/modal")}
                style={{
                  top: -10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    top: 10,
                    width: 45,
                    height: 45,
                    borderRadius: 26,
                    backgroundColor: "#3B5CB8",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3,
                  }}
                >
                  <Ionicons name="add" size={26} color="#fff" />
                </View>
              </Pressable>
            );
          },
        }}
      />



      {/* Thông báo */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Thông báo",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />

      {/* Tài khoản */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
