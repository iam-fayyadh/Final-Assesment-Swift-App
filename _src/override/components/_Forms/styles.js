import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    marginBottom: 55,

    justifyContent: 'center',
  },
  containerCheckBottom: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
  },
  containerCheck: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    marginStart: 10,
    color: 'white',
  },
  button: {
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#FBAE3C',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputField: {borderColor: '#b3d9e0', borderRadius: 50, borderWidth: 2},
});

export default styles;
