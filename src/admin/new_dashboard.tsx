import React from 'react'
import styled from 'styled-components'
import {
  Box,
  H2,
  H5,
  H4,
  Text,
  Illustration,
  IllustrationProps,
  Button,
} from '@adminjs/design-system'

import { useTranslation } from '../../node_modules/adminjs/src/frontend/hooks/'

const pageHeaderHeight = 284
const pageHeaderPaddingY = 74
const pageHeaderPaddingX = 250

export const DashboardHeader: React.FC = () => {
  const { translateMessage } = useTranslation()
  return (
    <Box position="relative" overflow="hidden">
      <Box
        bg="grey100"
        height={pageHeaderHeight}
        py={pageHeaderPaddingY}
        px={['default', 'lg', pageHeaderPaddingX]}
      >
        <Text textAlign="center" color="white">
          <H2>Benvenuto!</H2>
          <Text opacity={0.8}>
            sottotitolo
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

export const Graphs: React.FC = () => {
  const { translateMessage } = useTranslation()
  return (
    <Box position="relative" overflow="hidden">
      <Box
        bg="grey100"
        height={400}
        width= {1000}
        py={100}
        px={['default', 'lg', pageHeaderPaddingX]}
        display= "flex"
      >
        <Text textAlign="center" color="white">
          <H2>TIMELINE</H2>
        </Text>
      </Box>
    </Box>
  )
}

type BoxType = {
  title: string;
  
}

const boxes = ({ translateMessage }): Array<BoxType> => [{

  title: translateMessage('PC NO'),
}, {
 
  title: translateMessage('PC OK'),
}, {
  title: translateMessage('PC off'),
}]

const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }): string => theme.colors.grey100};
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }): string => theme.colors.primary100};
    box-shadow: ${({ theme }): string => theme.shadows.cardHover};
  }
`

Card.defaultProps = {
  variant: 'white',
  boxShadow: 'card',
}

export const Dashboard: React.FC = () => {
  const { translateMessage, translateButton } = useTranslation()
  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={['xl', 'xl', '-100px']}
        mb="xl"
        mx='auto'
        px={['default', 'lg', 'xxl', '0']}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={2 / 3}
      >
        {boxes({ translateMessage }).map((box, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index} width={[1, 1/2, 1/3]} p="lg">
            <Card as="a" >
              <Text textAlign="center">
                <H5 mt="lg">{box.title}</H5>
              </Text>
            </Card>
          </Box>
        ))}
         <Graphs />
    </Box>
    </Box>
  )
  
}

export default Dashboard
