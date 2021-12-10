import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    paddingVertical: 120,
    marginBottom: 20,
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
  labelBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'white',
  },
  footerForm: {
    marginTop: -55,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 20,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
