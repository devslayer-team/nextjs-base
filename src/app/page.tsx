import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col items-center">
				<Image src="/favicon.png" alt="DevSlayer Logo" width={100} height={24} priority />
				<h1 className="text-5xl font-bold mt-10">DevSlayer</h1>
			</div>
		</main>
	);
}
