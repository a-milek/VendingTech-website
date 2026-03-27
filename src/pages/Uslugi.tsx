import { Box, Heading, Image, Text, VStack, Flex } from "@chakra-ui/react";
import { useIntl } from "react-intl";

const Uslugi = () => {
  const intl = useIntl();
  return (
    <Box width={{ base: "95%", md: "60vw" }} mx="auto" px={6} py={4}>
      <Heading textAlign="center" size="2xl" py={8}>
        {intl.formatMessage({ id: "services_page.title" })}
      </Heading>

      {/* First section: Kompleksowa obsługa */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={6}
        mb={12}
      >
        <Image
          src="ChatGPT_Image_7_sie_2025_02_05_39_365x.png"
          width={{ base: "100%", md: "50%" }}
          objectFit="contain"
        />
        <VStack align="start" spacing={4} width={{ base: "100%", md: "50%" }}>
          <Text fontSize="xl" fontWeight="bold">
            {intl.formatMessage({ id: "services_page.service.title" })}
          </Text>
          <Text
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({
                id: "services_page.service.description",
              }),
            }}
          />
        </VStack>
      </Flex>

      {/* Second section: Druk 3D */}
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        align="center"
        gap={6}
      >
        <Image
          src="ChatGPT_Image_7_sie_2025_02_12_42_365x.png"
          width={{ base: "100%", md: "50%" }}
          objectFit="contain"
        />
        <VStack align="start" spacing={4} width={{ base: "100%", md: "50%" }}>
          <Text fontSize="xl" fontWeight="bold">
            {intl.formatMessage({ id: "services_page.print3d.title" })}
          </Text>
          <Text
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({
                id: "services_page.print3d.description",
              }),
            }}
          />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Uslugi;
