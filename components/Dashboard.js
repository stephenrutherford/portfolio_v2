import {
	Heading,
	Flex,
	List,
	UnorderedList,
	ListItem,
	useColorMode,
	IconButton,
	Link,
	VStack,
	Image,
	Text,
} from "@chakra-ui/react"
import Gist from "react-gist"

function Dashboard() {
	const { colorMode, toggleColorMode } = useColorMode()
	const gistData = {
		id: "3b6c338918224f4eb1718edd36163bef",
		file: null,
	}

	return (
		<Flex maxW='700px' flexDirection='column'>
			<VStack mt={10} spacing={6} alignItems='left'>
				<Heading>Fraud Dashboard</Heading>
				<Image
					backgroundColor='white'
					src='images/projects/dashboard/promo.svg'
					border='1px solid lightgray'
					borderRadius='lg'
					overflow='hidden'
				></Image>
				<Flex alignItems='center'>
					<Image
						boxSize='40px'
						objectFit='cover'
						src={
							colorMode === "light"
								? "images/github.svg"
								: "images/github_2.svg"
						}
						alt='GitHub'
					/>
					<Link href='#' isExternal>
						<Text pl={4}>GitHub</Text>
					</Link>
				</Flex>

				<Flex alignItems='center'>
					<Image
						boxSize='40px'
						objectFit='cover'
						src={colorMode === "light" ? "images/web.svg" : "images/web_2.svg"}
						alt='Live Demo'
					/>
					<Link href='#' isExternal>
						<Text pl={4}>Live Demo</Text>
					</Link>
				</Flex>
			</VStack>
			<VStack mt={10} spacing={4} alignItems='left'>
				<Text as='mark' p={2}>
					This dashboard is under active development. The Live Demo may have
					incomplete links or features.
				</Text>
				<Heading size='md'>Overview</Heading>
				<Text>
					A fraud metrics and sales dashboard created with Next.js. Designed as
					a data visualization tool using charts and tables.
				</Text>
				<Heading size='md'>Features</Heading>
				<Text>Live data is injested from JSON</Text>
				<Heading size='sm'>Dashboards</Heading>
				<UnorderedList pl={8}>
					<ListItem>Fraud Metrics</ListItem>
					<ListItem>Sales</ListItem>
					<ListItem>Chargebacks</ListItem>
					<ListItem>Rules/policies</ListItem>
				</UnorderedList>
				<Heading size='sm'>Operations</Heading>
				<UnorderedList pl={8}>
					<ListItem>Tasks</ListItem>
					<ListItem>Calendar</ListItem>
					<ListItem>Documents</ListItem>
				</UnorderedList>
				<Heading size='sm'>Other</Heading>
				<UnorderedList pl={8}>
					<ListItem>Settings</ListItem>
					<ListItem>Changelog</ListItem>
				</UnorderedList>
			</VStack>
		</Flex>
	)
}

export default Dashboard
