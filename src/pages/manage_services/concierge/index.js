import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Concierge() {
    const router = useRouter();
    const { wizard, tab } = router.query;
    const [currentComponent, setCurrentComponent] = useState('');

    useEffect(() => {
        const loadComponent = async () => {
            const Component = await import(`src/containers/Forms/concierge/${stepToComponent(wizard, tab)}`);
            setCurrentComponent(Component.default ? <Component.default /> : "");
        };
        loadComponent();
    }, [wizard, tab]);


    const stepToComponent = (wizard, tab) => {
        switch (`${wizard}_${tab}`) {
            case '1_ConciergeHome':
                return 'ConciergeHome';
                
            case '2_location-provider':
                return 'locationCategory';

            case '3_time-slot':
                return 'selectTimeSlote';

            case '3_select-location-address':
                return 'locationAddressFild';

            case '3_location-address-overview':
                return 'locationAddressOverview';

            case "4_appointment-confrimation":
                return 'appoinmentConfirmation';
            default:
                return "";
        }
    };

    return currentComponent;
}
