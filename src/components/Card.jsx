import { FaFile } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"; // ✅ Added import

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="relative w-60 h-72 py-8 px-5 text-white bg-zinc-800 rounded-[45px] overflow-hidden"
    >
      <FaFile />
      <p className="mt-4 font-semibold text-sm leading-tight">{data.desc}.</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-4 mb-5">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className="tag w-full bg-green-400 py-4 flex items-center justify-center">
            <h3 className="text-sm font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
