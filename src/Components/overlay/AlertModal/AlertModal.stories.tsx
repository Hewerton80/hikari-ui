import React from "react";
import { ComponentMeta } from "@storybook/react";
import { AlertModal } from ".";
import { Button } from "../../forms/Button";
import { sleep } from "../../../utils/sleep";
import { useAlert } from "../../../hooks/utils/useAlert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/AlertModal",
  component: AlertModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof AlertModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AlertModal> = (args) => <AlertModal {...args} />

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Voluptates ullam quod, modi accusamus exercitationem molestiae voluptas 
quas tempore eum alias sapiente pariatur consequatur ratione, 
assumenda dolore maiores magnam? In, cupiditate!
`;

export const SuccessModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button variantStyle="success" onClick={handleShowModal}>
        Show Success Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        onClickConfirmButton={handleCloseModal}
        icon="success"
        title="Success!"
        variant="success"
        description={lorem}
      />
    </>
  );
};

export const InfoModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button variantStyle="info" onClick={handleShowModal}>
        Show Info Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        onClickConfirmButton={handleCloseModal}
        icon="info"
        title="Info!"
        variant="info"
        description={lorem}
      />
    </>
  );
};

export const WarningModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button variantStyle="warning" onClick={handleShowModal}>
        Show Warning Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        onClickConfirmButton={handleCloseModal}
        icon="warning"
        title="Warning!"
        variant="warning"
        description={lorem}
      />
    </>
  );
};

export const DangerModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <Button variantStyle="danger" onClick={handleShowModal}>
        Show Danger Modal
      </Button>
      <AlertModal
        show={showModal}
        onClose={handleCloseModal}
        onClickConfirmButton={handleCloseModal}
        icon="danger"
        title="Danger!"
        variant="danger"
        description={lorem}
      />
    </>
  );
};

export const QuestionModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [submiting, setSubmiting] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setShowModal(false);
  }, []);

  const handleSubmit = React.useCallback(async () => {
    setSubmiting(true);
    await sleep(3000);
    handleCloseModal();
    setSubmiting(false);
  }, [handleCloseModal]);

  return (
    <>
      <Button onClick={handleShowModal}>Show Question Modal</Button>
      <AlertModal
        show={showModal}
        showCancelButton
        onClose={handleCloseModal}
        onClickConfirmButton={handleSubmit}
        onClickCancelButton={handleCloseModal}
        isSubmiting={submiting}
        icon="warning"
        title="Are you absolutely sure?"
        variant="warning"
        cancelButtonText="Cancel"
        confirmButtonText="Yes, delete account"
        description={`This action cannot be undone. This will permanently delete your account and remove your data from our servers.`}
      />
    </>
  );
};

export const QuestionModal2 = () => {
  const { alert, closeAlert } = useAlert();
  const [submiting, setSubmiting] = React.useState(false);

  const handleSubmit = React.useCallback(async () => {
    setSubmiting(true);
    await sleep(3000);
    closeAlert();
    setSubmiting(false);
  }, [closeAlert]);

  const handleShowModal = React.useCallback(() => {
    alert({
      showCancelButton: true,
      isSubmiting: submiting,
      icon: "warning",
      title: "Are you absolutely sure?",
      variant: "warning",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, delete account",
      description: `This action cannot be undone. This will permanently delete your account and remove your data from our servers.`,
      onClose: () => console.log("onClose"),
      onClickConfirmButton: handleSubmit,
      onClickCancelButton: () => console.log("onClickCancelButton"),
    });
  }, [submiting, handleSubmit, alert]);

  // const handleCloseModal = React.useCallback(() => {
  //   setShowModal(false);
  // }, []);

  return (
    <>
      <Button onClick={handleShowModal}>Show Question Modal</Button>
      {/* <AlertModal
        show={showModal}
        showCancelButton
        onClose={handleCloseModal}
        onClickConfirmButton={handleSubmit}
        onClickCancelButton={handleCloseModal}
        isSubmiting={submiting}
        icon="warning"
        title="Are you absolutely sure?"
        variant="warning"
        cancelButtonText="Cancel"
        confirmButtonText="Yes, delete account"
        description={`This action cannot be undone. This will permanently delete your account and remove your data from our servers.`}
      /> */}
    </>
  );
};
