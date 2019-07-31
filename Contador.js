import React, { useState, useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const reducer = (state, action) => {
	switch(action.type) {
		case 'add_plus':
			return state + action.qt
			//return {...state, count: state.count + action.qt };
		case 'add':
			return state + 1;
			//return { ...state, count: state.count + 1 };
			break;
		case 'minus':
			return state - 1;
			//return { ...state, count: state.count - 1 };
			break;
		case 'reset':
			return 0;
			//return initialContagem;
			break;
	}
};

const initialContagem = {
	count:0
}

const Contador = () => {

	//const [contagem, setContagem] = useState(0);

	const [contagem, dispatchContagem] = useReducer(reducer, 0);

	return (
		<View>	
			<Text>Contagem: {contagem}</Text>

			<Button title="+10" onPress={() => dispatchContagem({ type: 'add_plus', qt:10 })} />
			<Button title="+" onPress={() => dispatchContagem({ type: 'add' })} />
			<Button title="-" onPress={() => dispatchContagem({ type: 'minus' })} />
			<Button title="Reset" onPress={() => dispatchContagem({ type: 'reset' })} />
		</View>
	);
};

export default Contador;