import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MainLayout from '../../layouts';

function Home(props) {

  return (
    <MainLayout>
      <View>
        <Text>Hola. Todo el código debe ser escrito en inglés, con ECMASCRIPT 6. No puedes commitear código que no cumpla con esos requerimientos. Si lo haces, te voy a hacer cambiarlo y volverlo a escribir. Las carpetas debe seguir el orden que te he dejado.</Text>
        <Text>Te recomiendo por iniciar leyendo las DOC de: "WIx navigation", eso te ayudará a saber como se muestran las vistas en native. De forma paralela, revisa la carpeta llamada 'navigation' en './src/navigation', ahí verás como se monta la navegación en native.</Text>
        <Text>Podrías también revisar, como se hacen los estilos para native. Aquí no se cuenta con un archivo CSS por aparte. Se hace CSS in JS. </Text>
        <Text>Del resto, te deseo suerte lidiando con native :')'</Text>
      </View>
    </MainLayout>
  );
}

export default Home;
