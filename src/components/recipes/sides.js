import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';

class Sides extends Component {
    render() {
        return (
            <Card containerStyle={{ padding: 0 }} style={{ marginTop: 50, height: 600}}>
                <ListItem 
                    style={{ height: 100 }}
                    title="Matcha Cake" 
                    subtitle={
                        <View style={{ height: 50 }}>
                            <Text>Matcha chocolate</Text>
                            <Button
                                title="Clear button"
                            />
                        </View>
                    }
                    leftAvatar={{ source: { uri: 'https://picsum.photos/g/100/' }}} />
            </Card>
        );
    }
}

export default Sides;