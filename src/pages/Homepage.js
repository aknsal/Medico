import React from "react";
import FAQ from "../components/faq/FAQ";
import TopSection from "../components/topSection/TopSection";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import Card3 from "../components/cards/Card3";
import Reviews from "../components/reviews/reviews";

export default function Homepage() {
	return (
		<div>
			<TopSection />
			<Card1 />
			<Card2 />
			<Card3 />
			<FAQ />
			<Reviews />
		</div>
	);
}
