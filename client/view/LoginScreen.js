import { View } from 'react-native';
import LoginForm from '../components/LoginForm';
/**
 * 
 * @navigation for navigate the screen back and front
 * @returns 
 */
const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1,}}>
      <LoginForm/>
    </View>
  );
};

export default LoginScreen;