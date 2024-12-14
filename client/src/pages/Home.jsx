import  {motion, AnimatePresence} from 'framer-motion'
import {useSnaphot} from 'valtio'

import state from '../store'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';


const Home = () => {

  const snap = useSnapshot(state);
  
  return (
    <AnimatePresence>
      {snap.into && (
        <motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home