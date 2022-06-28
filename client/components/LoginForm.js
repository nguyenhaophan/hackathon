import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Text, Button } from "react-native-elements";
import { client } from "../utils/api";

/**
 * it contains login form and action that takes
 * @navigation for navigate the screen back and front
 */
const LoginForm = () => {
  //const loginWithForm = useFormLogin(); // user auth fuction expect JSON
  /**
   * login form init validation
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  /**
   * loginWithForm is a useFormLogin function components that authondicate the user
   * @param {{username: string: password: string}} data send to sever.
   */
  const onSubmit = async (data) => {
    try {
      const res = await client.post('http://localhost:5000/api/v1/users/login', {
        username: data.username,
        password: data.password
      })
      console.log(res.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
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
              errorMessage={errors.username && "Username is required."}
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
              errorMessage={errors.password && "Password is required."}
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
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={styles.buttonField}
            containerStyle={{
              alignItems: "center",
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
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1E4C58",
  },
  container: {
    top: "20%",
    margin: 40,
    alignItems: "center",
  },
  inputField: {
    width: 100,
    height: 40,
    backgroundColor: "#F5A043",
    borderRadius: 24,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.42)",
  },
  errorsField: {
    color: "red",
    marginHorizontal: 15,
    marginTop: 1,
  },
  buttonField: {
    marginTop: 5,
    backgroundColor: "#1E4C58",
    borderRadius: 5,
    borderWidth: 2,
    width: 150,
    height: 50,
    borderColor: "white",
    borderRadius: 30,
  },
  registerContainer: {
    top: 15,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 15,
    flexDirection: "row",
  },
  registerText: {
    color: "#bd157a",
    fontSize: 15,
  },
  registerButton: {
    color: "#eb2a9e",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default LoginForm;
