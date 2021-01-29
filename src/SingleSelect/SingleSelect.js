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
        with Github, Yarn, or eslint, so figuring out how to fork into VS and use 'yarn start' was new 
        and came with some errors that lead to a lot of troubleshooting and Googling. It mostly took a 
        few command line adds, but it's all working, and I have the live version in a browser. This
        process took me about 2 hours with a fresh VS install in that time.

        Craig: Added class names to a few exiting divs to style them specifically, and added one div
        around the buttons to help with styling.
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
                    return <button className={'answer'} onClick={()=>{handleSelect(optionIndex)}}>{option.text}</button>
                    })
                }
            </div>
            {
                selected > -1 &&
                <div className={`feedback ${selectedOption.correct ? 'correct' : 'incorrect'}`}>
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
                    <button onClick={props.onComplete}>OK</button>
                </div>
            }
            <footer className={`footer`}></footer>
        </div>
    )
}

export default SingleSelect