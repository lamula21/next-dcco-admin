import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Tailwind,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface DefaultEmailProps {
    data?: object;
  }
  
  const formatContent = (content) => {
    const blocks = content.blocks
    const data = blocks.map(block => {
      const type = block.type
      if(type == "header"){
        return (
          <Heading className='text-3xl'>{block.data.text}</Heading>
        )
      }
      if(type == "paragraph"){
        const text = block.data.text.replace(/<br\s*\/?>/gi, '')
        return (
          <Text className='text-lg font-medium text-gray-700'>{text}</Text>
        )
      }
      if(type == "image"){
        return (
          <Img className=' inline' src={block.data.file.url} width="400" height="400"/>
        )
      }
    })
  
    return data
  }
  
  export const DefaultEmail = ({
    data,
  }: DefaultEmailProps) => (
    <Html lang='en' dir='ltr'>
      <Head />
      <Tailwind>
        <Body className='bg-white mx-auto my-12 font-sans'>
          <Container className='p-8 rounded-lg shadow-lg mb-10 text-center'>
            {formatContent(data)}
          </Container>
          <Container className='p-8 rounded-lg shadow-lg'>
            <Button 
              className='bg-purple-600 text-white font-bold px-2 py-4 rounded-md'
              href='https://dccodeofficials.com/index.php/about-us/'
              >
              Visit our website
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default DefaultEmail;