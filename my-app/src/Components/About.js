import "./About.css";
import Footer from "./Footer";
import icon from "../Logo/BAd habits.jpg";
import selfie from "../Logo/jose.jpg";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';





export default function About() {
    return (
      <div>
        <img src={icon} alt="website-logo" id="about-logo"/>
        <Container maxW={'7xl'} p="12">
      <Heading as="h1" textAlign="center" borderTop="5px solid black" fontSize="30px">About</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  selfie
                }
                alt="some good alt text"
                objectFit="contain"
                height="450px"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          
            <h2 id="jose-h2">Jose Cid</h2>
          
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Passion for art would be considered an understatement. Jose Cid is a professional Tattoo Artist, specializing in both American traditional and Japanese traditional. Well trained for any type of art work, Jose's unique skillset is diversification. He can deliver any style of artwork at a master level. His artwork and craft is recognized and admired by many. He performs his artwork at his own private studio, which has a relaxing and zen atmosphere. Jose prioritizes the safety and comfort of all of his clients. Instructions on tattoo after-care are well thought out, and if you have any questions, he will comfortably answer them.
          </Text>
          
        </Box>
      </Box>
     
      <Divider marginTop="5" />
    </Container>
     

      <Footer id="about-footer"/>
      </div>
    );
  }

  /*
        <div id="about-container">
        <div id="color-div-1"></div>
        <div id="about-container">
        <h1 id="header-after-care">About</h1>
        <div>
        <img src={selfie} alt="jose-selfie" id="selfie"/>
        <p className="aftercare-p">Passion for art would be considered an understatement. Jose Cid is a professional Tattoo Artist, specializing in both American traditional and Japanese traditional. Well trained for any type of art work, Jose's unique skillset is diversification. He can deliver any style of artwork at a master level. His artwork and craft is recognized and admired by many. He performs his artwork at his own private studio, which has a relaxing and zen atmosphere. Jose prioritizes the safety and comfort of all of his clients. Instructions on tattoo after-care are well thought out, and if you have any questions, he will comfortably answer them.</p>
        <br></br>
        </div>
        </div>
        </div>
  */


        /*

         <section id="about-section">
      
        <div id="about-2-container">
        <img src={selfie} alt="jose-selfie" id="selfie"/>
        <div id="about-text-container"><p className="aftercare-p">Passion for art would be considered an understatement. Jose Cid is a professional Tattoo Artist, specializing in both American traditional and Japanese traditional. Well trained for any type of art work, Jose's unique skillset is diversification. He can deliver any style of artwork at a master level. His artwork and craft is recognized and admired by many. He performs his artwork at his own private studio, which has a relaxing and zen atmosphere. Jose prioritizes the safety and comfort of all of his clients. Instructions on tattoo after-care are well thought out, and if you have any questions, he will comfortably answer them.</p></div>
        </div>

      </section>

        */