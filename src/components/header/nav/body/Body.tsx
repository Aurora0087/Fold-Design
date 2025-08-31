import { motion } from 'framer-motion';
import Link from 'next/link';
import { blur, translate } from '../../anim';

interface LinkProps {
  title: string;
  href: string;
  src: string;
}

interface BodyProps {
  links: LinkProps[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: (link: { isActive: boolean; index: number }) => void;
  isActiveToggle: () => void
}

const Body: React.FC<BodyProps> = ({ links, selectedLink, setSelectedLink, isActiveToggle }) => {
  const getChars = (word: string) => {
    return word.split("").map((char, i) => (
      <motion.span
        key={char + i}
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        className="inline-block pt-2"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div className="flex flex-wrap mt-10 lg:mt-20 h-full">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href} onClick={isActiveToggle}>
            <motion.p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
              className="m-0 flex overflow-hidden text-white text-2xl lg:text-[5vw] uppercase font-light pr-8 lg:pr-[2vw] pt-2.5 h-full"
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
