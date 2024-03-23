import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Home() {
    const [Pass, setPass] = useState('')
    const QuantidadeCaracter = 6
    const Caracter = 'cvzxbnczxkajsask253615263217!@#$%¨&*()56523'
    let NovaSenha = ''

    const GerarSenha = () =>{
        for(let i = 0; i < QuantidadeCaracter; i++){
            const Montar = Math.floor(Math.random() * Caracter.length)
            NovaSenha += Caracter[Montar]
        }

        setPass(NovaSenha)
        
    }

   

    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    source={require('../assets/logoBat.png')}
                    style={styles.img}
                />
            </View>

            <View style={styles.containercard}>
                <View style={styles.CardgerarText}>
                    <Text style={styles.gerarText}>{Pass}</Text>
                </View>
                <TouchableOpacity style={styles.ButtonGerarsenha} onPress={GerarSenha} >
                    <Text style={styles.ButtonGerarsenhaText}>Gerar senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerImg: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 178,
        width: 278
    },
    containercard: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonGerarsenha: {
        backgroundColor: 'yellow',
        width: 250,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    ButtonGerarsenhaText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    gerarText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    CardgerarText: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        width: 250,
        margin: 25,
        height: 25,
        borderRadius: 12
    }
});
