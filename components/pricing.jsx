import React from 'react'
import { Card, CardContent } from './ui/card';
import { PricingTable } from '@clerk/nextjs';

const Pricing = () => {
  return (
   <Card>
    <CardContent>
        <PricingTable checkoutProps={{
            appearance:{
                elements:{
                    drawerRoot:{
                        zIndex:200,
                    }
                }
            }
        }}/>
    </CardContent>
   </Card>
  )
}

export default Pricing;