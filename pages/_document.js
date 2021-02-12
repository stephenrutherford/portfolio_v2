import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
// import theme from "./theme"
import theme from "../styles/theme"

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<title>Stephen Rutherford</title>
					<link rel='icon' href='/favicon.ico' />
					<meta
						name='description'
						content='I am a Fraud Anaylst. Check out my projects!'
						name='keywords'
						content='Stephen Rutherford, Stephen, Rutherford, Fraud, Risk, Analyst, Investigator, Python, SQL, JSX'
						name='author'
						content='Stephen Rutherford'
					/>
				</Head>{" "}
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
