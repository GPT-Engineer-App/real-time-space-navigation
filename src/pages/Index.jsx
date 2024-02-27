import React, { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Index = () => {
  // Position state to simulate moving through 3D space
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  // Update position based on direction
  const movePosition = (axis, delta) => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      [axis]: prevPosition[axis] + delta,
    }));
  };

  // Simulate 3D space update
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Updating realistic 3D space simulation...");
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box>
        <Text fontSize="xl">Universe Simulation</Text>
        <Text>
          Explore the Universe: Current Position - X: {position.x}, Y: {position.y}, Z: {position.z}
        </Text>
      </Box>
      <Flex>
        <IconButton aria-label="Move up" icon={<FaArrowUp />} onClick={() => movePosition("y", 1)} m={2} />
        <IconButton aria-label="Move down" icon={<FaArrowDown />} onClick={() => movePosition("y", -1)} m={2} />
      </Flex>
      <Flex>
        <IconButton aria-label="Move left" icon={<FaArrowLeft />} onClick={() => movePosition("x", -1)} m={2} />
        <IconButton aria-label="Move right" icon={<FaArrowRight />} onClick={() => movePosition("x", 1)} m={2} />
        <IconButton aria-label="Move forward" icon={<FaArrowUp />} onClick={() => movePosition("z", 1)} m={2} />
        <IconButton aria-label="Move backward" icon={<FaArrowDown />} onClick={() => movePosition("z", -1)} m={2} />
      </Flex>
    </Flex>
  );
};

export default Index;
