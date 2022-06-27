import {useContext} from 'react';
import {View, StyleSheet, ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {Button} from 'react-native-elements';
import style from '../context/style';

const HomeScreen = () => {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>                    
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;

