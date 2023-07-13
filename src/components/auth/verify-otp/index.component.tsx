import AuthLayout from "@/layouts/auth/index.layout";
import React, { useRef, useState } from "react";
import ButtonComponent from "@/common/button/index.component";

const VerifyOTPComponent = () => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [otpValue, setOTPValue] = useState<Array<string>>([]);

  const handleOTPChange =
    (characterIndex: number) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = event.target.value;

      setOTPValue((prevOTP) => {
        const updatedOTP = [...prevOTP];
        updatedOTP[characterIndex] = targetValue;

        return updatedOTP;
      });

      if (targetValue && inputRefs.current[characterIndex]) {
        inputRefs.current[characterIndex + 1]?.focus();
      }
    };

  return (
    <AuthLayout title={"Enter OTP"}>
      <div className={"space-y-3"}>
        <div className={"w-full flex items-center gap-2"}>
          {Array(5)
            .fill(0)
            .map((z, index) => (
              <div
                key={index}
                className={"flex-1 p-3 border border-primary rounded-md"}
              >
                <input
                  ref={(input) => (inputRefs.current[index] = input)}
                  type={"text"}
                  maxLength={1}
                  value={otpValue[index]}
                  onChange={handleOTPChange(index)}
                  className={
                    "w-full text-lg text-center font-bold focus:outline-none"
                  }
                />
              </div>
            ))}
        </div>

        <ButtonComponent fullWidth={true} variant={"filled"}>
          Verify
        </ButtonComponent>

        <p>
          Didn&apos;t receive OTP?{" "}
          <button className={"text-primary font-medium"}>Resend OTP</button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyOTPComponent;
