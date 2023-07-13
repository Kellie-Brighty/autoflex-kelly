import FormInputComponent from "@/common/form-input/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import ButtonComponent from "@/common/button/index.component";

const GetEstimateForSubscriberComponent = () => {
  return (
    <div>
      <div className={"p-8 border-b border-b-gray-main"}>
        <h1 className={"text-2xl font-grotesk font-bold"}>Get Estimate</h1>
      </div>

      <div className={"p-8 grid grid-cols-12 gap-8"}>
        <div className={"col-span-12 lg:col-span-12"}>
          <FormSelectComponent
            name={"carType"}
            required={true}
            label={"Which car do you own?"}
          >
            <option value={"male"}>Toyota</option>
            <option value={"female"}>Toyota</option>
            <option value={"others"}>Toyota</option>
          </FormSelectComponent>
        </div>

        <div className={"col-span-12 lg:col-span-6"}>
          <FormInputComponent
            type={"year"}
            name={"year"}
            required={true}
            label={"Year"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-6"}>
          <FormInputComponent
            type={"number"}
            name={"carWorth"}
            required={true}
            label={"Estimated Car Worth"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-6"}>
          <FormInputComponent
            type={"email"}
            name={"email"}
            required={true}
            label={"Email"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-6"}>
          <FormInputComponent
            type={"text"}
            name={"phoneNumber"}
            required={true}
            label={"Phone Number"}
          />
        </div>

        <div className={"col-span-12"}>
          <ButtonComponent variant={"filled"}>Get Estimate</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default GetEstimateForSubscriberComponent;
