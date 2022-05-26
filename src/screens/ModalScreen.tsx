import React, { useContext, useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context';

export const ModalScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Modals" />
      <Button title="Open" onPress={() => setIsVisible(true)} color={colors.primary} />
      <Modal animationType="fade" visible={isVisible} transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Modal</Text>
            <Text style={styles.modalBody}>Modal body</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} color={colors.primary} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBody: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
});
