import React, {useLayoutEffect} from 'react';
import {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

class App extends Component {
  state = {
    face: 'Cara',
    dado: 0,
  };

  jogarMoeda = () => {
    var resultado = Math.random();
    if (resultado < 0.5) {
      this.setState({face: 'Cara'});
    } else {
      this.setState({face: 'Coroa'});
    }
  };

  valorAleatorio = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  jogarDado = () => {
    let n = this.valorAleatorio();

    this.setState({dado: n});

    switch (n) {
      case 1:
        this.setState({dado: '1'});
        break;
      case 2:
        this.setState({dado: '2'});
        break;
      case 3:
        this.setState({dado: '3'});
        break;
      case 4:
        this.setState({dado: '4'});
        break;
      case 5:
        this.setState({dado: '5'});
        break;
      case 6:
        this.setState({dado: '6'});
        break;
    }
  };

  obterPontos = () => {
    let n = this.state.dado;

    let component = null;

    if (n == 1) {
      component = (
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <View style={styles.ponto} />
        </View>
      );
    } else if (n == 2) {
      component = (
        <View style={[styles.row, {transform: [{rotate: '45deg'}]}]}>
          <View style={styles.ponto} />
          <View style={styles.ponto} />
        </View>
      );
    } else if (n == 3) {
      component = (
        <View style={[styles.row, {transform: [{rotate: '45deg'}]}]}>
          <View style={styles.ponto} />
          <View style={styles.ponto} />
          <View style={styles.ponto} />
        </View>
      );
    } else if (n == 4) {
      component = (
        <>
          <View style={[styles.row, {marginBottom: 30}]}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
          <View style={styles.row}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
        </>
      );
    } else if (n == 5) {
      component = (
        <>
          <View style={styles.row}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
          <View style={[styles.row, {justifyContent: 'center'}]}>
            <View style={styles.ponto} />
          </View>
          <View style={styles.row}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
        </>
      );
    } else {
      component = (
        <>
          <View style={styles.row}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
          <View style={[styles.row, {marginVertical: 7.5}]}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
          <View style={styles.row}>
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
        </>
      );
    }
    return component;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={
            this.state.face == 'Coroa'
              ? require('./imagem/Coroa.png')
              : require('./imagem/cara.png')
          }
        />

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#ffff',
            marginVertical: 20,
          }}>
          Cara ou Coroa
        </Text>

        <Button onPress={this.jogarMoeda} title="Jogar!" />

        <View style={styles.divider} />

        <View style={styles.quadrado}>{this.obterPontos()}</View>

        <Button onPress={this.jogarDado} title="Jogar Dado" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141413',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  divider: {
    height: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginVertical: 20,
  },
  quadrado: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 40,
    borderRadius: 10,
    height: 150,
    width: 150,
    backgroundColor: 'white',
  },
  ponto: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 7.5,
  },
  row: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
