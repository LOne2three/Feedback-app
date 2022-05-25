import { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()





export const FeedbackProvider = ({children}) => {


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
      })



    const [feedback, setFeedback] = useState([
        {

            id: 1,
            text: 'This is Feedback item 1',
            rating: 10

          
    
        },
        {

            id: 2,
            text: 'This is Feedback item 2',
            rating: 7

          
    
        },
        {

            id: 3,
            text: 'This is Feedback item 3',
            rating: 2

          
    
        }
        ])

        

    //Delete Feedback
    const deleteFeedback = (id) =>{
            if(window.confirm('Are you sure you want to delete? '))
            {
        
              setFeedback(feedback.filter((item) => item.id !== id))
        
            }
          } 
    //add Feedback
    const addFeedback = (newFeedback) =>{
    
            newFeedback.id = uuidv4()
            setFeedback([newFeedback, ...feedback])
            console.log(newFeedback)
           
        
        }

    //edit Feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
          item,
          edit: true,
        })
      }
    
    //update Feedback
    const updateFeedback = (id, updItem) =>{
        console.log(id, updItem);
        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem}: item))
    }
    

   

    return <FeedbackContext.Provider value = {{
        feedback,
        deleteFeedback,
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
    }}>

        {children}
    </FeedbackContext.Provider>


}


export default FeedbackContext

