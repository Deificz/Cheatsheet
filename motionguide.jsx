


import {motion} from 'framer-motion'

const animation = {
    initial: {opacity: 0, y: -100},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y:100},
}

export default function AnimatedPage({children}){
    return(
        <motion.div variants={animation} initial="initial" animate="animate" exit="exit">
              {children}
        </motion.div>
    )
}