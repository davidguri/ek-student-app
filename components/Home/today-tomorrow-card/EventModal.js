import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../../constants/colors";

const EventModal = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      backgroundColor={"transparent"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationInTiming={450}
      animationOutTiming={350}
    >
      <View style={styles.main}>
        {/* Background color of the modal should be determined by the color of the event. */}
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>Event Title</Text>
            <Text style={styles.headerSubtitle}>Type of event</Text>
          </View>
        </View>
        <View style={styles.mainContent}>
          <View style={[styles.section, styles.column]}>
            <View style={[styles.section, styles.row, { paddingBottom: 0 }]}>
              <Text style={styles.timeText}>Start of event:</Text>
              <Text style={styles.time}>HH:MM</Text>
            </View>
            <View style={[styles.section, styles.row, { paddingTop: 0 }]}>
              <Text style={styles.timeText}>End of event:</Text>
              <Text style={styles.time}>HH:MM</Text>
            </View>
          </View>
          <View style={[styles.section, styles.column]}>
            <Text style={styles.description}>Event Description:</Text>
            <Text style={styles.descriptionBody}>
              Lorem Ipsum Dolor Sit Amet
            </Text>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  textContainer: {
    flexDirection: "column",
  },

  headerTitle: {
    fontSize: 26,
    color: "black",
    fontWeight: "700",
  },

  headerSubtitle: {
    fontSize: 14,
    color: "black",
  },

  section: {
    paddingTop: 7,
    paddingBottom: 5,
  },

  column: {
    flexDirection: "column",
  },

  row: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  timeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },

  time: {
    fontSize: 19,
    fontWeight: "600",
    color: "black",
  },

  description: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },

  descriptionBody: {
    paddingTop: 4,
  },
});

export default EventModal;
