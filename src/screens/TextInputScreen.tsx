import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) =>
    setForm({
      ...form,
      [field]: value,
    });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={styles.textInput}
              placeholder="Nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(value: string) => onChange(value, 'name')}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value: string) => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <Text style={styles.formContainer}>{JSON.stringify(form, null, 5)}</Text>
            <Text style={styles.formContainer}>{JSON.stringify(form, null, 5)}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Teléfono"
              onChangeText={(value: string) => onChange(value, 'phone')}
              keyboardType="phone-pad"
              keyboardAppearance="dark"
            />
            <Text style={styles.formContainer}>{JSON.stringify(form, null, 5)}</Text>
            <View style={{ height: 100 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  formContainer: {
    fontSize: 25,
    marginTop: 20,
  },
});
