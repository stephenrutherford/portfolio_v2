import {
	Heading,
	Flex,
	UnorderedList,
	ListItem,
	useColorMode,
	Link,
	VStack,
	Image,
	Text,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
} from "@chakra-ui/react"
import Gist from "react-gist"

function Dashboard() {
	const { colorMode, toggleColorMode } = useColorMode()
	const gistData = {
		id: "3b6c338918224f4eb1718edd36163bef",
		file: null,
	}

	return (
		<Flex maxW='750px' flexDirection='column'>
			<VStack mt={10} spacing={6} alignItems='left'>
				<Heading>Fraud Dashboard</Heading>
				<Image
					backgroundColor='white'
					src='images/projects/dashboard/promo.webp'
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
								? "images/github.webp"
								: "images/github_2.webp"
						}
						alt='GitHub'
					/>
					<Link
						href='https://github.com/stephenrutherford/fraud-dashboard'
						isExternal
					>
						<Text pl={4}>GitHub</Text>
					</Link>
				</Flex>

				<Flex alignItems='center'>
					<Image
						boxSize='40px'
						objectFit='cover'
						src={
							colorMode === "light" ? "images/web.webp" : "images/web_2.webp"
						}
						alt='Live Demo'
					/>
					<Link href='https://fraud-dashboard.vercel.app/' isExternal>
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
				<UnorderedList pl={8}>
					<ListItem>Live data is injested from JSON.</ListItem>
					<ListItem>Real-Time alerts with emails.</ListItem>
					<ListItem>Group data sharing and chat communication.</ListItem>
					<ListItem>
						Calendar events for active and upcoming promotions.
					</ListItem>
				</UnorderedList>
				<Heading size='sm'>Dashboards</Heading>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>Primary</Th>
							<Th>Operations</Th>
							<Th>Other</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Fraud Metrics</Td>
							<Td>Tasks</Td>
							<Td>Settings</Td>
						</Tr>
						<Tr>
							<Td>Sales</Td>
							<Td>Calendar</Td>
							<Td>Changelog</Td>
						</Tr>
						<Tr>
							<Td>Chargebacks</Td>
							<Td>Documents</Td>
							<Td></Td>
						</Tr>
						<Tr>
							<Td>Rules/policies</Td>
							<Td></Td>
							<Td></Td>
						</Tr>
					</Tbody>
				</Table>
			</VStack>
		</Flex>
	)
}

export default Dashboard
