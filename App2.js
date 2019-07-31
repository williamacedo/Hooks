import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
// import submitName from './submitName';
// import useCharLimit from './hooks/useCharLimit';
// import Contador from './Contador';

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const countString = (str) => {
    return str.length;
  };

  const countedName = useMemo(() => countString(name), [name]);
  const countedEmail = useMemo(() => countString(email), [email]);


  // const txt = useRef();

  // useEffect(() => {

  // }, []);

  // const handleButtonClick = () => {
  //     submitName(name, setName);
  // };

  // const handleFocusClick = () => {
  //   txt.current.focus();
  // }

  // const handleBlurClick = () => {
  //   txt.current.blur();
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Seja bem vindo</Text>

      <Text>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={(txt) => setName(txt)} />
      <Text>{countedName} letras</Text>

      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={(txt) => setEmail(txt)} /> 
      <Text>{countedEmail} letras</Text>     
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  h1:{
    fontSize: 23
  },
  input: {
    backgroundColor: '#CCC'
  }
});

export default App;