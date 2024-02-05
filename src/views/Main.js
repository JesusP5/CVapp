import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';

const profile_photo = {
  uri: 'https://lh3.googleusercontent.com/pw/ABLVV87hROabxLknE-eShHnmdFDSpSG-FvjVaf2bMvH-QPXKYp3x660is9TCRJVwKVWf3d6wCnw1TEWY6b7u2KEXJSrM1IfTfxWFdpBhzOQXnF9eVyHRA1Xwf_omah931V6mFjaE_xaJDEvyGkL38QVve5sFwafSnOUvzKTbxD8AGBHdZ7txSQfHclGs3WcfT77orvotpgBBLpvbYQiXws8M1d5CTuxIo7UkFecIwr9LllvHytopNBPAHC3Tlq2qFMGkLfeTDj0enbA93mP9X3oUl7Cu-EF53ET11xcTyf3aulhmmGpDHS9Lao3Hpu8GmCXvSvBHUinZaOmDh8tJCH8S9ejbaH0l-USBExYK8wDCHtkUbqE6o5ZAAgfmFe17HhTDldcIuSVpjJnRO7fABB44mqic7RexfYVRgocX4s77PMFPtku1GCoEONT5XYZRZFexXJWxQOPZxr0CNDkigJ7BSQaGzkVSrKxkXwDYFd5TeL3PLc6X-ZRgTraqCfYHQHX1pUHY3FGHEf8ugv-Z01u6znyKasBMnXZulWDpXBqDnkCKERf9d8t0--LRyUVdVGN8UYqaMjFYfSAqWvEWyu1ZtMeSin5rAEUR3LL87iHZU9hr5ZJZraaZzWRzzDoLdzl4qjQehqugbrPulikOfZ8C0UazOcgbZAb2-anGYYehQ5ZDujI2bif3i9-_xiYTLhfj910lA2aJ1k8WtqCXqqbrraIx3-Ru_Wsw8ZBAW9L93JWK1wlE3jc5j2W6DdsVqHiiKacvlNX3z0SyQtyfODri5oXNClaNUkTghK2rNTVkxyTykRMv-m4iNiHIORj7B99yPz-dsre80nMVwwrc79FTLnb54aY8jkY_4tztUgS-CiksPp0G35hZKtOC9NDNs1Aro89WwYBqIyGvxDnFWqlsYtwTSDBcPh6HzQvelyawZXVV-Q1W7qqAAJcu8d1n7ic=w1159-h869-s-no-gm?authuser=0',
  width: 225,
  height: 225
}
const statusBarHeight = StatusBar.currentHeight || 0;
const App=()=> {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollview}>
      <View style={styles.containerStyle}>
        <View style={styles.top}>
        <Text style={styles.title}>print ("Hello World!")</Text>
        <Text style={styles.title}>Soy Jesus Alejandro Avendaño Peña</Text>
        <Image source={profile_photo}/>
        </View>
        <View style={styles.middle}>
        <Text style={styles.generalText}>Actualmente estoy cursando la carrera de Ingenieria de Software en la Universidad Autonoma de Queretaro. Por cierto soy el de rojo.</Text>                                                                            
        <Text style={styles.generalText}>Algunas tecnologias que he utilizado a lo largo de mis estudios son: </Text>
        <Text style={styles.generalText}>Java</Text>
        <Text style={styles.generalText}>Python</Text>
        <Text style={styles.generalText}>JavaScript</Text>
        <Text style={styles.generalText}>React</Text>
        </View>
      </View>  
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  scrollview: {
    backgroundColor:"white",
  },
  title:{
    fontWeight: "bold",
    fontSize: 20,
    color:"white"

  },
  top: {
    flex: 0.3,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    margin: 0,
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
    alignItems: 'left',
    margin: 0,
  },
  generalText:{
    fontSize: 15,
    fontWeight: 'bold'
  }
})
export default App;