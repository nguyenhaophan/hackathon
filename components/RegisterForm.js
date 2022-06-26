import React from 'react';
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native';


const RegisterForm = () => {

  return (
    <ScrollView>
      <View>
        <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Username"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.inputField}
            errorMessage={errors.username && 'Username is required.'}
            errorStyle={styles.errorsField}
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.inputField}
            errorMessage={errors.password && 'Password is required.'}
            errorStyle={styles.errorsField}
          />
        )}
        name="password"
      />
     
      <View>
        <Button
          title="Login"
          onPress={handleSubmit(onSubmit)}
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={styles.buttonField}
          containerStyle={{
            alignItems: 'center',
          }}
        />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not a User? </Text>
        <TouchableOpacity>
          <Text style={styles.registerButton}>Register here</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
  },
  inputField: {
    width: 250,
    height: 30,
    backgroundColor: 'rgba(96, 162, 23, 0.3)',
    borderRadius: 24,
    paddingHorizontal: 15,
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.42)',
    marginVertical: 9,
  },
  button: {
    width: '100%',
    backgroundColor: '#5F9A3B',
    borderRadius: 24,
    marginVertical: 9,
    paddingVertical: 11,
  },
  buttonTextField: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  registerTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 15,
    flexDirection: 'row',
  },
  registerText: {
    color: '#bd157a',
    fontSize: 15,
  },
  registerButton: {
    color: '#700d49',
    fontSize: 15,
    fontWeight: '500',
  },
});
export default RegisterForm;