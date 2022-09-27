import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import FeaturedHome from "../components/FeaturedHome";
import { useDispatch } from "react-redux";
import { fetchEquipment } from "../redux/EquipmentSlice";
import { fetchRequest } from "../redux/RequestSlice";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(fetchEquipment());
    dispatch(fetchRequest());
  }, []);

  const VirtualizedList = ({ children }) => {
    return (
      <FlatList
        data={[]}
        keyExtractor={() => "key"}
        renderItem={null}
        ListHeaderComponent={<>{children}</>}
      />
    );
  };

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      <View className="flex-row pb-3 items-center mt-5 mx-4 space-x-2">
        <Image
          source={{
            uri: "https://img2.pngdownload.id/20180330/dke/kisspng-garuda-indonesia-flight-airplane-airline-indonesia-5abebe40745008.1550450915224499844764.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Equipment Request
          </Text>
          <Text className="font-bold text-xl">
            HOME
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#3137f5" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Search" keyboardType="default" />
        </View>
        <AdjustmentsIcon color="#3137f5" />
      </View>
      <VirtualizedList>
        <Categories />
        <FeaturedRow
          title="On Progress"
          description="Request still on progress"
          featuredCategory="featured"
        />
        <FeaturedHome
          title="Home"
          description="Updated Request"
          featuredCategory="featured"
        />
      </VirtualizedList>
    </SafeAreaView>
  );
};

export default HomeScreen;
