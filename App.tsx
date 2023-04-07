import { View, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1 }} className="w-100">
				 <Home />
			</View>
		</SafeAreaView>
	);
}
