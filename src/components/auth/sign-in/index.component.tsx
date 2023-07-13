import AuthLayout from "@/layouts/auth/index.layout";
import FormInputComponent from "@/common/form-input/index.component";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ButtonComponent from "@/common/button/index.component";

const SignInComponent = () => {
  return (
    <AuthLayout title={"Sign In"}>
      <div className={"space-y-3"}>
        <FormInputComponent
          label={"Email or Phone Number"}
          Icon={<EnvelopeIcon className={"w-5 h-5 text-gray-dark"} />}
        />

        <FormInputComponent
          type={"password"}
          label={"Password"}
          Icon={<LockClosedIcon className={"w-5 h-5 text-gray-dark"} />}
          helper={
            <Link href={"/"} className={"block text-right"}>
              Forgot your password?
            </Link>
          }
        />

        <ButtonComponent fullWidth={true} variant={"filled"}>
          Sign In
        </ButtonComponent>

        <p>
          New to AutoFlex?{" "}
          <button className={"text-primary font-medium"}>Get Estimate</button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignInComponent;
