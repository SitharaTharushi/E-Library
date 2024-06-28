import { View, Text } from "react-native";
import React from "react";

const Categories = () => {
  const categories = ["Horrors", "Sci Fi", "Romance", "Business", "ICT"];

  return (
    <View>
      <Text className="text-lg text-black font-regular mb-3">Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row flex-wrap">
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              className="px-4 py-2 bg-gray-200 rounded-full mr-2 mb-2"
            >
              <Text className="text-sm">{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

