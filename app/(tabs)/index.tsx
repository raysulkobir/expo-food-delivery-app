import Category from '@/src/features/home/components/category';
import FeaturedRow from '@/src/features/home/components/featuredRow';
import Feather from '@expo/vector-icons/Feather';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="light" />

      {/* search section  */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-3">
        <View className="flex-row flex-1 items-center rounded-full border border-gray-300 px-3">
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Restauants" className="ml-2 flex-1" />

          <View className="flex-row items-center pl-2 space-x-1 border-l-2 border-gray-300">
            <Feather name="map-pin" size={20} color="black" />
            <Text className="text-gray-600">New Your, NYC</Text>
          </View>
        </View>

        <View className="p-2 bg-primary rounded-full ml-2 ">
          <Feather name="sliders" size={24} color="white" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingVertical: 15
         }}
      >
      {/* category  */}
        <Category/>

       {/* featured rows */}
        <View className="px-4 pb-2 mt-3">
          <FeaturedRow />
          <FeaturedRow />
          <FeaturedRow />
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})