import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Chord Practice",
	description: "Practice your chords",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-mantine-color-scheme="light">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={`${poppins.className} antialiased`}>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
