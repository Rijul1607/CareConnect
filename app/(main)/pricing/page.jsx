import { ArrowLeft} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import Pricing from '@/components/pricing'

const PricingPage = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
        <div className='flex justify-start mb-2'>
            <Link href="/" className='flex items-center text-muted-foreground hover:text-white transition-colors'>
            <ArrowLeft className='h-4 w-4 mr-2'/>
            Back To home
            </Link>
        </div>
        <div className='max-w-full mx-auto mb-12 text-center'>
            <Badge variant="outline"
            className="bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm font-medium px-4 py-2 shadow-[0_0_10px_#34d399] backdrop-blur-sm rounded-md  tracking-wide mb-4">Affordable Pricing</Badge>

            <h1 className='text-4xl md:text-5xl font-bold gradient-title mb-4'>
                Simple,Transparent Pricing
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                Choose the perfect consultation package that fits your healthcare needs with no hidden fees or longterm commitments
            </p>
        </div>
            <Pricing/>

            <div className='max-w-3xl mx-auto mt-16 text-center'>
                <h2 className='text-2xl font-bold mb-2'>
                    Questions? We're Here to Help
                </h2>
                <p className='text-muted-foreground mb-4'>
                    Contact our support team at support@careconnect.com
                </p>
            </div>
    </div>
  )
}

export default PricingPage