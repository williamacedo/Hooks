import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const App = () => {

  const [movies, setMovies] = useState([]);

  const getFilmes = async () => {
    const res = await fetch('https://alunos.b7web.com.br/cinema/');
    const json = await res.json();

    setMovies(json);
  }

  useEffect(() => {
    getFilmes();
  }, []);
  
  return (
    <View>
      <Text>teste</Text>
      <FlatList 
        data={movies} 
        renderItem={( {item} ) => {
        return (  
          <View>
            <Image source={{uri: item.avatar}} style={styles.img} />
            <Text style={styles.title}>{item.titulo}</Text>
          </View>
        );
      }} 
      />
    </View>
  )

}

const styles = StyleSheet.create({
  list:{
    flex: 1
  },
  item:{
    
  } , 
  img:{
    width: 100,
    height: 200
  },
  title: {
    fontSize: 17,
    marginTop: 10
  }
});

export default App;