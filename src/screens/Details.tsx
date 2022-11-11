import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Details = (props: any) => {
  const details = props.route?.params.item;

  return (
    <SafeAreaView style={styles.list__container}>
      <View style={styles.item}>
        <Text style={styles.title}>First Name :</Text>
        <Text style={styles.title}>{details?.first_name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Last Name :</Text>
        <Text style={styles.title}>{details?.last_name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>age :</Text>
        <Text style={styles.title}>{details?.age}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Localities :</Text>
        <Text style={styles.title}>{details?.localities}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Email :</Text>
        <Text style={styles.title}>{details?.email}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Gender :</Text>
        <Text style={styles.title}>{details?.gender}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Professionals :</Text>
        <Text style={styles.title}>{details?.Professionals}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "90%",
  },
  item: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
