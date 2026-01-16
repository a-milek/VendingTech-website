import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import products from "../data/products.json";

interface Product {
  id: number;
  name: string;
  desc: string;
  images: string[];
}

const ProductGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClose = () => {
    setSelectedProduct(null);
    onClose();
  };

  return (
    <>
      <Box
        bg="white"
        boxShadow="sm"
        width="100vw"
        mx="auto"
        px={6}
        py={4}
        alignItems="center"
        alignContent={"center"}
        textAlign={"center"}
      >
        <Heading mb={6}>NASZE PRODUKTY</Heading>

        <SimpleGrid spacing={4} columns={{ base: 2, md: 3, lg: 4 }}>
          {products.map((product) => (
            <Card
              key={product.id}
              maxW="sm"
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
              cursor="pointer"
              onClick={() => {
                setSelectedProduct(product);
                onOpen();
              }}
            >
              <CardBody>
                <Image
                  src={`/product_photos/${product.images[0]}.png`}
                  alt={product.name}
                  borderRadius="md"
                  mb={4}
                  objectFit="cover"
                  width="100%"
                />

                <Stack spacing={2}>
                  <Heading size="md">{product.name}</Heading>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Modal
        isOpen={isOpen && !!selectedProduct}
        onClose={handleClose}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          {selectedProduct && (
            <>
              <ModalHeader>{selectedProduct.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box
                  mb={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box width={{ base: "100%", md: "80%", lg: "60%" }}>
                    <Carousel
                      autoPlay
                      infiniteLoop
                      interval={5000}
                      showStatus={false}
                      showThumbs={true}
                      dynamicHeight={true}
                    >
                      {selectedProduct.images.map((img, index) => (
                        <div key={index}>
                          <img
                            src={`/product_photos/${img}.png`}
                            alt={`${selectedProduct.name} ${index + 1}`}
                            style={{
                              maxHeight: "400px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </Box>
                </Box>

                <Box
                  mt={4}
                  paddingBottom={5}
                  dangerouslySetInnerHTML={{ __html: selectedProduct.desc }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductGrid;
