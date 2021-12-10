import {Colors, Mixins} from '@app/styles';
import {normalize} from '@app/styles/mixins';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bannerFrame: {
    width: Mixins.MAX_WIDTH,
    alignSelf: 'center',
  },
  itemContainer: {
    alignItems: 'center',
  },
  itemCont: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  itemImage: {
    height: normalize(180),
    // width: Mixins.MAX_WIDTH / 2 - 20,
    width: '100%',
  },
});

export default styles;
