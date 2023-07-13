import ButtonComponent from "@/common/button/index.component";
import FormCheckboxComponent from "@/common/form-checkbox/index.component";

const SubscriberPremiumCalculatorComponent = () => {
  return (
    <div>
      <div className={"p-8 border-b border-b-gray-main"}>
        <h1 className={"text-2xl font-grotesk font-bold"}>
          Premium Calculator
        </h1>
      </div>

      <div className={"p-8 grid grid-cols-12 gap-8"}>
        <div
          className={
            "col-span-12 lg:col-span-6 p-8 flex items-center justify-between gap-3 bg-plans-yearly rounded-md"
          }
        >
          <div>
            <h3 className={"text-lg font-bold"}>₦51,200,000</h3>
            <p className={"text-gray-dark"}>Yearly</p>
          </div>

          <input type={"radio"} name={"planType"} />
        </div>

        <div
          className={
            "col-span-12 lg:col-span-6 p-8 flex items-center justify-between gap-3 bg-plans-quarterly rounded-md"
          }
        >
          <div>
            <h3 className={"text-lg font-bold"}>₦12,800,000</h3>
            <p className={"text-gray-dark"}>Quarterly</p>
          </div>

          <input type={"radio"} name={"planType"} />
        </div>

        <div
          className={
            "col-span-12 lg:col-span-6 p-8 flex items-center justify-between gap-3 bg-plans-monthly rounded-md"
          }
        >
          <div>
            <h3 className={"text-lg font-bold"}>₦64,000</h3>
            <p className={"text-gray-dark"}>Monthly</p>
          </div>

          <input type={"radio"} name={"planType"} />
        </div>

        <div
          className={
            "col-span-12 lg:col-span-6 p-8 flex items-center justify-between gap-3 bg-plans-weekly rounded-md"
          }
        >
          <div>
            <h3 className={"text-lg font-bold"}>₦18,000</h3>
            <p className={"text-gray-dark"}>Weekly</p>
          </div>

          <input type={"radio"} name={"planType"} />
        </div>

        <div className={"col-span-12"}>
          <FormCheckboxComponent label={"Add excess buy back."} />
        </div>

        <div className={"col-span-12"}>
          <ButtonComponent variant={"filled"}>Verify Email</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default SubscriberPremiumCalculatorComponent;
