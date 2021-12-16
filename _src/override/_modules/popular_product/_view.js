import React, {useEffect, useState, useCallback, useRef} from 'react';
import {normalize} from '@app/styles/mixins';
import {Colors, Mixins} from '@app/styles';
import {FlatList, Image, View, SafeAreaView} from 'react-native';
import {Card} from 'react-native-paper';
import {useColorScheme} from 'react-native-appearance';
import {withProfiler} from '@sentry/react-native';
import {ScrollView} from 'react-native';
import BannerSlider from '@app/components/BannerSlider';
import RenderIf from '@app/components/RenderIf';
import RenderItemList from '@app/components/RenderItem';
import Section from '@app/components/Section';
import Text from '@app/components/Text';

import FastImage from 'react-native-fast-image';
import CategorySlider from '@app/components/AddonCategorySlider';
import AppBar from '@app/components/AppBar';
import AnalyticsHelper from '@app/helpers/Analytics';
import {thumborProductList} from '@app/helpers/Thumbor';

import styles from '@app/_modules/product_list/styles';

const PopularProduct = ({data, loading, error}) => {
  const scheme = useColorScheme();
  const [products, setProducts] = useState(null);

  const Item = ({item}) => {
    return (
      <View style={{padding: 5}} width="50%" backgroundColor="#001220">
        <Card>
          {/* <SafeAreaView style={styles.itemContainer}> */}
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Content width={'100%'} alignStart hpadding>
            <Text bold>{item.name}</Text>
            <Text small left lineThrough="5">
              {item.price_range.maximum_price.regular_price.currency}{' '}
              {item.price_range.maximum_price.regular_price.value}
            </Text>
            <Text medium bold style={{color: 'red'}}>
              {item.price_range.maximum_price.final_price.currency}{' '}
              {item.price_range.maximum_price.final_price.value}
            </Text>
          </Card.Content>
        </Card>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    return <Item item={item} />;
  };
  useEffect(() => {
    setProducts(data && data.categoryList[0].products.items);
  }, [loading]);
  if (loading) return <Text>Loading...</Text>;

  return (
    <>
      <AppBar useBack />

      <Text
        centerChildren
        center
        style={{
          fontSize: 22,
          color: 'white',
          backgroundColor: '#001220',
          paddingVertical: 10,
        }}>
        Our Popular Product
      </Text>

      <FlatList
        renderItem={RenderItem}
        data={products}
        keyExtractor={item => item.name}
        numColumns={2}
        style={{
          // width: Mixins.MAX_WIDTH,
          backgroundColor: scheme === 'dark' ? Colors.BLACK : Colors.WHITE,
        }}
      />
    </>
  );
};

export default withProfiler(PopularProduct, {name: 'PopularProduct'});
