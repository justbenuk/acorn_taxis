import {
  FaPhone,
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagramSquare,
  FaGooglePlay,
  FaAppStore,
} from "react-icons/fa";
export default function GlobalTopbar() {
  return (
    <div className="bg-yellow-500 text-gray px-6 py-3 font-bold text-sm">
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-row items-center justify-center gap-2">
            <a
              href="tel:0182763333"
              target="_blank"
              className="p-1 border border-gray-900 rounded-full"
            >
              <FaPhone className="text-xs text-gray-900" />
            </a>
            <p className="hidden md:block">01827 63333</p>
          </div>
          <a
            href="mailto:enquiries@acorntaxis.co.uk"
            className="flex flex-row items-center justify-center gap-2"
          >
            <p className="p-1 border border-gray-900 rounded-full">
              <FaEnvelopeOpen className="text-xs text-gray-900" />
            </p>
            <p className="hidden md:block">enquiries@acorntaxis.co.uk</p>
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row items-center justify-center gap-2">
            <a
              href="https://www.facebook.com/AcornTaxisTamworth/"
              target="_blank"
              className="p-1 border border-gray-900 rounded-full"
            >
              <FaFacebook className="text-xs text-gray-900" />
            </a>
          </div>
          <a
            href="https://www.instagram.com/acorn_taxis/"
            className="flex flex-row items-center justify-center gap-2"
          >
            <p className="p-1 border border-gray-900 rounded-full">
              <FaInstagramSquare className="text-xs text-gray-900" />
            </p>
          </a>
          <a
            href="https://www.instagram.com/acorn_taxis/"
            className="flex flex-row items-center justify-center gap-2"
          >
            <p className="p-1 border border-gray-900 rounded-full">
              <FaGooglePlay className="text-xs text-gray-900" />
            </p>
          </a>
          <a
            href="https://www.instagram.com/acorn_taxis/"
            className="flex flex-row items-center justify-center gap-2"
          >
            <p className="p-1 border border-gray-900 rounded-full">
              <FaAppStore className="text-xs text-gray-900" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
