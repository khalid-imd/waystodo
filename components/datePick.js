import { Modal, Center, Button } from "native-base";
import { useState } from "react";
import DatePicker from "@dietime/react-native-date-picker";

export default Tanggal = (props) => {
  return (
    <Center>
      <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            {props.date ? props.date.toDateString() : "Select date..."}
          </Modal.Header>
          <Modal.Body>
            <Center>
              <DatePicker
                value={props.date}
                onChange={(value) => props.setDate(value)}
                format="yyyy-mm-dd"
              />
            </Center>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  props.setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  props.setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
