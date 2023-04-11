import { useRouter } from "next/router"
import { useLayoutEffect } from "react";
import { useState } from "react";

import CallOnScreen from 'src/containers/Forms/video_calling_and_chat/callOnScreen';
import CallScreen from 'src/containers/Forms/video_calling_and_chat/callScreen';
import EndedCallScreen from 'src/containers/Forms/video_calling_and_chat/endedCallScreen';

const Meet = () => {
    const router = useRouter();
    const { meetid } = router.query;
    const [onScreen, setOnscreen] = useState(false);
    const [meetId, setMeetId] = useState(meetid);
    const [closed, setClosed] = useState(false);

    const handleClosed = () => {
        setOnscreen(false);
        setMeetId(null);
        setClosed(true);
    }
    useLayoutEffect(() => {
        setTimeout(() => {
            setOnscreen(true)
        }, 4000)
    })
    return (
        <>
            {closed ?
                <EndedCallScreen />
                :
                onScreen ?
                    <CallOnScreen handleClosed={handleClosed} /> : <CallScreen handleClosed={handleClosed} />
            }
        </>
    )
}

export default Meet