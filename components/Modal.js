import React from "react";
import { View } from "react-native";
import { Portal, Modal as PaperModal, Colors } from "react-native-paper";

function Modal(props) {
  return (
    <Portal>
      <PaperModal
        {...props}
        visible={props.visible}
        onDismiss={props.onDismiss}
        contentContainerStyle={{
          padding: 20,
        }}
      >
        {props.children}
      </PaperModal>
    </Portal>
  );
}

export default Modal;
