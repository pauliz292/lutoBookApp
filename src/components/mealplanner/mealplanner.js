import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';
import BackButton from '../_common/back';
import { Link } from 'react-router-native';
import * as mealService from '../../services/mealService';

class Mealplanner extends Component {
    state = {
        menus: [
            
        ]
    };

    getMenu = async () => {
        let { userId } = this.props.location.state;
        await mealService.GetMenuByUser(userId)
            .then(res => {
                this.setState({
                    menus: res.data
                });
            });
    };

    async componentDidMount() {
        await this.getMenu();
        console.log(this.state.menus)
    }
    
    HandleRefresh = () => {
        alert('Refresh Planner');
    };

    CardItem = props => {
        return(
            <Card>
                {props.menus.map((menu, index) => (
                    <ListItem 
                        key={index}
                        title={menu.date}
                        subtitle={
                            <View>
                                <Text style={{ fontSize: 22, fontWeight: '500' }}>{menu.breakfast.mealTime.name}</Text>
                                    {menu.breakfast.menuDetails.map(recipe => (
                                        <Link
                                            style={{ height: 20, marginBottom: 10, }}
                                            key={recipe.id} 
                                            to={{
                                            pathname: '/recipedetails',
                                            state: {
                                                recipe: recipe.id
                                            }
                                        }}>
                                            <Text style={{ fontSize: 18, color: 'blue' }}>{recipe.recipe.name}</Text>
                                        </Link>
                                    ))}
                                <Text style={{ fontSize: 22, fontWeight: '500' }}>{menu.lunch.mealTime.name}</Text>
                                    {menu.lunch.menuDetails.map(recipe => (
                                        <Link 
                                            style={{ height: 20, marginBottom: 10, }}
                                            key={recipe.id} 
                                            to={{
                                            pathname: '/recipedetails',
                                            state: {
                                                recipe: recipe.id
                                            }
                                        }}>
                                            <Text style={{ fontSize: 18, color: 'blue' }}>{recipe.recipe.name}</Text>
                                        </Link>
                                    ))}
                                <Text style={{ fontSize: 22, fontWeight: '500' }}>{menu.dinner.mealTime.name}</Text>
                                    {menu.dinner.menuDetails.map(recipe => (
                                        <Link 
                                            style={{ height: 20, marginBottom: 10, }}
                                            key={recipe.id} 
                                            to={{
                                            pathname: '/recipedetails',
                                            state: {
                                                recipe: recipe.id
                                            }
                                        }}>
                                            <Text style={{ fontSize: 18, color: 'blue' }}>{recipe.recipe.name}</Text>
                                        </Link>
                                    ))}
                            </View>
                        }
                    /> 
                ))}
            </Card>
        );
    };

    render() {
        const { menus } = this.state;

        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', marginTop: 20,}}>
                    <Text style={{ fontSize: 20, fontWeight: '300' }}>Meal Planner</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <BackButton />
                    <Button 
                        style={styles.button}
                        title="Update Planner"
                        onPress={this.HandleRefresh} 
                    />
                </View>
                <ScrollView>
                    <this.CardItem menus={menus}/>
                </ScrollView>
            </View>
        );
    }
}

export default Mealplanner;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: Dimensions.get('window').width,
        backgroundColor: '#eee',
    },
    buttonContainer: { 
        height: 50, 
        alignItems: 'center', 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: { 
        height: 80, 
        width: 80, 
        backgroundColor: 'blue',
    }
})