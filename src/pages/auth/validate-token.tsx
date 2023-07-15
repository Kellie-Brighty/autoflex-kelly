import VerifySubscriberEmailComponent from "@/components/subscriber/verify-email/index.component";

const ValidateToken = () => {
  return (
    <VerifySubscriberEmailComponent
      title="Validate your token"
      subTitle="Thank you, please check your mail for the validation instructions"
      buttonText="Continue to mail"
      linkToGo="https://mail.google.com/"
      resendText="Didn't get any mail?"
      resendAction={() => null}
    />
  );
};

export default ValidateToken;
