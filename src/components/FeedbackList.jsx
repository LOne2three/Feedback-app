 import Feedbackitem from "./Feedbackitem"
 import { useContext } from 'react'
 import {motion, AnimatePresence} from 'framer-motion'
 import FeedbackContext from '../Context/FeedbackContext'


 function FeedbackList({handleDelete }) {

   const {feedback} = useContext(FeedbackContext)

    console.log(feedback.length)

    if(!feedback){

        return <p>No Feedback Yet</p>
    }

    

    return (
        <div className = 'feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                 key={item.id}
                 initial={{opacity:0}}
                 animate={{opacity: 1}}
                 exit={{ opacity: 0 }}
                >
                <Feedbackitem key = {item.id} item = {item} handleDelete = {handleDelete} />
                </motion.div>
              

            ))
            }
            </AnimatePresence>
            </div>



       
    )
}




export default FeedbackList
