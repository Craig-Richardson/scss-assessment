import React, {useState, useEffect} from 'react'
import './SingleSelect.scss'

const SingleSelect = props => {

    /*

        This component is built for you. Just skin it with the scss file. See the example.png. 

        Suggestions:
            rollover states on buttons.
            staging animations.
            make feedback a modal window.

        Craig: It was interesting getting my desktop set up for all of this. I haven't previously worked
        with Github, Yarn, or eslint, so figuring out how to fork in GitHub and clone into VS and use 
        'yarn start' was new and came with some errors that lead to a lot of troubleshooting and Googling. 
        It mostly took a few command line adds, but it's all working, and I have the live version in a 
        browser. This process took me about 2 hours, with a fresh VS install in that time.

        Craig: Added class names to a few exiting divs to style them specifically, and added a couple of 
        divs to help with styling instead of styling the tags themselves.
    */

    const [selected, setSelected] = useState(-1);

    const handleSelect = (i) => {
        if(selected === -1) setSelected(i)
    }

    const selectedOption = props.data.options[selected]

    return (
        <div className={`SingleSelect`}>
            <div className={'question'}>
                <h1>
                    {props.data.questionText}
                </h1>
            </div>
            <div className={'answerButtons'}>
                {
                    selected === -1 &&
                    props.data.options.map((option, optionIndex) => {
                    return <button id="modalButton" className={'button'} onClick={()=>{handleSelect(optionIndex)}}>{option.text}</button>
                    })
                }
            </div>
            {
                selected > -1 &&
                /*I tried to make a modal based off of the linked site in this comment, but I'm afraid I'm not comfortable 
                  enough with React yet to really make the necessary changes. https://dev.to/achowba/building-a-modal-in-react-15hg
                  I understand the idea that I need to add a class to set the display status by sending a true/false 
                  variable to the top div below this. I can see how to add the class by the provided correct/incorrect
                  class name code, but am not sure how pass the information yet. I need to spend more time studying React.
                  I spent a couple of hours trying to figure this out, but am going to move on.
                  
                */

                <div className={`modal ${selectedOption.correct ? 'correct' : 'incorrect'}`}>
                    <div className={'modalContent'}>
                        <h1>
                            {selectedOption.correct ?
                                props.data.feedback.correct.header
                            :
                                props.data.feedback.incorrect.header
                            }
                        </h1>
                        <p>
                            {selectedOption.correct ?
                                props.data.feedback.correct.body
                            :
                                props.data.feedback.incorrect.body
                            }
                        </p>
                        <button className={'button'} onClick={props.onComplete}>OK</button>
                    </div>
                    <div className={'feedbackOverlay'}></div>
                </div>
            }
        </div>


    )
}

export default SingleSelect