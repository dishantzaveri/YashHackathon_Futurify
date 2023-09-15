import React from 'react';
import {
  Box,
  Container,
  Heading,
  Grid,
  Text,
  Badge,
  ListItem,
  UnorderedList,
  Divider
} from '@chakra-ui/react';

const productSuggestions = [
  {
    name: 'Product A',
    price: '$399',
    rating: 4.8,
    description:
      'Product A is a premium solution known for its exceptional build quality and feature-rich experience. It offers advanced functionality for demanding users.'
  },
  {
    name: 'Product B',
    price: '$349',
    rating: 4.6,
    description:
      "Product B is a mid-range option with a balance of performance and affordability. It's suitable for both casual and professional users."
  },
  {
    name: 'Product C',
    price: '$499',
    rating: 4.9,
    description:
      "Product C is a top-tier offering with cutting-edge technology and unparalleled performance. It's the ultimate choice for power users."
  }
];

const competitorAnalysis = [
  {
    competitorName: 'Competitor X',
    price: '$379',
    rating: 4.2,
    pros: ['Competitive pricing', 'Wide availability'],
    cons: ['Limited features', 'Inconsistent customer support'],
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    customerSupport: 'Mon-Fri 9 AM - 5 PM'
  },
  {
    competitorName: 'Competitor Y',
    price: '$449',
    rating: 4.4,
    pros: ['Robust feature set', 'Strong user community'],
    cons: ['Higher price point', 'Occasional software bugs'],
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    customerSupport: '24/7'
  },
  {
    competitorName: 'Competitor Z',
    price: '$399',
    rating: 4.1,
    pros: ['Good value for money', 'Stable performance'],
    cons: ['Slightly outdated design', 'Limited third-party integrations'],
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    customerSupport: 'Mon-Sat 9 AM - 6 PM'
  }
];

function CompetitorAnalysisPage() {
  return (
    <Box bg='#121212' color='white' mt={20} minHeight='100vh' fontFamily='sans-serif'>
      <Container maxW='container.lg' py={4}>
        <Box bg='#1e1e1e' p={6} rounded='lg'>
          <Heading as='h2' fontSize='2xl' fontWeight='bold' mb={4} color='white'>
            Product Suggestions
          </Heading>
          <Grid
            gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={4}>
            {productSuggestions.map((product, index) => (
              <Box key={index} bg='#333' p={4} rounded='lg' boxShadow='dark-lg' textAlign='left'>
                <Heading as='h3' fontSize='xl' fontWeight='semibold' color='white'>
                  {product.name}
                </Heading>
                <Text color='#ccc'>{product.price}</Text>
                <Text color='#aaa'>{product.description}</Text>
                <Badge colorScheme='yellow' mt={2}>
                  Rating: {product.rating}
                </Badge>
              </Box>
            ))}
          </Grid>
        </Box>

        <Divider my={8} borderColor='#444' />

        <Box bg='#1e1e1e' p={6} rounded='lg'>
          <Heading as='h2' fontSize='2xl' fontWeight='bold' mb={4} color='white'>
            Competitor Analysis
          </Heading>
          <Grid
            gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={4}>
            {competitorAnalysis.map((competitor, index) => (
              <Box key={index} bg='#333' p={4} rounded='lg' boxShadow='dark-lg' textAlign='left'>
                <Heading as='h3' fontSize='xl' fontWeight='semibold' color='white'>
                  {competitor.competitorName}
                </Heading>
                <Text color='#ccc'>{competitor.price}</Text>
                <Badge colorScheme='yellow' mt={2}>
                  Rating: {competitor.rating}
                </Badge>
                <Heading as='h4' fontSize='lg' fontWeight='semibold' mt={4} color='white'>
                  Pros:
                </Heading>
                <UnorderedList color='#aaa'>
                  {competitor.pros.map((pro, i) => (
                    <ListItem key={i}>{pro}</ListItem>
                  ))}
                </UnorderedList>
                <Heading as='h4' fontSize='lg' fontWeight='semibold' mt={4} color='white'>
                  Cons:
                </Heading>
                <UnorderedList color='#aaa'>
                  {competitor.cons.map((con, i) => (
                    <ListItem key={i}>{con}</ListItem>
                  ))}
                </UnorderedList>
                <Heading as='h4' fontSize='lg' fontWeight='semibold' mt={4} color='white'>
                  Features:
                </Heading>
                <UnorderedList color='#aaa'>
                  {competitor.features.map((feature, i) => (
                    <ListItem key={i}>{feature}</ListItem>
                  ))}
                </UnorderedList>
                <Text color='#aaa' mt={4}>
                  Customer Support: {competitor.customerSupport}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default CompetitorAnalysisPage;
