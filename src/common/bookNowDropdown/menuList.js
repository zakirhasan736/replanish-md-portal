import Link from "next/link";
import { Menu } from "antd";

export const MenuList = (
	<Menu
		selectable
		items={[
			{
				key: "1",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">Botox/Dermal Fillers</a>
					</Link>
				),
			},
			{
				key: "2",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">
							Bio identical Hormone Replacement Therapy
						</a>
					</Link>
				),
			},
			{
				key: "3",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">Testosterone Replacement Therapy</a>
					</Link>
				),
			},
			{
				key: "4",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">
							Peptides (Sermorelin / Ipamorelin)
						</a>
					</Link>
				),
			},
			{
				key: "5",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">Medical Weight Loss</a>
					</Link>
				),
			},
			{
				key: "6",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">IV Drips (We can come to you)</a>
					</Link>
				),
			},
			{
				key: "7",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">
							Erectile Dysfunction (Sildenafil/Tadalafil)
						</a>
					</Link>
				),
			},
			{
				key: "8",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">
							Erectile Dysfunction (Sildenafil/Tadalafil)
						</a>
					</Link>
				),
			},
			{
				key: "9",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">Addiction Medicine (suboxone)</a>
					</Link>
				),
			},
			{
				key: "10",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">Personal Training</a>
					</Link>
				),
			},
			{
				key: "11",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">Nutrition Counseling</a>
					</Link>
				),
			},
			{
				key: "12",
				label: (
					<Link href="https://replenishmd.myaestheticrecord.com/book/appointments">
						<a target="_blank">Mobile Labwork</a>
					</Link>
				),
			},
		]}
	/>
);
