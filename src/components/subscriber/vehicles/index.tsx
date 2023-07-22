import SubscriberLayout from "@/layouts/subscriber/index.layout";
import FormInputComponent from "@/common/form-input/index.component";
import {
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import FormSelectComponent from "@/common/form-select/index.component";
import ButtonComponent from "@/common/button/index.component";
import { useEffect, useState } from "react";
import SubscriberVehicleCardComponent from "@/components/subscriber/vehicles/vehicle-card";
import PaginationComponent from "@/common/pagination/index.component";
import { useRouter } from "next/router";

// Todo: replace the interface object with actual vehicle object
interface Vehicle {
  id: number;
  carName: string;
  plateNumber: string;
  registrationNumber: string;
  color: string;
  premium: number;
}

const SubscriberVehiclesComponent = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [vehiclesTotalPages, setVehiclesTotalPages] = useState(0);
  const [vehiclesCurrentPage, setVehiclesCurrentPage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setVehicles([
      {
        id: 1,
        carName: "2005 Toyota Avalon Xl",
        plateNumber: "EKY 773 DD",
        registrationNumber: "Paulinus Offorzor",
        color: "Red",
        premium: 1625000,
      },
      {
        id: 2,
        carName: "2005 Toyota Avalon Xl",
        plateNumber: "EKY 773 DD",
        registrationNumber: "Paulinus Offorzor",
        color: "Red",
        premium: 1625000,
      },
      {
        id: 3,
        carName: "2005 Toyota Avalon Xl",
        plateNumber: "EKY 773 DD",
        registrationNumber: "Paulinus Offorzor",
        color: "Red",
        premium: 1625000,
      },
      {
        id: 4,
        carName: "2005 Toyota Avalon Xl",
        plateNumber: "EKY 773 DD",
        registrationNumber: "Paulinus Offorzor",
        color: "Red",
        premium: 1625000,
      },
      {
        id: 5,
        carName: "2005 Toyota Avalon Xl",
        plateNumber: "EKY 773 DD",
        registrationNumber: "Paulinus Offorzor",
        color: "Red",
        premium: 1625000,
      },
    ]);

    setVehiclesTotalPages(50);
    setVehiclesCurrentPage(1);
  }, []);

  return (
    <SubscriberLayout title={"Vehicles"} caption={"Manage your vehicles."}>
      <div className={"space-y-8"}>
        <div className={"flex items-center justify-between gap-8"}>
          <FormInputComponent
            placeholder={"Search Anything"}
            Icon={<MagnifyingGlassIcon className={"w-5 h-5"} />}
          />

          <div className={"flex items-center gap-3"}>
            <FormSelectComponent Icon={<FunnelIcon className={"w-5 h-5"} />}>
              <option>All Policies</option>
              <option>All Policies</option>
              <option>All Policies</option>
            </FormSelectComponent>

            <ButtonComponent
              size={"base"}
              variant={"filled"}
              onClick={() => router.push("/subscriber/vehicles/create")}
            >
              <div className={"flex items-center justify-center gap-2"}>
                <PlusIcon className={"w-5 h-5"} />
                <span>Add New Vehicle</span>
              </div>
            </ButtonComponent>
          </div>
        </div>

        {vehicles.length === 0 ? (
          <div
            className={
              "w-full h-96 p-6 flex flex-col items-center justify-center bg-white rounded-md"
            }
          >
            <h3 className={"text-lg font-medium"}>No vehicles added yet.</h3>
            <span className={"text-gray-dark"}>
              New vehicles will start appearing here as soon as you add them.
            </span>
          </div>
        ) : (
          <div className={"grid grid-cols-12 gap-3"}>
            {vehicles.map((vehicle) => (
              <SubscriberVehicleCardComponent
                key={vehicle.id}
                carName={vehicle.carName}
                plateNumber={vehicle.plateNumber}
                registrationName={vehicle.registrationNumber}
                color={vehicle.color}
                premium={vehicle.premium}
              />
            ))}

            <div className={"col-span-12 flex items-center justify-end"}>
              <PaginationComponent
                totalPages={vehiclesTotalPages}
                currentPage={vehiclesCurrentPage}
                onPageChange={() => {}}
              />
            </div>
          </div>
        )}
      </div>
    </SubscriberLayout>
  );
};

export default SubscriberVehiclesComponent;
