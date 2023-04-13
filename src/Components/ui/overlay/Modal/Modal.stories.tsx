import React from "react";
import { ComponentMeta } from "@storybook/react";
import {
  Modal,
  // ModalBody, ModalFooter, ModalTitle
} from ".";
import { Button } from "../../../../Button";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Overlay/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Modal>;

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Voluptates ullam quod, modi accusamus exercitationem molestiae voluptas 
quas tempore eum alias sapiente pariatur consequatur ratione, 
assumenda dolore maiores magnam? In, cupiditate!
`;

export const SmallModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button onClick={handleShowModal} variantStyle="primary">
        Show Small Modal
      </Button>
      <Modal show={showModal} onClose={handleCloseModal} size="sm">
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.Body>
          {lorem}
          {lorem}
          {lorem}
          {lorem}
          {lorem}
          {lorem}
          {lorem}
        </Modal.Body>

        <Modal.Footer>
          <Button variantStyle="primary-outlined" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variantStyle="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const MediumModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button onClick={handleShowModal} variantStyle="primary">
        Show Medium Modal
      </Button>
      <Modal show={showModal} onClose={handleCloseModal} size="md">
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.Body>{lorem}</Modal.Body>

        <Modal.Footer>
          <Button variantStyle="primary-outlined" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variantStyle="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const LargeModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button onClick={handleShowModal} variantStyle="primary">
        Show Large Modal
      </Button>
      <Modal show={showModal} onClose={handleCloseModal} size="lg">
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.Body>{lorem}</Modal.Body>

        <Modal.Footer>
          <Button variantStyle="primary-outlined" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variantStyle="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
