import { translate } from '../../anim';
import { motion } from 'framer-motion';

function Footer({ isActiveToggle }: { isActiveToggle: () => void }) {
  return (
    <div className="flex flex-wrap items-end text-xs uppercase mt-10 lg:justify-between text-white">
      <ul className="w-1/2 mt-2.5 overflow-hidden list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="whitespace-nowrap"
        >
          <span className="text-[#9f9689]">Made by:</span> Deb R.
        </motion.li>
      </ul>
      <ul className="w-1/2 mt-2.5 overflow-hidden list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="whitespace-nowrap"
        >
          <span className="text-[#9f9689]">Images<span className=' text-black'>[</span>pexels<span className=' text-black'>]</span>:</span> Alex Andrews, Chris Wölfer
        </motion.li>
      </ul>
      <ul className="w-1/2 mt-2.5 overflow-hidden list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="whitespace-nowrap hover:text-[#9f9689] w-fit"
        >
          <a href="/privacy-policy" onClick={isActiveToggle}>
            Privacy Policy
          </a>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="whitespace-nowrap hover:text-[#9f9689] w-fit"
        >
          <a href="/t&c" onClick={isActiveToggle}>
            Terms & Conditions
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default Footer;
