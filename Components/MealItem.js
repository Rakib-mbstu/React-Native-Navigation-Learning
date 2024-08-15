import { Pressable, Text, Image, View, StyleSheet, Platform } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={styles.mealItem}>
            <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : null}>
                <View style={styles.innerContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 8,

    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        textTransform: 'uppercase',
        marginHorizontal: 4,
        fontSize: 12,
    }
})