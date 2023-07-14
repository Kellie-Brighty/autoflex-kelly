import AuthLayout from "@/layouts/auth/index.layout";
import FormInputComponent from "@/common/form-input/index.component";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ButtonComponent from "@/common/button/index.component";
import { useState } from "react";
import authService from "../../../../services/auth.service";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { SignIn } = authService;

  const SignInAction = async () => {
    setLoading(true);
    if (email === "" || password === "") {
      setErrors("No field should be empy");
      setLoading(false);
    } else {
      try {
        const res = await SignIn(email, password);
        console.log(res.data);
        setLoading(false);
      } catch (err: any) {
        console.log(err.response.data.message);
        setErrors(err.response.data.message);
        setLoading(false);
      }
    }
  };

  return (
    <AuthLayout title={"Sign In"}>
      {errors && <p className={`text-red-500 text-[14px] mb-5`}>{errors}</p>}
      <div className={"space-y-3"}>
        <FormInputComponent
          label={"Email or Phone Number"}
          Icon={<EnvelopeIcon className={"w-5 h-5 text-gray-dark"} />}
          value={email}
          onChange={(e) => {
            setErrors(null);
            setEmail(e.target.value);
          }}
        />

        <FormInputComponent
          type={"password"}
          label={"Password"}
          Icon={<LockClosedIcon className={"w-5 h-5 text-gray-dark"} />}
          helper={
            <Link href={"/auth/forgot-password"} className={"block text-right"}>
              Forgot your password?
            </Link>
          }
          value={password}
          onChange={(e) => {
            setErrors(null);
            setPassword(e.target.value);
          }}
        />

        <ButtonComponent
          fullWidth={true}
          variant={"filled"}
          onClick={SignInAction}
        >
          {loading ? "Signing in..." : "Sign In"}
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
