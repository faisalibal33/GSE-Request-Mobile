import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  CalendarIcon,
  IdentificationIcon,
  TagIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import moment from "moment";

const RequestScreen = () => {
  const navigation = useNavigation();
  const {
    params: { item },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  //date
  const day = moment(new Date(item?.createdAt)).format("DD MMM YYYY");
  const date = new Date(item?.createdAt);
  const hour = date.getHours().toLocaleString().padStart(2, "0");
  const min = date.getMinutes().toLocaleString().padStart(2, "0");
  const sec = date.getSeconds().toLocaleString().padStart(2, "0");
  const viewDate = day + ", " + hour + ":" + min + ":" + sec;

  const dateClose = new Date(item?.updatedAt);
  const dayClose = moment(new Date(item?.updatedAt)).format("DD MMM YYYY");
  const hourClose = dateClose.getHours().toLocaleString().padStart(2, "0");
  const minuteClose = dateClose.getMinutes().toLocaleString().padStart(2, "0");
  const secClose = dateClose.getSeconds().toLocaleString().padStart(2, "0");
  const viewDateClose =
    dayClose + ", " + hourClose + ":" + minuteClose + ":" + secClose;
  //dateClose

  return (
    <ScrollView className="flex-1">
      <View className="relative">
        <Image
          source={{
            uri: item.photos,
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{item.equipment}</Text>
          <View>
            <Text className="text-base bg-blue-400 text-white p-1 w-16 font-bold rounded-md ">
              {item._id.toString().padStart(6, "0")}
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <IdentificationIcon size={20} color="gray" />
            <Text className="text-xs text-gray-500">
              {item.requestBy} / {item.idNumber} / {item.unit}
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <CalendarIcon size={20} color="gray" />
            <Text className="text-xs text-gray-500">{viewDate}</Text>
          </View>
          <View
            className="flex-row gap-2 items-center"
            style={{ maxWidth: "95%" }}
          >
            <TagIcon size={20} color="gray" />
            <Text className="text-xs text-gray-500">{item.remark}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RequestScreen;
