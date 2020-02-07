import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import styled from 'styled-components';

const Header = props => {
  return (
    <>
      <View>
        <SafeAreaView>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../../../assets/logo.png')}
            />
            <View style={styles.right}>{props.children}</View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

// We don't use styled-components because of the resizeMode property here :)
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Header;
