import { useRouter } from "next/router";
import React from "react";
import BioidenticalHarmonTherapy from "src/containers/Services/bioidenticalHarmonTherapy";
import BotoxDermalFiller from "src/containers/Services/botoxDermalFiller";
import BotoxDermalFillerParties from "src/containers/Services/botoxDermalFillerParties";
import MedicalWeightLoss from "src/containers/Services/medicalWeightLoss";
import MicronutrientTesting from "src/containers/Services/micronutrientTesting";
import PeptideTherapy from "src/containers/Services/peptideTherapy";
import SecretRF from "src/containers/Services/secretRF";
import TestosteroneTherapy from "src/containers/Services/testosteroneTherapy";
import TherapyIV from "src/containers/Services/therapyIV";
import XEO from "src/containers/Services/xeo";

const Services = () => {
	const router = useRouter();
	const { id } = router.query;

	const checkingService = (routeId) => {
		switch (routeId) {
			case "botox-dermal-filler":
				return <BotoxDermalFiller />;
			case "bioidentical-hormone-replacement-therapy":
				return <BioidenticalHarmonTherapy />;
			case "peptide-therapy":
				return <PeptideTherapy />;
			case "botox-dermal-filler-parties":
				return <BotoxDermalFillerParties />;
			case "tesosterone-therapy":
				return <TestosteroneTherapy />;
			case "micronutrient-testing":
				return <MicronutrientTesting />;
			case "IV-therapy":
				return <TherapyIV />;
			case "medical-weight-loss":
				return <MedicalWeightLoss />;
			case "xeo":
				return <XEO />;
			case "secret-RF":
				return <SecretRF />;
			default:
				break;
		}
	};

	return checkingService(id);
};

export default Services;
