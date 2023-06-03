import { RecoilRoot } from "recoil";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "DevSlayer",
	description: "DevSlayer Team",
	icons: [
		{
			rel: "icon",
			url: "/favicon-32x32.png",
			type: "image/png",
			sizes: "32x32",
		},
		{
			rel: "apple-touch-icon",
			url: "/apple-touch-icon.png",
			type: "image/png",
			sizes: "180x180",
		},
		{
			rel: "icon",
			url: "/favicon-16x16.png",
			type: "image/png",
			sizes: "16x16",
		},
		{ rel: "manifest", url: "/site.webmanifest" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<RecoilRoot>{children}</RecoilRoot>
			</body>
		</html>
	);
}
