import React, {useEffect, useState} from 'react';
import {withProfiler} from '@sentry/react-native';
import {useQuery} from '@apollo/client';

import {customUseQuery} from '@app/hooks/customApolloHooks';
import {GET_BANNER_SLIDER} from '@app/services/queries/banner';

import {
  GET_PRODUCTS_BY_BRAND,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_POPULAR_PRODUCT,
} from '@app/_modules/popular_product/services/schema';
import Views from '@app/_modules/popular_product/_view';
import {modules} from '@root/swift.config';

const PopularProduct = ({props}) => {
  const get_products = () => useQuery(GET_POPULAR_PRODUCT);
  if (!modules.popular_product.enable) {
    return null;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [noMoreData, setNoMoreData] = useState(false);
  const [query, setQuery] = useState(GET_PRODUCTS_BY_CATEGORIES);
  const [queryVariables, setQueryVariables] = useState(null);
  const [bannerSlider, setBannerSlider] = useState([]);
  const {data: bannerSliderData} = customUseQuery(GET_BANNER_SLIDER);

  /**
   * ----------------------------------------- *
   * @dependency [route]
   * @summary set initialize data
   * ----------------------------------------- *
   */

  /**
   * ----------------------------------------- *
   * @dependency [bannerSliderData]
   * @summary set banner slider from remote
   * ----------------------------------------- *
   */
  useEffect(() => {
    if (bannerSliderData) {
      setBannerSlider(bannerSliderData.getHomepageSlider.images);
    }
  }, [bannerSliderData]);

  const {loading, error, data} = get_products();
  const controllerProps = {
    get_products,
    loading,
    error,
    data,
  };

  /**
   * ----------------------------------------- *
   * @function onNavigateToProductDetail
   * @summary navigate to product detail
   * ----------------------------------------- *
   */
  const onNavigateToProductDetail = productUrlKey => {
    // navigateToProductDetail(navigation, productUrlKey);
  };

  return <Views {...props} {...controllerProps} />;
};

export default withProfiler(PopularProduct, {name: 'PopularProduct'});
