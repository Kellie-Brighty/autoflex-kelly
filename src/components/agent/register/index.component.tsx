import FormInputComponent from "@/common/form-input/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import ButtonComponent from "@/common/button/index.component";

const RegisterAgentComponent = () => {
  return (
    <div>
      <div className={"p-8 border-b border-gray-main"}>
        <h1 className={"text-2xl font-grotesk font-bold"}>
          Register As An Agent
        </h1>
      </div>

      <div className={"p-8 grid grid-cols-12 gap-3"}>
        <div className={"col-span-12 lg:col-span-4"}>
          <FormInputComponent
            type={"text"}
            name={"firstName"}
            required={true}
            label={"First Name"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormInputComponent
            type={"text"}
            name={"lastName"}
            required={true}
            label={"Last Name"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormInputComponent
            type={"text"}
            name={"middleName"}
            required={true}
            label={"Middle Name"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormSelectComponent name={"gender"} required={true} label={"Gender"}>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value={"others"}>Others</option>
          </FormSelectComponent>
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormInputComponent
            type={"date"}
            name={"dob"}
            required={true}
            label={"Date Of Birth"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormInputComponent
            type={"email"}
            name={"email"}
            required={true}
            label={"Email"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormInputComponent
            type={"text"}
            name={"phoneNumber"}
            required={true}
            label={"Phone Number"}
          />
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormSelectComponent name={"brand"} required={true} label={"Branch"}>
            <option value={"lagosState"}>Lagos State</option>
            <option value={"lagosState"}>Lagos State</option>
            <option value={"lagosState"}>Lagos State</option>
          </FormSelectComponent>
        </div>

        <div className={"col-span-12 lg:col-span-4"}>
          <FormSelectComponent
            name={"brand"}
            required={true}
            label={"Means of Identification"}
          >
            <option value={"internationalPassport"}>
              International Passport
            </option>
            <option value={"internationalPassport"}>
              International Passport
            </option>
            <option value={"internationalPassport"}>
              International Passport
            </option>
          </FormSelectComponent>
        </div>

        <div className={"col-span-12"}>
          <FormInputComponent
            type={"text"}
            name={"agentAddress"}
            required={true}
            label={"Agent Address"}
          />
        </div>

        <div className={"col-span-12"}>
          <ButtonComponent size={"base"} variant={"filled"}>
            Submit Registration
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default RegisterAgentComponent;
