import React, { Component } from 'react';
import { View, SafeAreaView, ActivityIndicator, Text, VirtualizedList, ScrollView } from 'react-native';
import { getList } from '../../api'
import Model from '../../components/partials'

//Components
import SearchBar from '../../components/SearchBar'
import CarCell from '../../components/CarCell'

//Style
import style from './style'
import { constants, func } from '../../mainStyle'

const { mainContainer } = style
const { text } = func;
const { clrBlack } = constants

export default class MainList extends Component {
    render() {
        const { state: { models, fetchComplete }, props: { navigation } } = this;

        return (
            <View style={mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SafeAreaView>
                        <Text style={[text(33, clrBlack), { marginVertical: 21 }]}>Carros</Text>
                        <SearchBar filterList={this.filterList} style={{ marginBottom: 16 }}/>
                        {
                            fetchComplete ? 
                                fetchComplete !== "error" ?
                                    models.length > 0 ?
                                        <VirtualizedList
                                            data={models}
                                            getItem={(data, index) => data[index]}
                                            keyExtractor={({id}) => id}
                                            style={{marginTop: 10}}
                                            getItemCount={() => models.length}
                                            renderItem={({ item }) => <CarCell navigate={navigation.navigate} model={item}/>}
                                        />
                                    :
                                        <Text style={[text(17, clrBlack), { textAlign: "center" }]}>Nenhum veículo encontrado</Text>
                                :
                                    <Text style={[text(17, clrBlack), { textAlign: "center" }]}>Ocorreu um erro</Text>
                            :
                                <ActivityIndicator style={{marginTop: 10}} size="large"/>
                        }
                    </SafeAreaView>
                </ScrollView>
            </View>
        );
    }

    state = {
        models: [],
        modelsCopy: [],
        fetchComplete: false
    }

    componentDidMount = () => {
        getList().then(models => { //Buscar lista de veículos
            const filteredModels = models.map((item, index) => {
                return {
                    ...item,
                    id: `${item.CodigoFipe}_${index}`
                }
            }) //Filtrar duplicatas

            this.setState({models: filteredModels, modelsCopy: filteredModels, fetchComplete: true}) //Atualizar state com os modelos filtrados, uma cópia e um boolean para verificar se a chamada está completa
        }).catch((err) => this.setState({...this.state, fetchComplete: "error"}))
    }

    filterList = async (input) => {
        let modelsCopy = [...this.state.modelsCopy]; //Copiar lista de veículos
        let filter = modelsCopy.filter((model) => {
            const { name } = Model(model);

            return name.toLowerCase().includes(input.toLowerCase()) //Comparar duas strings lowercase de acordo com o texto inserido na search bar
        })  //Filtrar 
        
        this.setState({...this.state, models: filter}) // Atualizar lista de veículos
    }
}