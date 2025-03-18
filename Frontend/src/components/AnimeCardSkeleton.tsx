import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const AnimeCardSkeleton = () => {
  return (
    <Card.Root width="587px" height="448px">
      <Skeleton aspectRatio={6 / 9} maxH="md" boxSize="65" />
      <Card.Body p="4">
        <SkeletonText mt="4" noOfLines={6} width={250} />
      </Card.Body>
    </Card.Root>
  );
};

export default AnimeCardSkeleton;
