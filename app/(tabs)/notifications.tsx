import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
    {
        id: "1",
        type: "task",
        title: "Bước 1 Xác định nhu cầu khách hàng",
        content: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
        time: "20/08/2020, 06:00",
    },
    {
        id: "2",
        type: "user",
        title: "Bạn có khách hàng mới!",
        content: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "3",
        type: "user",
        title: "Khách hàng được chia sẻ bị trùng",
        content: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "4",
        type: "user",
        title: "Khách hàng được thêm bị trùng",
        content: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "5",
        type: "task",
        title: "Công việc sắp đến hạn trong hôm nay",
        content: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
        time: "20/08/2020, 06:00",
    },
    {
        id: "6",
        type: "task",
        title: "Công việc đã quá hạn",
        content: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành.",
        time: "20/08/2020, 06:00",
    },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Thông báo</Text>
            </View>

            {/* List */}
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        {/* Icon */}
                        <View style={styles.iconWrap}>
                            <Ionicons
                                name={item.type === "task" ? "checkmark-circle" : "people"}
                                size={26}
                                color={item.type === "task" ? "#3B5CB8" : "#4F6FD8"}
                            />
                        </View>

                        {/* Content */}
                        <View style={styles.content}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.content}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F5F9",
    },

    /* Header */
    header: {
        backgroundColor: "#fff",
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#E6EAF0",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },

    /* Item */
    item: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E6EAF0",
    },

    iconWrap: {
        width: 42,
        alignItems: "center",
        marginTop: 2,
    },

    content: {
        flex: 1,
    },

    title: {
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 2,
    },

    desc: {
        fontSize: 13,
        color: "#555",
        lineHeight: 18,
    },

    time: {
        marginTop: 6,
        fontSize: 12,
        color: "#999",
    },
});
