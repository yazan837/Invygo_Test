import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

import FlashMessage, { showMessage } from "react-native-flash-message";

import { register } from "../redux/features/users/thunks";
import { useAppDispatch } from "../redux/store";

const { height, width } = Dimensions.get("window");

const guestCountRadio = [
  { label: "0  ", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
];
const professionRadio = [
  { label: "Employed", value: 0 },
  { label: "Student ", value: 1 },
];
interface Props {
  onSubmitTest?: () => void;
}
const Registration = ({ onSubmitTest }: Props) => {
  type Nav = {
    navigate: (value: string, {}) => void;
  };
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Nav>();

  const [guestCountValue, setGuestCountValue] = useState<number>(0);
  const [professionValue, setProfessionValue] = useState<number>(0);
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);
  const [dateString, setDateString] = useState<string>("Date of birth");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const onSubmit = async () => {
    showMessage({
      message: "Processing...",
      type: "info",
      autoHide: true,
      duration: 50000,
      backgroundColor: "black",
      color: "black",
    });

    let obj = {
      name: name,
      age: age,
      dob: dateString,
      Profession: professionValue == 0 ? "Employee" : "Student",
      Locality: locality,
      NoOfGuest: guestCountValue,
      Address: address,
    };
    console.log("obj ", obj);
    const res = await dispatch(register());

    if (res.meta.requestStatus == "fulfilled") {
      navigation.navigate("Search", {});
    }
    if (res.meta.requestStatus == "rejected") {
      showMessage({
        message: "something went wrong , please try again",
        type: "info",
        autoHide: true,
        duration: 500,
        backgroundColor: "black",
        color: "white",
      });
    }
    clearData();
  };

  const clearData = () => {
    setName("");
    setAge("");
    setAddress("");
    setLocality("");
    setGuestCountValue(0);
    setProfessionValue(0);
    setDateString("Date of birth");
  };

  return (
    <View>
      <FlashMessage position="top" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewDataContainer}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={"black"}
              keyboardType="default"
              style={[styles.textDataContainer]}
              onChangeText={(value) => setName(value)}
              value={name}
            />
          </View>
          <View style={styles.viewDataContainer}>
            <TextInput
              placeholder="Age"
              placeholderTextColor={"black"}
              keyboardType="numeric"
              style={[styles.textDataContainer]}
              onChangeText={(value) => setAge(value)}
              value={age}
            />
          </View>
          <View style={[styles.viewDataContainer, { zIndex: 1 }]}>
            <TouchableOpacity
              onPress={showDatePicker}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.textDataContainer]}>{dateString}</Text>
              {isDatePickerVisible && (
                <View
                  style={{
                    backgroundColor: "grey",
                    position: "absolute",
                    padding: 6,
                  }}
                >
                  <CalendarPicker
                    todayBackgroundColor="transparent"
                    selectedDayColor="red"
                    selectedDayTextColor="#ffffff"
                    onDateChange={(date) => {
                      setDatePickerVisibility(false);
                      let dateString = date.toString();
                      setDateString(dateString);
                    }}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.viewDataContainer}>
            <TextInput
              placeholder="Locality"
              placeholderTextColor={"black"}
              keyboardType="default"
              style={[styles.textDataContainer]}
              onChangeText={(value) => setLocality(value)}
              value={locality}
            />
          </View>
          <View>
            <View style={styles.radioViewContainer}>
              <Text>Profession : </Text>
              {professionRadio.map((obj, i) => (
                <View
                  key={i}
                  style={[styles.RadioButtonContainer, { width: "40%" }]}
                >
                  <TouchableOpacity
                    onPress={() => setProfessionValue(obj.value)}
                    style={[
                      styles.RadioButton,
                      {
                        backgroundColor:
                          professionValue == obj.value ? "black" : "white",
                      },
                    ]}
                  />
                  <Text>{obj.label}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.radioViewContainer}>
            <Text>Guest Number</Text>
            {guestCountRadio.map((obj, i) => (
              <View
                key={i}
                style={[styles.RadioButtonContainer, { width: "25%" }]}
              >
                <TouchableOpacity
                  onPress={() => setGuestCountValue(obj.value)}
                  style={[
                    styles.RadioButton,
                    {
                      backgroundColor:
                        guestCountValue == obj.value ? "black" : "white",
                    },
                  ]}
                />
                <Text>{obj.label}</Text>
              </View>
            ))}
          </View>
          <View style={[styles.viewDataContainer, { height: 150 }]}>
            <TextInput
              placeholder="Address"
              placeholderTextColor={"black"}
              keyboardType="default"
              style={[styles.textDataContainer]}
              onChangeText={(value) => setAddress(value)}
              value={address}
              multiline={true}
            />
          </View>
          <View style={styles.buttonViewContainer}>
            <TouchableOpacity
              onPress={clearData}
              style={styles.buttonTouchable}
            >
              <Text style={{ fontSize: 17 }}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonViewContainer}>
            <TouchableOpacity
              testID="submit-test"
              onPress={() => {
                onSubmit();
                onSubmitTest && onSubmitTest();
              }}
              style={styles.buttonTouchable}
            >
              <Text style={{ fontSize: 17 }}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  viewDataContainer: {
    height: height * 0.05,
    width: width * 0.9,
    marginTop: height * 0.05,
    borderRadius: 15,
    backgroundColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderColor: "grey",
  },
  textDataContainer: {
    fontSize: 16,
    alignSelf: "flex-start",
    color: "black",
  },
  buttonViewContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  radioViewContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  RadioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  RadioButton: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
  },
  buttonTouchable: {
    height: 55,
    width: 325,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
});
export default Registration;
