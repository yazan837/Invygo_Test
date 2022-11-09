import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { data } from "../statics/data";

const Report = () => {
  const [reportData, setReportData] = useState<any>([]);
  const [age13_18, setAge13_18] = useState(0);
  const [age19_25, setAge19_25] = useState(0);
  const [age25_, setAge25] = useState(0);
  const [student, setStudent] = useState("");

  const [profession, setProfession] = useState("");
  useEffect(() => {
    calculateReportData();
  }, [reportData]);
  useEffect(() => {
    setReportData(data);
  }, []);
  const calculateReportData = () => {
    reportData?.map(
      (element: {
        Professionals: string;
        age: number;
        professionId: number;
      }) => {
        console.log("element", element);
        if (element.age <= 18 || element.age >= 13) {
          setAge13_18(age13_18 + 1);
        } else if (element.age <= 25 || element.age >= 19) {
          setAge19_25(age19_25 + 1);
        } else {
          setAge25(age25_ + 1);
        }
        if (element.Professionals != "") {
          setProfession(profession + 1);
        } else {
          setStudent(student + 1);
        }
      }
    );

    console.log(age13_18, age19_25, age25_, student, profession);
    setAge13_18(age13_18);
    setAge19_25(age19_25);
    setAge25(age25_);
    setStudent(student);
    setProfession(profession);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer1}>
        <Text style={styles.title}>Report </Text>
      </View>
      <View style={styles.titleContainer1}>
        <Text style={styles.title}>Number of People Acc. to age</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text>
          <Text style={styles.dataView}>13-18 : </Text>
          <Text style={styles.dataText}>{age13_18} </Text>
          <Text style={(styles.dataView, { marginStart: 5 })}>18-25 : </Text>
          <Text style={styles.dataText}>{age19_25} </Text>
          <Text style={styles.dataView}>25+ : </Text>
          <Text style={styles.dataText}>{age25_} </Text>
        </Text>
      </View>
      <View style={styles.titleContainer1}>
        <Text style={styles.title}>Number of people by localities</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text>
          <Text style={styles.dataView}>A : </Text>
          <Text style={styles.dataText}>5 </Text>
          <Text style={(styles.dataView, { marginStart: 10 })}>B : </Text>
          <Text style={styles.dataText}> 1 </Text>
          <Text style={styles.dataView}>C : </Text>
          <Text style={styles.dataText}> 2 </Text>
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Average Group Size : 1</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.dataView}>Profession : </Text>
        <Text style={styles.dataText}>{profession}</Text>
        <Text style={(styles.dataView, { marginStart: 10 })}>Student : </Text>
        <Text style={styles.dataText}>{student} </Text>
      </View>
    </View>
  );
};
export default Report;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  titleContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  dataText: {
    textAlign: "center",
    color: "black",

    fontWeight: "bold",
    fontSize: 16,
  },
  dataView: {
    color: "black",
    fontSize: 15,
  },
});
