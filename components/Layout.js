import { Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({ children }) {
	return (
		<Flex
			minH='100vh'
			padding='4 0.5rem'
			ml={4}
			mr={4}
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Flex
				padding='5rem 0'
				flex='1'
				flexDirection='column'
				// justifyContent='center'
				// alignItems='center'
			>
				<Header />
				{children}
			</Flex>
			<Flex>
				<Footer />
			</Flex>
		</Flex>
	)
}

// min-height: 100vh;
// padding: 4 0.5rem;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;

export default Layout
