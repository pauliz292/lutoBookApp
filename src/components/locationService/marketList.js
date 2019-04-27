import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Button, Card, ListItem } from 'react-native-elements';
import { Link } from 'react-router-native';

class MarketList extends Component {
    state = {
        places: [
            {
                id:1,
                name:"market 1",
                geometry: { latitude: 0, longitude: 0},
            },
            {
                id:2,
                name: "market 2",
                geometry: { latitude: 0, longitude: 0},
            },
        ],
    };

    async componentDidMount() {
        const { places } = this.props.location.state;
        await this.setState({ places })
    };

    render() {
        const { places } = this.state;

        return (
            <ScrollView>
                <Card containerStyle={{marginBottom: 20}}>
                    {places.map(place => (
                        <ListItem 
                            key={place.id}
                            title={place.name}
                            subtitle={
                                <View style={{ height: 80 }}>
                                    <Text>{place.vicinity}</Text>
                                    <Link to={{
                                        pathname: '/map',
                                        state: {
                                            place: place.geometry.location
                                        }
                                    }}>
                                        <Text style={{color: 'blue'}}>See on map</Text>
                                    </Link>
                                </View>
                            }
                        />
                    ))}
                </Card>
                <Button 
                    title="Back"
                    onPress={() => this.props.history.goBack()}
                />
            </ScrollView>
        );
    }
}

export default MarketList;