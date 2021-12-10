import {MAX_WIDTH, padding, margin} from '@app/styles/mixins';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    width: MAX_WIDTH,
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 50,
    color: 'white',
  },
  caption: {
    paddingHorizontal: 50,
    color: 'white',
  },
  textInputFrame: {
    width: MAX_WIDTH,
    ...padding(0, 25, 0, 25),
  },
  form: {backgroundColor: '#b3d9e0'},
  btnSignin: {width: 150, ...margin(20, 0, 0, 0)},
  btnSignup: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'white',
  },
  logoImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    ...margin(0, 0, 20, 0),
    width: 300,
  },
  footerForm: {
    marginTop: -55,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
