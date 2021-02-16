import {
	Heading,
	Flex,
	Spacer,
	Avatar,
	useColorMode,
	IconButton,
	Link,
	VStack,
	Tooltip,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import styles from "../styles/Home.module.css"

function Header() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex p={0} alignItems='center'>
			<Avatar
				size='lg'
				bg='blue.500'
				name='Stephen Rutherford'
				src='images/avatar.svg'
			/>
			<Heading
				fontSize='xl'
				ml='2'
				color={colorMode === "light" ? "gray.600" : "gray.200"}
			>
				<Link
					href='/'
					style={{
						color: "inherit",
						textDecoration: "inherit",
						letterSpacing: "0.4rem",
					}}
				>
					STEPHEN RUTHERFORD
				</Link>
			</Heading>
			<Spacer />
			<Tooltip hasArrow label='Night/Day Mode!'>
				<IconButton
					aria-label='Color Mode Button'
					icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					onClick={toggleColorMode}
					variant='outline'
				/>
			</Tooltip>
		</Flex>
	)
}

export default Header
