import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";

const Faq = () => {
  const faqs = [
    {
      question: "Czy moje dane są bezpieczne?",
      answer:
        "Tak, korzystamy z najnowszych technologii szyfrowania, aby chronić Twoje dane zgodnie z RODO.",
    },
    {
      question: "Jak mogę dokonać zwrotu?",
      answer:
        "Zwroty są proste – skontaktuj się z nami w ciągu 14 dni od zakupu, a przeprowadzimy Cię przez proces.",
    },
    {
      question: "Czy mogę zaufać jakości produktów?",
      answer:
        "Tak, wszystkie nasze produkty przechodzą rygorystyczne kontrole jakości – stawiamy na niezawodność!",
    },
    {
      question: "Jak skontaktować się z obsługą?",
      answer:
        "Napisz do nas na vendingtech.sklep@gmail.com lub zadzwoń pod +48 530 374 503 – odpowiadamy szybko i chętnie pomożemy.",
    },
    {
      question: "Jak długo trwa dostawa?",
      answer:
        "Dostawa trwa zazwyczaj 2-5 dni roboczych – otrzymasz powiadomienie o statusie zamówienia.",
    },
    {
      question: "Czy oferujecie wsparcie po zakupie?",
      answer:
        "Oczywiście! Nasz zespół jest dostępny, by pomóc Ci w razie problemów – skontaktuj się z nami w dowolnym momencie.",
    },
    {
      question: "Czy mogę śledzić moje zamówienie?",
      answer:
        "Tak, po wysyłce otrzymasz link do śledzenia przesyłki – wszystko pod kontrolą!",
    },
    {
      question: "Jakie metody płatności akceptujecie?",
      answer:
        "Akceptujemy przelewy, karty płatnicze i popularne portfele elektroniczne – wybierz najwygodniejszą opcję!",
    },
  ];

  return (
    <Box p={8} maxW="800px" mx="auto">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="2xl">
          Często zadawane pytania (FAQ)
        </Heading>
        <Text fontSize="lg" fontWeight="bold">
          Zadbaj o swoje wątpliwości – jesteśmy tu, by Ci pomóc!
        </Text>

        <UnorderedList spacing={4} mt={4}>
          {faqs.map((faq, index) => (
            <ListItem key={index}>
              <Text as="h5" fontWeight="bold" mb={1}>
                {faq.question}
              </Text>
              <Text>{faq.answer}</Text>
            </ListItem>
          ))}
        </UnorderedList>

        <Heading as="h4" size="md" mt={6}>
          Zaufaj nam i ciesz się zakupami bez obaw!
        </Heading>
      </VStack>
    </Box>
  );
};

export default Faq;
