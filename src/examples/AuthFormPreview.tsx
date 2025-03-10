import { useState } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Button,
  TextControl,
} from '@wordpress/components'

export default function AuthFormPreview() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <Card size="small">
      <CardHeader>
        <Text style={{ textAlign: 'center' }}>
          Sign In
        </Text>
      </CardHeader>
      
      <CardBody>
        <VStack spacing={3}>
          <TextControl
            label="Email"
            value={email}
            onChange={setEmail}
            type="email"
          />
          
          <TextControl
            label="Password"
            value={password}
            onChange={setPassword}
            type="password"
          />
          
          <HStack justify="space-between">
            <Button 
              variant="primary" 
              style={{ marginTop: '0.5rem' }}
            >
              Sign In
            </Button>
            
            <Button 
              variant="link"
            >
              Forgot password?
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}