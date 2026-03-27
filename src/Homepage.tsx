import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  Card,
  Stack,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { LiaToolsSolid } from "react-icons/lia";
import { IoCartOutline, IoLocationOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import ProductGrid from "./components/ProductGrid";
import AboutUs from "./components/AboutUs";

import tloVending from "./assets/tlo_vending_x1024.png";
import aboutImageLarge from "./assets/obraz_2025-08-21_225757130_x1024.png";

import { useIntl } from "react-intl";

const Homepage: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <Image src={tloVending} width="100%" />

      <Box
        py={8}
        width="99vw"
        alignItems="center"
        justifyContent="space-between"
        textAlign="center"
      >
        <Heading size="2xl" py={8}>
          {intl.formatMessage({ id: "services.title" })}
        </Heading>

        <SimpleGrid
          spacing={4}
          columns={{ base: 1, md: 2, lg: 4 }}
          px={8}
          py={8}
        >
          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={LiaToolsSolid} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">
                  {intl.formatMessage({ id: "services.service.title" })}
                </Heading>
                <Text py={2}>
                  {intl.formatMessage({ id: "services.service.description" })}
                </Text>
              </Box>
            </Stack>
          </Card>

          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={IoCartOutline} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">
                  {intl.formatMessage({ id: "services.parts.title" })}
                </Heading>
                <Text py={2}>
                  {intl.formatMessage({ id: "services.parts.description" })}
                </Text>
              </Box>
            </Stack>
          </Card>

          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={HiOutlineCog6Tooth} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">
                  {intl.formatMessage({ id: "services.print3d.title" })}
                </Heading>
                <Text py={2}>
                  {intl.formatMessage({ id: "services.print3d.description" })}
                </Text>
              </Box>
            </Stack>
          </Card>

          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={IoLocationOutline} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">
                  {intl.formatMessage({ id: "services.vending.title" })}
                </Heading>
                <Text py={2}>
                  {intl.formatMessage({ id: "services.vending.description" })}
                </Text>
              </Box>
            </Stack>
          </Card>
        </SimpleGrid>
      </Box>

      <Image
        src={aboutImageLarge}
        width="100%"
        height="50vw"
        objectFit="cover"
        overflow="hidden"
      />

      <Box
        zIndex="1000"
        boxShadow="sm"
        width="100%"
        mx="auto"
        px={6}
        py={4}
        textAlign="center"
      >
        <Button
          size="lg"
          as={Link}
          to="/uslugi"
          leftIcon={<IoIosArrowDown />}
          colorScheme="blue"
          variant="ghost"
          mb={4}
        >
          {intl.formatMessage({ id: "nav.learnMore" })}
        </Button>

        <ProductGrid />

        <Button
          size="lg"
          as={Link}
          to="/produkty"
          leftIcon={<IoIosArrowDown />}
          colorScheme="blue"
          variant="outline"
          padding={4}
          marginBottom={6}
        >
          {intl.formatMessage({ id: "nav.browseProducts" })}
        </Button>
      </Box>

      <AboutUs />
    </div>
  );
};

export default Homepage;
