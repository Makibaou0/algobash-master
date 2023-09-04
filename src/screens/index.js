import React, {useEffect, useState, useCallback} from 'react';
import {Box} from 'native-base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GETAPI} from '../services/ConfigApi';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Sorting from '../components/Sorting';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import {
  sortDataByName,
  sortDataByPriceAsc,
  sortDataByPriceDesc,
} from '../utils/sortingUtils';

const Index = () => {
  const [DATA, setDATA] = useState([]);
  const [isLoader, setisLoader] = useState(true);
  const [cart, setCart] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [sort, setSort] = useState('Default');
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const inset = useSafeAreaInsets();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (sort === 'LowestPrice') {
      sortDataByPriceAsc(DATA, setDATA, setIsSorting);
    } else if (sort === 'HighestPrice') {
      sortDataByPriceDesc(DATA, setDATA, setIsSorting);
    } else if (sort === 'Name') {
      sortDataByName(DATA, setDATA, setIsSorting);
    }
  }, [sort]);

  const getData = async () => {
    const data = await GETAPI({
      key: 'products',
    });

    setDATA(data.products);
    setisLoader(false);
  };

  const handleChange = (itemValue, itemIndex) => {
    setSort(itemValue);
    setIsSorting(true);
  };

  const delayedIncreaseQuantity = useCallback(
    item => {
      if (!buttonDisabled) {
        setButtonDisabled(true);
        const quantity = cart[item.id] || 0;
        const stock = item.stock;
        if (quantity < stock) {
          setCart(prevCart => ({...prevCart, [item.id]: quantity + 1}));
          setCartItemCount(prevCount => prevCount + 1);
        }
        setTimeout(() => {
          setButtonDisabled(false);
        }, 500);
      }
      setTotalPrice(totalPrice + item.price * 15000);
    },
    [cart, buttonDisabled],
  );

  const delayedDecreaseQuantity = useCallback(
    item => {
      if (!buttonDisabled) {
        setButtonDisabled(true);
        const quantity = cart[item.id] || 0;
        if (quantity > 0) {
          setCart(prevCart => ({...prevCart, [item.id]: quantity - 1}));
          setCartItemCount(prevCount => prevCount - 1); // Kurangi ini
        }
        setTimeout(() => {
          setButtonDisabled(false);
        }, 500);
      }
      setTotalPrice(totalPrice - item.price * 15000);
    },
    [cart, buttonDisabled],
  );

  const handleReset = () => {
    setIsModalVisible(false);
    setCart({});
    setTotalPrice(0);
    setCartItemCount(0);
  };
  return (
    <Box flex={1}>
      {/* Header */}
      <Header inset={inset} />
      {/* Loader */}
      {isLoader == true ? (
        <Loader />
      ) : (
        <Box flex={1}>
          {/* Sorting */}
          <Sorting sort={sort} handleChange={handleChange} />

          {/* Sorting Spinner */}
          {isSorting ? (
            <Loader />
          ) : (
            <Box flex={1}>
              {/* Product List */}
              <ProductList
                DATA={DATA}
                delayedDecreaseQuantity={delayedDecreaseQuantity}
                delayedIncreaseQuantity={delayedIncreaseQuantity}
                cart={cart}
                totalPrice={totalPrice}
              />
            </Box>
          )}

          {/* Footer */}
          <Footer
            inset={inset}
            totalPrice={totalPrice}
            setIsModalVisible={setIsModalVisible}
            handleReset={handleReset}
          />
        </Box>
      )}

      {/* Popup */}
      <Popup
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        cartItemCount={cartItemCount}
        totalPrice={totalPrice}
        handleReset={handleReset}
      />
    </Box>
  );
};

export default Index;
