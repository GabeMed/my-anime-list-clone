import Anime from "@/entities/Anime";
import { Box, Heading, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import YouTube from "react-youtube";
import { FaPlay, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  anime: Anime;
}

const AnimeTrailer = ({ anime }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const rickrolled = "xvFZjo5PgG0";

  const options = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const thumbnail = `https://img.youtube.com/vi/${anime.trailer.youtube_id}/hqdefault.jpg`;

  if (!anime.trailer.youtube_id)
    return (
      <>
        <Box
          w={{ base: "100%", md: "820px" }}
          h={{ base: "auto", md: "461px" }}
          maxW="100%"
          overflow="hidden"
          position="relative"
          borderRadius="lg"
          boxShadow="lg"
          aspectRatio={16 / 9}
        >
          <Stack height="80%" justify="center" align="center">
            <Heading>Sorry, there is no video available.</Heading>
            <Text>
              There is really no video available, so don't click down here !
            </Text>
          </Stack>
          <IconButton
            position="absolute"
            top="55%"
            left="50%"
            transform="translate(-50%, -50%)"
            size="md"
            variant="plain"
            onClick={() => setIsPlaying(true)}
          >
            <FaPlay />
          </IconButton>
        </Box>
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{
                width: 320,
                height: 180,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                position: "fixed",
                zIndex: 1500,
              }}
              animate={{
                width: "80vw",
                height: "calc(65vw * 9 / 16)",
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                backgroundColor: "black",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,0,0,0.6)",
              }}
            >
              <YouTube
                videoId={rickrolled}
                opts={options}
                style={{ width: "100%", height: "100%" }}
              />
              <IconButton
                position="absolute"
                top="0px"
                right="0px"
                size="sm"
                colorScheme="whiteAlpha"
                variant="plain"
                onClick={() => setIsPlaying(false)}
              >
                <FaTimes />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );

  return (
    <>
      <Box
        w={{ base: "100%", md: "820px" }}
        h={{ base: "auto", md: "461px" }}
        maxW="100%"
        overflow="hidden"
        position="relative"
        borderRadius="lg"
        boxShadow="lg"
        aspectRatio={16 / 9}
      >
        <Image src={thumbnail} objectFit="cover" width="100%" height="100%" />
        <IconButton
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          size="md"
          variant="plain"
          onClick={() => setIsPlaying(true)}
        >
          <FaPlay />
        </IconButton>
      </Box>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{
              width: 320,
              height: 180,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              position: "fixed",
              zIndex: 1500,
            }}
            animate={{
              width: "80vw",
              height: "calc(65vw * 9 / 16)",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              backgroundColor: "black",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(0,0,0,0.6)",
            }}
          >
            <YouTube
              videoId={anime.trailer.youtube_id}
              opts={options}
              style={{ width: "100%", height: "100%" }}
            />
            <IconButton
              position="absolute"
              top="0px"
              right="0px"
              size="sm"
              colorScheme="whiteAlpha"
              variant="plain"
              onClick={() => setIsPlaying(false)}
            >
              <FaTimes />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimeTrailer;
