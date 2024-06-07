import { Image, StyleSheet, Text, View, useWindowDimensions, FlatList } from 'react-native';
import React from 'react';



const data = [
    {
        id: 1,
        title: 'Skillup Coding',
        description: '',
        image: require('../../assets/images/onbod_01.png'),
        titleColor: '#0961F5',
        descriptionColor: '#858597',
    },
    {
        id: 2,
        title: 'Skillup Coding Free Trial Courses',
        description: 'Free courses for you to find your way to learning.',
        image: require('../../assets/images/onbod_02.png'),
        titleColor: '#1F1F39',
        descriptionColor: '#858597',
    },
    {
        id: 3,
        title: 'Quick and easy learning',
        description: 'Easy and fast learning at any time to help you improve various skills.',
        image: require('../../assets/images/onbod_03.png'),
        titleColor: '#1F1F39',
        descriptionColor: '#858597',
    },
    {
        id: 4,
        title: 'Personalized for you',
        description: 'Get recommendations based on your enrolled courses and searches.',
        image: require('../../assets/images/onbod_04.png'),
        titleColor: '#1F1F39',
        descriptionColor: '#858597',
    },
    {
        id: 5,
        title: 'Get Online Certificate',
        description: 'Analyse your scores and Track your results.',
        image: require('../../assets/images/onbod_05.png'),
        titleColor: '#1F1F39',
        descriptionColor: '#858597',
    },
];

const OnBoarding = () => {
    const { width, height } = useWindowDimensions();

    const renderItem = ({ item }) => (
        <View style={[styles.itemContainer, { width, height }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.title, { color: item.titleColor }]}>{item.title}</Text>
            {item.description ? (
                <Text style={[styles.description, { color: item.descriptionColor }]}>{item.description}</Text>
            ) : null}
            <CustomButton/>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default OnBoarding;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '80%',
        height: '50%',
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});
