import React from "react";
import { AlertModal } from ".";
import { Button } from "../../forms/Button";
import { sleep } from "../../../../utils/sleep";
import { useAlert } from "../../../../hooks/utils/useAlert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "overlay/AlertModal",
  component: AlertModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AlertModal> = (args) => <AlertModal {...args} />

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Voluptates ullam quod, modi accusamus exercitationem molestiae voluptas 
quas tempore eum alias sapiente pariatur consequatur ratione, 
assumenda dolore maiores magnam? In, cupiditate!
`;

export const SuccessModal = () => {
  const { showAlert } = useAlert();

  const handleShowAlertModal = React.useCallback(() => {
    showAlert({
      icon: "success",
      title: "Success!",
      variant: "success",
      description: lorem,
    });
  }, [showAlert]);

  return (
    <>
      <Button variantStyle="success" onClick={handleShowAlertModal}>
        Show Success Modal
      </Button>
    </>
  );
};

export const InfoModal = () => {
  const { showAlert } = useAlert();

  const handleShowAlertModal = React.useCallback(() => {
    showAlert({
      icon: "info",
      title: "Info!",
      variant: "info",
      description: lorem,
    });
  }, [showAlert]);

  return (
    <>
      <Button variantStyle="info" onClick={handleShowAlertModal}>
        Show Info Modal
      </Button>
    </>
  );
};

export const WarningModal = () => {
  const { showAlert } = useAlert();

  const handleShowAlertModal = React.useCallback(() => {
    showAlert({
      icon: "warning",
      title: "Warning!",
      variant: "warning",
      description: lorem,
    });
  }, [showAlert]);

  return (
    <>
      <Button variantStyle="warning" onClick={handleShowAlertModal}>
        Show Warning Modal
      </Button>
    </>
  );
};

export const DangerModal = () => {
  const { showAlert } = useAlert();

  const handleShowAlertModal = React.useCallback(() => {
    showAlert({
      icon: "danger",
      title: "Danger!",
      variant: "danger",
      description: lorem,
    });
  }, [showAlert]);

  return (
    <>
      <Button variantStyle="danger" onClick={handleShowAlertModal}>
        Show Danger Modal
      </Button>
    </>
  );
};

export const QuestionModal = () => {
  const { showAlert, closeAlert } = useAlert();

  const handleSubmit = React.useCallback(() => {
    closeAlert();
  }, [closeAlert]);

  const handleShowAlertModal = React.useCallback(() => {
    showAlert({
      showCancelButton: true,
      icon: "info",
      title: "Do you want to save the changes?",
      variant: "info",
      cancelButtonText: "Dont's save",
      confirmButtonText: "Save",
      onClose: () => console.log("onClose"),
      onClickCancelButton: () => console.log("onClickCancelButton"),
      onClickConfirmButton: handleSubmit,
    });
  }, [handleSubmit, showAlert]);

  return (
    <>
      <Button variantStyle="info" onClick={handleShowAlertModal}>
        Show Question Modal
      </Button>
    </>
  );
};

export const QuestionModalWitchAsyncResponse = () => {
  const { showAlert, closeAlert } = useAlert();

  const handleSubmit = React.useCallback(async () => {
    await sleep(3000);
    closeAlert();
  }, [closeAlert]);

  const handleShowAlertModal = React.useCallback(() => {
    showAlert({
      showCancelButton: true,
      icon: "danger",
      title: "Are you absolutely sure?",
      variant: "danger",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, delete account",
      description: `This action cannot be undone. This will permanently delete your account and remove your data from our servers.`,
      onClose: () => console.log("onClose"),
      onClickCancelButton: () => console.log("onClickCancelButton"),
      onClickConfirmButton: handleSubmit,
    });
  }, [handleSubmit, showAlert]);

  return (
    <>
      <Button onClick={handleShowAlertModal}>
        Show Question Modal Witch Async Response
      </Button>
    </>
  );
};
