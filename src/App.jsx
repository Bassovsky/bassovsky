import React from 'react'
import { Button } from './components/Button'
import { Card, CardContent } from './components/Card'

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Simple Digital Store</h1>
      <Card>
        <CardContent>
          <p>This is a test digital product</p>
          <Button>Buy Now</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
