import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const List: any = (props: {
  searchPhrase: string;
  data: readonly any[] | null | undefined;
}) => {
  type Nav = {
    navigate: (value: string, {}) => void;
  };
  const navigation = useNavigation<Nav>();
  const Item = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("Details", { item });
      }}
    >
      <Text style={styles.title}>First Name : {item.first_name}</Text>
      <Text style={styles.title}>localities : {item.localities}</Text>
      {/* <Text style={styles.title}>{item.name.email}</Text> */}
    </TouchableOpacity>
  );
  const renderItem = ({ item }: any) => {
    if (props.searchPhrase === "") {
      return <Item item={item} />;
    } else if (
      item?.first_name
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item item={item} />;
    } else if (
      item?.localities
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item item={item} />;
    } else {
      return <></>;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    // flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
