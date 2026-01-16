import { Box, Heading, Image, Text, VStack, Flex } from "@chakra-ui/react";

const Uslugi = () => {
  return (
    <Box width={{ base: "95%", md: "60vw" }} mx="auto" px={6} py={4}>
      <Heading textAlign="center" size="2xl" py={8}>
        USŁUGI
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
            KOMPLEKSOWA OBSŁUGA AUTOMATÓW VENDINGOWYCH
          </Text>
          <Text>
            <b>Doradztwo i sprzedaż:</b> Profesjonalnie doradzamy w doborze
            automatów vendingowych, dopasowując je do specyfiki lokalizacji i
            potrzeb użytkownika.
            <br />
            <br />
            <b>Transport i montaż:</b> Zapewniamy bezpieczny transport oraz
            fachową konfigurację urządzeń na miejscu.
            <br />
            <br />
            <b>Serwis i wsparcie techniczne:</b> Oferujemy bieżącą konserwację,
            naprawę systemów chłodzących, wymianę części eksploatacyjnych oraz
            dostawę komponentów na zamówienie, działając na terenie Śląska.
          </Text>
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
            DRUK 3D I PROJEKTOWANIE NA ZAMÓWIENIE
          </Text>
          <Text>
            <b>Druk 3D i projektowanie elementów na zamówienie:</b> Dysponując
            zaawansowanym zapleczem technologicznym oferujemy:{" "}
            <b>druk 3D z przesłanych plików</b> (STL, OBJ, 3MF i inne),{" "}
            <b>projektowanie modeli 3D od podstaw</b> – na podstawie szkiców,
            rysunków technicznych lub opisu.
            <br />
            <br />
            <b>Druk:</b> Realizujemy na drukarce Prusa XL wyposażonej w:
            <br />➔ Duże pole robocze: 35 × 35 cm
            <br />➔ Możliwość druku w pięciu kolorach (lub z pięciu różnych
            materiałów) jednocześnie
            <br />
            <br />
            <b>Wykonujemy m.in.:</b>
            <br />➔ Części techniczne i zamienne
            <br />➔ Prototypy i niestandardowe komponenty
            <br />➔ Elementy obudów, adaptery, mocowania
            <br />
            <br />
            <b>Technologia i materiały:</b> Drukujemy w technologii FDM z
            szerokiej gamy materiałów (PLA, PETG, ABS).
            <br />
            <br />
            <b>Weryfikacja:</b> Przed realizacją każdy model przechodzi
            weryfikację pod kątem wykonalności i zgodności z technologią druku.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Uslugi;
