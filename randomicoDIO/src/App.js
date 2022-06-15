import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';


const App = () => {

  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 10)
    setNumero(novo_numero)
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao} >
        <Text> Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});