import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../../Components/MealDetails"


function MealDetailsScreen({ route }) {
    const catId = route.params.id
    const selectedMeal = MEALS.find((meal) => meal.id == catId)
    return (
        <ScrollView>

            <View style={styles.conainer}>
                <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
                <Text style={styles.title}>
                    {selectedMeal.title}
                </Text>

                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.duration}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                    {selectedMeal.ingredients.map((ingredient) => (
                        <Text key={ingredient}>{ingredient}</Text>
                    ))}
                </View>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Steps</Text>
                    {selectedMeal.steps.map((step) => (
                        <Text key={step}>{step}</Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}
export default MealDetailsScreen

const styles = StyleSheet.create({
    conainer: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
})