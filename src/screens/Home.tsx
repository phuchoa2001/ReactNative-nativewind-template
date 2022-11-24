import { View, Text, TextInput } from "react-native";
import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <View className="flex-1 bg-black items-center justify-center p-5">
      <Text className="text-white text-lg mb-8">Login</Text>
      <TextInput className="bg-white w-full h-14 rounded-md mb-3 px-3 border-2 focus:border-green-500" />
      <TextInput className="bg-white w-full h-14 rounded-md mb-3 px-3 border-2 focus:border-green-500" />
      <Button />
    </View>
  );
}
