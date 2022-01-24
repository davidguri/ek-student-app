import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  TextInput,
  StatusBar,
} from "react-native";

import Colors from "../constants/colors";

const AddGoalModal = (props) => {
  const [text, onChangeText] = React.useState("");

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
          </View>

          <View style={styles.body}>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={onChangeText}
              placeholderTextColor="#777"
              placeholder="Title"
            />
            <TouchableOpacity onPress={props.onSubmit} style={styles.submitContainer}>
                <Text style={styles.submitButton}>{props.title}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    borderWidth: 4,
    borderTopColor: Colors.primary,
    height: "100%",
    alignItems: "center",
    padding: 7.5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    width: "90%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    paddingVertical: 18,
  },

  buttonCancelText: {
    color: "rgb(255, 69, 58)",
    fontSize: 21,
    fontWeight: "700",
    padding: 12.25,
    textAlign: "center",
  },

  button: {
    width: "95%",
    backgroundColor: Colors.redOpacity,
    borderRadius: 22,
    borderColor: Colors.red,
    borderWidth: 4,
    margin: 10,
  },

  body: {
    width: "100%",
  },

  footer: {
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    borderRadius: 22,
    borderWidth: 4,
    borderColor: Colors.primary,
    padding: 17,
    margin: 10,
    color: "white",
  },

  submitContainer: {
    width: "95%",
    backgroundColor: Colors.opacity,
    borderRadius: 22,
    borderColor: Colors.primary,
    borderWidth: 4,
    margin: 10,
  },

  submitButton: {
    fontSize: 21,
    fontWeight: "700",
    padding: 11.5,
    textAlign: "center",
    color: Colors.primary,
  },
});

export default AddGoalModal;
