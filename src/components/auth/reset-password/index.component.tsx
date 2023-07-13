import AuthLayout from "@/layouts/auth/index.layout";
import FormInputComponent from "@/common/form-input/index.component";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import ButtonComponent from "@/common/button/index.component";

const IndexComponent = () => {
  return (
    <AuthLayout title={"Reset Password"}>
      <div className={"space-y-3"}>
        <FormInputComponent
          type={"password"}
          label={"Old Password"}
          Icon={<LockClosedIcon className={"w-5 h-5 text-gray-dark"} />}
        />

        <FormInputComponent
          type={"password"}
          label={"New Password"}
          Icon={<LockClosedIcon className={"w-5 h-5 text-gray-dark"} />}
        />

        <FormInputComponent
          type={"password"}
          label={"Confirm Password"}
          Icon={<LockClosedIcon className={"w-5 h-5 text-gray-dark"} />}
        />

        <ButtonComponent fullWidth={true} variant={"filled"}>
          Reset Password
        </ButtonComponent>
      </div>
    </AuthLayout>
  );
};

export default IndexComponent;
