import {
	Heading,
	Flex,
	Spacer,
	Avatar,
	useColorMode,
	List,
	ListItem,
	UnorderedList,
	Link,
	VStack,
	Image,
	Text,
} from "@chakra-ui/react"
import Gist from "react-gist"

function DomainChecker() {
	const { colorMode, toggleColorMode } = useColorMode()
	const gistData = {
		id: "3b6c338918224f4eb1718edd36163bef",
		file: null,
	}

	return (
		<Flex maxW='750px' flexDirection='column'>
			<VStack mt={10} spacing={6} alignItems='left'>
				<Heading>Domain Checker</Heading>
				<Image
					backgroundColor='white'
					src='images/projects/domainchecker/promo.svg'
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
					<Link
						href='https://github.com/stephenrutherford/domain-checker'
						isExternal
					>
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
					<Link href='https://fps-domain-checker.herokuapp.com/' isExternal>
						<Text pl={4}>Live Demo</Text>
					</Link>
				</Flex>
			</VStack>
			<VStack mt={10} spacing={4} alignItems='left'>
				<Heading size='md'>Overview</Heading>
				<Text>
					A fraud investigation tool used to check for invalid and disposable
					email domains.
				</Text>
				<Heading size='md'>Features</Heading>
				<Text>
					The app was built in Django using Python where it will perform a
					web-scrape from the website check-mail.org. The user can paste in the
					domains that they want to check, and the App will render a results
					table with two specific columns that contain data of interest.
				</Text>
				<UnorderedList pl={8}>
					<ListItem>
						Disposable - If the domain is considered disposable.
					</ListItem>
					<ListItem>
						Valid - If thedomain is able to receive email, or is high risk.
					</ListItem>
				</UnorderedList>

				<Text>
					An export button was also included for larger querues. The user may
					want to download the entire results table as a CSV file for filtering
					and spreadsheet lookups.
				</Text>
				<Heading size='md'>Code</Heading>
				<Flex>
					<Gist id={gistData.id} />
				</Flex>
				<Heading size='md'>Video Preview</Heading>
				<Flex>
					<video
						src={require("../public/images/projects/domainchecker/demo.mp4")}
						controls
					/>
				</Flex>
			</VStack>
		</Flex>
	)
}

export default DomainChecker
