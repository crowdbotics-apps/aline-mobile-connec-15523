import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text style={styles.Text_3}>
        Hello! There are two custom connectors in this application.
      </Text>
      <Button
        title="Ok"
        style={styles.Button_5}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: {},
  Button_5: { width: 100, height: "0%", alignSelf: "center" },
  View_1: {},
  Text_3: { fontSize: 15, lineHeight: 20 },
  Button_5: { width: 100, height: "0%", alignSelf: "center" }
})
