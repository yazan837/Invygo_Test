import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import { data, dataType } from "../statics/data";
const Report = () => {
  const [reportData, setReportData] = useState<dataType[]>([]);
  const [age13_18, setAge13_18] = useState<number>(0);
  const [age19_25, setAge19_25] = useState<number>(0);
  const [age25_, setAge25] = useState<number>(0);
  const [guestNumber, setGuestNumber] = useState<number>(0);
  const [hostNumber, setHostNumber] = useState<number>(0);
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
    var HostCount = 0;
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
      } else {
        HostCount = HostCount + 1;
      }
      if (element.localities in count) {
        count[element.localities] = count[element.localities] + 1;
      } else {
        count[element.localities] = 1;
      }
      setGuestNumber(GuestCount);
      setHostNumber(HostCount);
      setLocalites(count);
    });

    setAge13_18(a);
    setAge19_25(b);
    setAge25(c);
    setStudent(st);
    setProfession(pr);
  };
  const chartConfig = {
    backgroundGradientFrom: "grey",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    decimalPlaces: 0,
  };
  const AgeData = [
    {
      name: "in 13-18 age range",
      number: age13_18,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "in 8-25 age range ",
      number: age19_25,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "in 25+ age range ",
      number: age25_,
      color: "#ffa726",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const GuestsData = [
    {
      name: "Guest",
      number: guestNumber,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Host",
      number: hostNumber,
      color: "#ffa726",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const ProfessionData = [
    {
      name: "Profession",
      number: profession,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Students",
      number: student,
      color: "#ffa726",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer1}>
        <Text style={styles.title}>Number of people in a given age range</Text>
      </View>
      <PieChart
        data={AgeData}
        width={400}
        height={220}
        chartConfig={chartConfig}
        accessor="number"
        backgroundColor="transparent"
        paddingLeft="0"
        absolute
      />

      <View style={styles.titleContainer1}>
        <Text style={styles.title}>Number of people by localities</Text>
      </View>
      <ScrollView horizontal>
        <BarChart
          data={{
            labels: Object?.keys(localites),
            datasets: [
              {
                data: Object?.values(localites),
              },
            ],
          }}
          width={2900}
          height={250}
          chartConfig={chartConfig}
          verticalLabelRotation={10}
          yAxisLabel={""}
          yAxisSuffix={""}
        />
      </ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Average group size of people attending the event
        </Text>
      </View>
      <PieChart
        data={GuestsData}
        width={400}
        height={220}
        chartConfig={chartConfig}
        accessor="number"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Average Professionals & students count</Text>
      </View>
      <PieChart
        data={ProfessionData}
        width={400}
        height={220}
        chartConfig={chartConfig}
        accessor="number"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </ScrollView>
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
