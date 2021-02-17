import {
	Heading,
	Flex,
	Stack,
	useColorMode,
	Image,
	Link,
} from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

function Footer() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			minW='100vw'
			h='100%'
			borderTop='1px solid #eaeaea'
			margin='0rem'
			// pb={0}
			// p='1.5rem'
		>
			<Heading
				fontSize='xl'
				// ml='2'
				color={colorMode === "light" ? "gray.600" : "gray.200"}
				letterSpacing='0.4rem'
				pt={4}
				// margin='1.5rem 0'
			>
				GET IN TOUCH
			</Heading>
			<Flex flexDireciton='column'>
				<Stack direction='row' pt={4} pb={4}>
					<Link href='mailto:stephen@rutherford.dev'>
						<Image
							mr={4}
							boxSize='40px'
							objectFit='cover'
							// src='images/email.svg'
							src={
								colorMode === "light"
									? "images/email.svg"
									: "images/email_2.svg"
							}
							alt='Email'
						/>
					</Link>
					<Link href='https://github.com/stephenrutherford' isExternal>
						<Image
							mr={4}
							boxSize='40px'
							objectFit='cover'
							src={
								colorMode === "light"
									? "images/github.svg"
									: "images/github_2.svg"
							}
							alt='GitHub'
						/>
					</Link>
					<Link
						href='https://www.linkedin.com/in/stephen-rutherford-b420951a3'
						isExternal
					>
						<Image
							mr={4}
							boxSize='40px'
							objectFit='cover'
							src={
								colorMode === "light"
									? "images/linkedin.svg"
									: "images/linkedin_2.svg"
							}
							alt='LinkedIn'
						/>
					</Link>
				</Stack>
			</Flex>
		</Flex>
	)
}

export default Footer
