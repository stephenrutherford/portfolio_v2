import {
	Heading,
	Text,
	Flex,
	Spacer,
	HStack,
	Image,
	Link,
	Badge,
	useBreakpointValue,
} from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

function Card({ link, image, heading, description, badge1, badge2, badge3 }) {
	const variant = useBreakpointValue({
		base: "column",
		xl: "row",
		lg: "row",
		md: "row",
		sm: "column",
	})

	return (
		<Link href={link} style={{ color: "inherit", textDecoration: "inherit" }}>
			<Flex
				width='100%'
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'
				// alignItems='center'
				// justifyContent='center'
				className={styles.card}
				flexDirection={variant}
			>
				<Flex>
					<Image
						width='350px'
						objectFit='cover'
						src={image}
						alt='Project Image'
					/>
				</Flex>
				<Flex flex='1' flexDirection='column' p={2} maxWidth='400px'>
					<Heading size='md'>{heading}</Heading>
					<Text noOfLines={3} isTruncated>
						{description}
					</Text>
					<Spacer />
					<HStack>
						<Badge
							colorScheme={
								badge1 === "PYTHON"
									? "green"
									: badge1 === "PANDAS"
									? "blue"
									: badge1 === "JSX"
									? "red"
									: "yellow"
							}
						>
							{badge1}
						</Badge>
						<Badge
							colorScheme={
								badge2 === "PYTHON"
									? "green"
									: badge2 === "PANDAS"
									? "blue"
									: badge2 === "JSX"
									? "red"
									: "yellow"
							}
						>
							{badge2}
						</Badge>
						<Badge
							colorScheme={
								badge3 === "PYTHON"
									? "green"
									: badge3 === "PANDAS"
									? "blue"
									: badge3 === "JSX"
									? "red"
									: "yellow"
							}
						>
							{badge3}
						</Badge>
					</HStack>
				</Flex>
			</Flex>
		</Link>
	)
}

export default Card
