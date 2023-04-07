import { useRouter } from "next/router"
import { useLayoutEffect } from "react";
import { useState } from "react";

import CallOnScreen from 'src/containers/Forms/synchronous/callOnScreen';
import CallScreen from 'src/containers/Forms/synchronous/callScreen';
import EndedCallScreen from 'src/containers/Forms/synchronous/endedCallScreen';

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