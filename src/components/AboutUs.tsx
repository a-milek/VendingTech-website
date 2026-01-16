import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <>
      <Box
        bgImage="ChatGPT_Image_6_sie_2025_21_32_25_2048x.png"
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        boxShadow="sm"
        width={"100vw"}
        px={6}
        py={4}
        alignItems="center"
        overflow="hidden"
        textAlign={"center"}
      >
        <Heading color={"#28c5fe"} py={4}>
          O NAS
        </Heading>

        <Stack
          spacing={5}
          direction={{ base: "column", md: "row" }}
          width={"70%"}
          mx="auto"
        >
          <Text color="white" textAlign={"justify"}>
            {" "}
            Cześć! Nazywam się <Text as="b">Paweł Tuszkiewicz</Text> i od ponad
            15 lat działam w świecie technologii i vendingu. Zawsze pociągały
            mnie rzeczy, które inni uznają za „nienaprawialne” – lubię
            rozwiązywać problemy tam, gdzie większość odpuszcza. <br /> <br />
            <Text as="b">VendingTech</Text> to efekt tej pasji. Chciałem
            stworzyć firmę, która łączy praktyczne podejście z otwartością na
            nowe technologie. Nie działam według sztywnych schematów – automaty
            traktuję jak przestrzeń do eksperymentowania i wdrażania usprawnień,
            które realnie coś zmieniają. Korzystam z własnych projektów,
            nietypowych rozwiązań i wiedzy zdobytej przez lata pracy przy
            różnych systemach. <br /> <br />
            Poza vendingiem tworzę zdalnie sterowane modele latające i angażuję
            się w projekty technologiczne, które rozwijają moje umiejętności i
            pozwalają patrzeć na technikę z innej perspektywy. <br /> <br />
            Jeśli szukasz firmy, która łączy doświadczenie z elastycznym
            podejściem i realnym zaangażowaniem w każdy projekt –{" "}
            <Text as="b">zapraszamy do współpracy.</Text>
          </Text>
          <Image src="obraz_2025-08-21_171629772_310x.png"></Image>
        </Stack>
      </Box>
    </>
  );
};

export default AboutUs;
