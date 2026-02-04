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
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import ProductGrid from "./components/ProductGrid";
import AboutUs from "./components/AboutUs";

import tloVending from "./assets/tlo_vending_x1024.png";
import aboutImageLarge from "./assets/obraz_2025-08-21_225757130_x1024.png";

const Homepage = () => {
  return (
    <div>
      <Image src={tloVending} />
      <Box
        zIndex="1000"
        boxShadow="sm"
        width={"100vw"}
        mx="auto"
        px={6}
        py={4}
        alignItems="center"
        justifyContent="space-between"
        alignContent="center"
        textAlign="center"
      >
        <Heading alignSelf="center" textAlign="center" size={"2xl"} py={8}>
          Nasze Usługi
        </Heading>
        <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 4 }} p={8}>
          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={LiaToolsSolid} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">SERWIS AUTOMATÓW VENDINGOWYCH</Heading>
                <Text py={2}>
                  Świadczymy kompleksowy serwis oraz wsparcie techniczne,
                  zapewniając niezawodną pracę Twoich urządzeń.
                </Text>
              </Box>
            </Stack>
          </Card>
          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={IoCartOutline} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">SPRZEDAŻ CZĘŚCI ZAMIENNYCH</Heading>
                <Text py={2}>
                  Szeroki wybór części zamiennych z możliwością dostosowania do
                  indywidualnych potrzeb klienta.
                </Text>
              </Box>
            </Stack>
          </Card>
          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={HiOutlineCog6Tooth} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">OD POMYSŁU DO FIZYCZNEJ FORMY</Heading>
                <Text py={2}>
                  Projektujemy i drukujemy w technologii 3D prototypy, części
                  techniczne, niestandardowe rozwiązania.
                </Text>
              </Box>
            </Stack>
          </Card>
          <Card variant="outline">
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
              <Icon as={IoLocationOutline} boxSize={12} color="blue.500" />
              <Box>
                <Heading size="md">AUTOMATY VENDINGOWE W TWOIM ZASIĘGU</Heading>
                <Text py={2}>
                  Oferujemy automaty vendingowe na sprzedaż oraz wynajem.
                  Zapewniamy elastyczne warunki współpracy i dopasowanie oferty
                  do potrzeb Twojej firmy.
                </Text>
              </Box>
            </Stack>
          </Card>
        </SimpleGrid>
      </Box>
      <Image
        src={aboutImageLarge}
        minWidth={"100vw"}
        height={"50vw"}
        objectFit="cover"
        overflow={"hidden"}
      />
      <Box
        zIndex="1000"
        boxShadow="sm"
        width={"100vw"}
        mx="auto"
        px={6}
        py={4}
        alignItems="center"
        justifyContent="space-between"
        alignContent="center"
        textAlign="center"
      >
        <Button
          size="lg"
          as={Link}
          to="/uslugi"
          leftIcon={<IoIosArrowDown />}
          colorScheme="blue"
          variant="ghost"
        >
          Dowiedz się wiecej
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
          Przeglądaj Produkty
        </Button>
      </Box>
      <AboutUs />
    </div>
  );
};

export default Homepage;
