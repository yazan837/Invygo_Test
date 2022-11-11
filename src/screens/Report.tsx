import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { data, dataType } from "../statics/data";

const Report = () => {
  const [reportData, setReportData] = useState<dataType[]>([]);
  const [age13_18, setAge13_18] = useState<number>(0);
  const [age19_25, setAge19_25] = useState<number>(0);
  const [age25_, setAge25] = useState<number>(0);
  const [guestNumber, setGuestNumber] = useState<number>(0);
  const [student, setStudent] = useState<string | number>("");
  const [localites, setLocalites] = useState<{ [key: string]: any }>({});

  const [profession, setProfession] = useState<string | number>("");
  useEffect(() => {
    calculateReportData();
  }, [reportData]);
  useEffect(() => {
    setReportData(data);
  }, []);
  const calculateReportData = () => {
    let a = 0;
    let b = 0;
    let c = 0;
    let st = 0;
    let pr = 0;
    let count = {};
    let GuestCount = 0;
    reportData?.map((element: any) => {
      if (element.age <= 18 && element.age >= 13) {
        a = a + 1;
      } else if (element.age <= 25 && element.age >= 19) {
        b = b + 1;
      } else {
        c = c + 1;
      }
      if (element.Professionals != "") {
        pr = pr + 1;
      } else {
        st = st + 1;
      }
      if (element.guest) {
        GuestCount = GuestCount + 1;
      }
      if (element.localities in count) {
        count[element.localities] = count[element.localities] + 1;
      } else {
        count[element.localities] = 1;
      }
      setGuestNumber(GuestCount);
      setLocalites(count);
    });

    setAge13_18(a);
    setAge19_25(b);
    setAge25(c);
    setStudent(st);
    setProfession(pr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer1}>
        <Text style={styles.title}>Number of people in a given age range</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.dataView}>13-18 : </Text>
        <Text style={styles.dataText}>{age13_18} </Text>
        <Text style={styles.dataView}>18-25 : </Text>
        <Text style={styles.dataText}>{age19_25} </Text>
        <Text style={styles.dataView}>25+ : </Text>
        <Text style={styles.dataText}>{age25_} </Text>
      </View>
      <View style={styles.titleContainer1}>
        <Text style={styles.title}>Number of people by localities</Text>
      </View>
      <ScrollView
        style={{ height: "25%" }}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(localites).map(([key, value], i) => {
          return (
            <View key={i} style={[styles.titleContainer, { borderWidth: 1 }]}>
              <Text>{key}</Text>
              <Text>{value}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Average group size of people attending the event
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.dataView}>Guests : </Text>
        <Text style={styles.dataText}>{guestNumber}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Average Professionals & students count</Text>
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
    justifyContent: "space-around",
    padding: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
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
