import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const SkeletonCard = () => {
	return (
		<>
			<Card>
				<Skeleton height={200}/>
				<CardBody>
					<SkeletonText mt='4' noOfLines={4} spacing='4' />
				</CardBody>
			</Card>
		</>
	)
}

export default SkeletonCard