 import Feedbackitem from "./Feedbackitem"
 import { useContext } from 'react'
 import {motion, AnimatePresence} from 'framer-motion'
 import FeedbackContext from '../Context/FeedbackContext'
 import Spinner from './Share/Spinner'


 function FeedbackList() {

   const {feedback, isLoading } = useContext(FeedbackContext)

    console.log(feedback.length)

    if(!isLoading&&!feedback){

        return <p>No Feedback Yet</p>
    }

    return isLoading ? (<Spinner />) : (
        <div className = 'feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                 key={item.id}
                 initial={{opacity:0}}
                 animate={{opacity: 1}}
                 exit={{ opacity: 0 }}
                >
                <Feedbackitem key = {item.id} item = {item} />
                </motion.div>
              

            ))
            }
            </AnimatePresence>
            </div>



       
    )
}




export default FeedbackList
