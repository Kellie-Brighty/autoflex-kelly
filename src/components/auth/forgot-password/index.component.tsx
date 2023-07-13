import AuthLayout from "@/layouts/auth/index.layout";
import FormInputComponent from "@/common/form-input/index.component";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import ButtonComponent from "@/common/button/index.component";

const IndexComponent = () => {
  return (
    <AuthLayout title={"Forgot Password"}>
      <div className={"space-y-3"}>
        <FormInputComponent
          label={"Email or Phone Number"}
          Icon={<EnvelopeIcon className={"w-5 h-5 text-gray-dark"} />}
        />

        <ButtonComponent fullWidth={true} variant={"filled"}>
          Send OTP
        </ButtonComponent>

        <p>
          Remember your password?{" "}
          <button className={"text-primary font-medium"}>Sign In</button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default IndexComponent;
