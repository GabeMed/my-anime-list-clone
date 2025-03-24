import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const AnimeCardSkeleton = () => {
  return (
    <Card.Root flexDirection="row" height="420px" width="525px">
      <Skeleton aspectRatio={6 / 9} maxH="md" boxSize="65" />
      <Card.Body p="4">
        <SkeletonText mt="4" noOfLines={6} width={200} />
      </Card.Body>
    </Card.Root>
  );
};

export default AnimeCardSkeleton;
