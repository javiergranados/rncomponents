import React, { useContext } from 'react';
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
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context';
import { useForm } from '../hooks/useForm';

export const TextInputScreen = () => {
  const {
    theme: { dark, colors, dividerColor },
  } = useContext(ThemeContext);

  const { form, isSubscribed, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={{ ...styles.textInput, borderColor: colors.text, color: colors.text }}
              placeholder="Nombre"
              placeholderTextColor={dividerColor}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(value: string) => onChange(value, 'name')}
              keyboardAppearance={dark ? 'dark' : 'light'}
            />
            <TextInput
              style={{ ...styles.textInput, borderColor: colors.text, color: colors.text }}
              placeholder="Email"
              placeholderTextColor={dividerColor}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value: string) => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance={dark ? 'dark' : 'light'}
            />
            <TextInput
              style={{ ...styles.textInput, borderColor: colors.text, color: colors.text }}
              placeholder="Teléfono"
              placeholderTextColor={dividerColor}
              onChangeText={(value: string) => onChange(value, 'phone')}
              keyboardType="phone-pad"
              keyboardAppearance={dark ? 'dark' : 'light'}
            />
            <View style={styles.switchRow}>
              <Text style={styles.switchText}>isSubscribed</Text>
              <CustomSwitch initialValue={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
            </View>
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
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
