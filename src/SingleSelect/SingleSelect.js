import React, {useState, useEffect} from 'react'
import './SingleSelect.scss'


const SingleSelect = props => {

    /*

        This component is built for you. Just skin it with the scss file. See the example.png. 

        Suggestions:
            rollover states on buttons.
            staging animations.
            make feedback a modal window.

    */

    /*
        Hey! I wanted to leave some notes here to possibly explain my thoughts through this assessment, in
        addition to my comments through the CSS.
             
        It was interesting getting my desktop set up for all of this. I haven't previously worked
        with Github, Yarn, or eslint, so figuring out how to fork in GitHub and clone into VS and use
        'yarn start' was new and came with some errors that lead to a lot of troubleshooting and Googling.
        It mostly took a few command line adds, but it's all working, and I have the live version in a
        browser. This process didn't take very long at all, which was nice. 

        I added class names to a few exiting divs to style them specifically, and added a couple of
        divs to help with styling instead of styling the tags themselves. For classes I prefer to just 
        use one class per tag when possible. It keeps the rendered HTML cleaner and I feel I can be more 
        precise with my troubleshooting. I understand the benefit of building block systems like Bootstrap, 
        but I feel most products involved lose a lot of individual charm or inovation they might have had if 
        coded a little more personally. 

        When first approaching the Modal I spent too long digging too far down the wrong rabbit hole to make 
        it work. I was certain that I needed to add some functions and variables to switch the class on the 
        modal div, when it finally occured to me that it's not even being rendered, and all I had to do was 
        make the div look like a modal. It already knows when to exist, it just needs to know what to look 
        like. So that was embarassing. The upside is that I got a hefty JS refresher and I'm working on the 
        React tutorial. I'm hoping I'll be able to finish the MultiSelect in the near future, for my own
        benefit, if not yours, should we be working together.

        I hope you're satisfied with what I've submitted, and I look forward to hearing from you soon.
        Thank you for reading all of that! 

        Craig Richardson
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
                    //selected === -1 &&  //Removing this keeps the buttons on screen behind the modal. 
                    props.data.options.map((option, optionIndex) => {
                        return <button className={'button'} onClick={() => { handleSelect(optionIndex)}}>{option.text}</button>
                    })
                }
            </div>
            {
                selected > -1 &&
                
                /*I attempted to make the modalOverlay a sibling to this outermost div but kept getting 
                  syntax errors about a missing parent element. I'm assuming it's a React issue with the 
                  above arguement, but I haven't found out how to correct it properly yet, so I had to wrap  
                  an empty div around everything to keep the compiler happy.
                */
                //<div></div>
                <div>
                    <div className={`modal ${selectedOption.correct ? 'correct' : 'incorrect'}`}>
                        <div className={`modalContent`} >
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
                    </div>
                    <div className={`modalOverlay ${selectedOption.correct ? 'correct' : 'incorrect'}`}></div>
                </div>            
                
            }
        </div>


    )
}

export default SingleSelect