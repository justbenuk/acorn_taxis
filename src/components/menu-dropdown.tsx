import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { FaPlane, FaCashRegister, FaMobile, FaCar } from "react-icons/fa";

export default function MenuDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <p className="bg-transparent text-gray cursor-pointer">Services</p>
      </DropdownTrigger>
      <DropdownMenu
        classNames={{
          list: "grid grid-cols-2 w-96 md:w-[700px] gap-2",
        }}
        as="div"
      >
        <DropdownItem as="div">
          <Link href="/" className="flex flex-col">
            <div className="flex flex-row gap-2 items-center font-bold">
              <FaPlane />
              <p>Airports</p>
            </div>
            <p className="text-xs border-t-2 py-2 mt-2">
              Schedule your airport transfer with us today, starting from just
              £36. We provide service to all major airports across the UK.
            </p>
          </Link>
        </DropdownItem>
        <DropdownItem as="div">
          <Link href="/" className="flex flex-col">
            <div className="flex flex-row gap-2 items-center font-bold">
              <FaCashRegister />
              <p>How To Pay</p>
            </div>
            <p className="text-xs border-t-2 py-2 mt-2">
              We offer a variety of payment options in all our vehicles. You can
              pay using card, cash, or Apple Pay for your convenience.
            </p>
          </Link>
        </DropdownItem>
        <DropdownItem as="div">
          <Link href="/" className="flex flex-col">
            <div className="flex flex-row gap-2 items-center font-bold">
              <FaMobile />
              <p>Download Our App</p>
            </div>
            <p className="text-xs border-t-2 py-2 mt-2">
              Book, track, pay, and manage your reservations through our app.
              Payment options include cash and card.
            </p>
          </Link>
        </DropdownItem>
        <DropdownItem as="div">
          <Link href="/" className="flex flex-col">
            <div className="flex flex-row gap-2 items-center font-bold">
              <FaCar />
              <p>4 to 8 Seaters</p>
            </div>
            <p className="text-xs border-t-2 py-2 mt-2">
              If you need to transport a group, we accommodate up to 8
              passengers for nights out, airport transfers, and general
              journeys.
            </p>
          </Link>
        </DropdownItem>
        <DropdownItem as="div">
          <Link href="/" className="flex flex-col">
            <div className="flex flex-row gap-2 items-center font-bold">
              <FaPlane />
              <p>Airports</p>
            </div>
            <p className="text-xs border-t-2 py-2 mt-2">
              Book your Airport Transfer with us today
            </p>
          </Link>
        </DropdownItem>
        <DropdownItem as="div">
          <Link href="/" className="flex flex-col">
            <div className="flex flex-row gap-2 items-center font-bold">
              <FaPlane />
              <p>Airports</p>
            </div>
            <p className="text-xs border-t-2 py-2 mt-2">
              Book your Airport Transfer with us today
            </p>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
