import "./Contact.css";
import map from "../Logo/map.png";
import Footer from "../Components/Footer";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import icon from "../Logo/BAd habits.jpg";
import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_ws4ux2g', 'template_ntue9c9', form.current, 'Zw1rwRU2oB9QO_fTy')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



    return (
      <div>
        <img src={icon} alt="website-logo" id="about-logo"/>
        
        <Container bg="" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#1b1c1e"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="145px"
                        variant="ghost"
                        color="#DCE2FF"
                        
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        (818)416-2745
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color="#DCE2FF"
                        
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        JoseCid6131@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="260px"
                        variant="ghost"
                        color="#DCE2FF"
                        
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        7108 De Soto Ave Canoga Park
                      </Button>
                      <img id="map" src={map} alt="map" />
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">      
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Type your name here..."/>
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Type your email here..."/>
              <label>Message</label>
              <textarea name="message" placeholder="Type your message here..."/>
              <input type="submit" value="Send" />
            </form>

                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
      <Footer id="about-footer"/>
      </div>
    );
  }