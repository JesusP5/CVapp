import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Linking} from 'react-native';

const App = () => {
  const profile_photo = {
    uri: 'https://lh3.googleusercontent.com/pw/ABLVV87hROabxLknE-eShHnmdFDSpSG-FvjVaf2bMvH-QPXKYp3x660is9TCRJVwKVWf3d6wCnw1TEWY6b7u2KEXJSrM1IfTfxWFdpBhzOQXnF9eVyHRA1Xwf_omah931V6mFjaE_xaJDEvyGkL38QVve5sFwafSnOUvzKTbxD8AGBHdZ7txSQfHclGs3WcfT77orvotpgBBLpvbYQiXws8M1d5CTuxIo7UkFecIwr9LllvHytopNBPAHC3Tlq2qFMGkLfeTDj0enbA93mP9X3oUl7Cu-EF53ET11xcTyf3aulhmmGpDHS9Lao3Hpu8GmCXvSvBHUinZaOmDh8tJCH8S9ejbaH0l-USBExYK8wDCHtkUbqE6o5ZAAgfmFe17HhTDldcIuSVpjJnRO7fABB44mqic7RexfYVRgocX4s77PMFPtku1GCoEONT5XYZRZFexXJWxQOPZxr0CNDkigJ7BSQaGzkVSrKxkXwDYFd5TeL3PLc6X-ZRgTraqCfYHQHX1pUHY3FGHEf8ugv-Z01u6znyKasBMnXZulWDpXBqDnkCKERf9d8t0--LRyUVdVGN8UYqaMjFYfSAqWvEWyu1ZtMeSin5rAEUR3LL87iHZU9hr5ZJZraaZzWRzzDoLdzl4qjQehqugbrPulikOfZ8C0UazOcgbZAb2-anGYYehQ5ZDujI2bif3i9-_xiYTLhfj910lA2aJ1k8WtqCXqqbrraIx3-Ru_Wsw8ZBAW9L93JWK1wlE3jc5j2W6DdsVqHiiKacvlNX3z0SyQtyfODri5oXNClaNUkTghK2rNTVkxyTykRMv-m4iNiHIORj7B99yPz-dsre80nMVwwrc79FTLnb54aY8jkY_4tztUgS-CiksPp0G35hZKtOC9NDNs1Aro89WwYBqIyGvxDnFWqlsYtwTSDBcPh6HzQvelyawZXVV-Q1W7qqAAJcu8d1n7ic=w1159-h869-s-no-gm?authuser=0',
    width: 225,
    height: 225,
    
  }

  return (
    <SafeAreaView style={styles.containerSafe}>
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center', backgroundColor: "#AAFAF7", borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
        <Text style={{fontSize: 100, fontWeight: 'bold'}}>Hello World!</Text>
        <Image source={profile_photo} style={{borderRadius: 225/2, marginBottom: 1}} />
        <Text style={{marginBottom:15}}>(Soy el de rojo xd)</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10}}>Curricum</Text>
      </View>

      <View style={[styles.section, {backgroundColor: "#ACFADD"}]}>
        <Text style={styles.heading}>Información Personal</Text>
        <Text>Nombre: Jesus Alejandro Avendaño Peña</Text>
        <Text>Correo: jesuson567@hotmail.com</Text>
        <Text>Numero: 4425990426</Text>
      </View>

      <View style={[styles.section, {backgroundColor: "#88FA7F"}]}>
        <Text style={styles.heading}>Experiencia Laboral y Academica</Text>
        <Text>Participacion y 4to lugar en Hackathon 2022 - UAQ</Text>
        <Text>Participacion y 4to lugar en Hackathon 2023 - UAQ</Text>
        <Text>Puesto de Soporte TI(Actualmente)</Text>
      </View>

      <View style={[styles.section, {backgroundColor: "#A4FABC"}]}>
        <Text style={styles.heading}>Educación</Text>
        <Text>Ingeniería de Software - Universidad Autonoma de Queretaro</Text>
        <Text>6to Semestre</Text>
      </View>

      <View style={[styles.section, {backgroundColor: "#B7FA78"}]}>
        <Text style={styles.heading}>Tecnologias</Text>
        <View style={{flexDirection: 'row'}}>
          <Image  source={require('./src/images/python.png')} style={styles.imagesTecs}/>
          <Image  source={require('./src/images/java.png')} style={styles.imagesTecs}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image  source={require('./src/images/javascript.png')} style={styles.imagesTecs}/>
          <Image  source={require('./src/images/react.png')} style={styles.imagesTecs}/>
        </View>
      </View>
      <View style={{ backgroundColor: "#AAFAF7",paddingBottom: 25, alignItem: 'center' }}>
        <Text style={styles.heading}>Proyectos que he realizado</Text>
        <Text style={styles.subHeading}>Viritzion</Text>
        <Text>Esta es una aplicacion web y movil que empezamos a desarrollar mi equipo y yo en el Hackathon 2023 de la UAQ. La aplicacion surge de la problematica con los conflictos que suelen existir en la validacion de contratos o documentos legislativos. Para mas informacion leer la documentacion.</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/JesusP5/virizionapp.git')}>
          <Image source={require('./src/images/viritzion.png')} style={[styles.imagesTecs, {paddingTop: 0}]}/>
        </TouchableOpacity>

        <Text style={styles.subHeading}>Cluster sencillo</Text>
        <Text>Este es un pequeño proyecto que se realizo para la materia de Servicios Distribuidos donde realizamos una simulacion de clustering. Esto se logro enviando un video desde un servidor el cual habia recibido el video de un cliente a 3 computadoras (esclavos) y estos procesaban el video con una libreria de python devolvian el video procesado y este era enviado de vuelta al cliente desde el servidor. </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/JesusP5/virizionapp.git')}>
        <Text style={{color: 'blue'}}>Aqui el repositorio disponible.</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    padding: 20,
  },
  section: {
    paddingBottom: 20
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagesTecs:{
    width:'40%',
    marginTop: 20,
    marginLeft: 25
  },
  subHeading:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5
  }
});

export default App;
