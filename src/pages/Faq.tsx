import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { useIntl } from "react-intl";

const Faq = () => {
  const intl = useIntl();
  const faqKeys = [
    { q: "faq.q1", a: "faq.a1" },
    { q: "faq.q2", a: "faq.a2" },
    { q: "faq.q3", a: "faq.a3" },
    { q: "faq.q4", a: "faq.a4" },
    { q: "faq.q5", a: "faq.a5" },
    { q: "faq.q6", a: "faq.a6" },
    { q: "faq.q7", a: "faq.a7" },
    { q: "faq.q8", a: "faq.a8" },
  ];

  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="2xl">
          {intl.formatMessage({ id: "faq.title" })}
        </Heading>
        <Text fontSize="lg" fontWeight="bold">
          {intl.formatMessage({ id: "faq.description" })}
        </Text>

        <UnorderedList spacing={4} mt={4}>
          {faqKeys.map((faq, index) => (
            <ListItem key={index}>
              <Text as="h5" fontWeight="bold" mb={1}>
                {intl.formatMessage({ id: faq.q })}
              </Text>
              <Text
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: faq.a }),
                }}
              />
            </ListItem>
          ))}
        </UnorderedList>

        <Heading as="h4" size="md" mt={6}>
          {intl.formatMessage({ id: "faq.end" })}
        </Heading>
      </VStack>
    </Box>
  );
};

export default Faq;
