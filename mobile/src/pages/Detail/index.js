import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import {Feather} from '@expo/vector-icons';

import {useNavigation, useRoute} from '@react-navigation/native';

import style from './styles';
import logoImg from '../../assets/logo.png';

import * as MailComposer from 'expo-mail-composer';

export default function Detail(){

    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    const mensagem = `Olá ${incident.name}, estou entrando em contato para ajudar no caso ${incident.title} com o valor de R$ ${incident.value},00`

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject : `Heroi do caso: ${incident.title}`,
            recipients : [incident.email],
            body : mensagem,
        })
    }

    function sendWhats(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${mensagem}`);
    }
    return (
        <View style={style.container}>
             <View style={style.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather 
                        name="arrow-left" 
                        size={28} 
                        color="#e02041"
                    />
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                <Text style={style.incidentProperty}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>{incident.description}</Text>

                <Text style={style.incidentProperty}>Valor:</Text>
                <Text style={style.incidentValue}>{Intl.NumberFormat(
                            'pt-BR', {
                                style : 'currency', 
                                currency : 'BRL'
                                }).format(incident.value)}</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso!</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhats}>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.action} onPress={sendMail}>
                        <Text style={style.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}