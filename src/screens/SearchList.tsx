import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { data } from "../statics/data";

const KEYS_TO_FILTERS = ["first_name", "last_name", "email"];

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  useEffect(() => {
    // setSearchArray(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search "
        placeholderTextColor={"black"}
        keyboardType="default"
        style={styles.searchInputStyle}
        onChangeText={(val) => {
          // let store = data.filter((e) =>
          //   e?.first_name.toLowerCase().includes(val.toLowerCase())
          // );
          // setSearchArray(store);
        }}
        value={searchInput}
      />
      {searchArray.length != 0 && (
        <>
          {searchArray.map(({ item }) => {
            return (
              <View
                style={{
                  position: "absolute",
                  flex: 1,
                  height: "100%",
                  backgroundColor: "red",
                }}
              >
                {/* <Text>{item}</Text> */}
              </View>
            );
          })}
        </>
      )}
      <ScrollView style={{ flexGrow: 1, width: "95%", padding: 10 }}>
        {searchArray.length != 0 &&
          data?.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.emailSubject} numberOfLines={1}>
                  {item.first_name}
                </Text>
                <Text style={styles.emailSubject} numberOfLines={1}>
                  {item.last_name}
                </Text>
                <Text style={styles.emailSubject} numberOfLines={1}>
                  {item.email}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
    backgroundColor: "white",
    alignItems: "center",
  },
  emailItem: {
    width: 350,
    alignSelf: "center",
    backgroundColor: "#fff",
    fontSize: 12,
    height: "auto",
    // paddingStart: 10,
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  emailSubject: {
    color: "rgba(0,0,0,0.5)",
  },
  searchInputStyle: {
    borderWidth: 0.5,
    width: 300,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#f2f2f2",
    marginTop: 10,
    textAlignVertical: "center",
    fontSize: 14,
    paddingStart: 50,
    textAlign: "left",
    alignSelf: "center",
    justifyContent: "center",
  },
});
