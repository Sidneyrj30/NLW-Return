import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeeedbackContentStep";

import bugImageUrl from '../../assets/bug.svg';
import lightImageUrl from '../../assets/light.svg';
import cloudImageUrl from '../../assets/cloud.svg';
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image:{
            source:bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source:lightImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
            source:cloudImageUrl,
            alt: 'Imagem de uma nuvem'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center 
        shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                < FeedbackSucessStep
                    onFeedbackRestartRequested={handleRestartFeedback}
                 />
            ):(
                <>
                    {!feedbackType ? (
                        < FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ):(
                        <FeedbackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                         />
                     )}
                </>
            )}

           <footer className="text-xs text-neutral-400">
                Feito com amor pela <a className="underline underline-offset-2" href="https://rocketseat.com">
                                        Rocketseat
                                    </a>
           </footer>
        </div>
    )
}