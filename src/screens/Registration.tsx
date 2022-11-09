import React, { useCallback, useState } from "react";
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

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

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

const Registration = ({}) => {
  const [guestCountValue, setguestCountValue] = useState(0);
  const [professionValue, setprofessionValue] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateString, setDateString] = useState("Enter DOB");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const onSubmit = () => {
    showMessage({
      message: "Processing...",
      type: "info",
      autoHide: true,
      duration: 50000,
      backgroundColor: "black", // background color
      color: "red", // text color
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
    clearData();
    showMessage({
      message: "Submit Successfully...",
      type: "info",
      autoHide: true,
      duration: 500,
      backgroundColor: "black", // background color
      color: "white", // text color
    });
  };

  const clearData = () => {
    setName("");
    setAge("");
    setAddress("");
    setLocality("");
    setguestCountValue(0);
    setprofessionValue(0);
    setDateString("Enter DOB");
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
          <View style={styles.viewDataContainer}>
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
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <CalendarPicker
                    todayBackgroundColor="transparent"
                    selectedDayColor="black"
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
          <View>
            <View style={styles.radioViewContainer}>
              <Text>Profession</Text>
              <RadioForm formHorizontal={true} animation={true}>
                {professionRadio.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={professionValue === i}
                      onPress={setprofessionValue}
                      buttonInnerColor={"black"}
                      buttonOuterColor={"black"}
                      buttonSize={20}
                      buttonOuterSize={30}
                      buttonWrapStyle={{ marginLeft: 12 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={setprofessionValue}
                      labelStyle={{
                        fontSize: 17,
                        color: "black",
                      }}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
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
              <Text>Guest </Text>
              <RadioForm formHorizontal={true} animation={true}>
                {guestCountRadio.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={guestCountValue === i}
                      onPress={setguestCountValue}
                      buttonInnerColor={"black"}
                      buttonOuterColor={"black"}
                      buttonWrapStyle={{ marginLeft: 12 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={setguestCountValue}
                      labelStyle={{
                        fontSize: 17,
                        color: "black",
                      }}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
          </View>
          <View style={styles.viewDataContainer}>
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
              onPress={() => onSubmit()}
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
    height: 60,
    alignItems: "center",
    marginLeft: width * 0.02,
    marginTop: 6,
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
