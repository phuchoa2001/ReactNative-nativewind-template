import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button() {
  return (
    <TouchableOpacity className="bg-green-900 h-14 w-full rounded-md justify-center items-center">
      <Text className="text-white font-bold">Entrar</Text>
    </TouchableOpacity>
  );
}
