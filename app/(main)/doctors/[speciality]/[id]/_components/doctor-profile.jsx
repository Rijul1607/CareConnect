"use client"
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AlertCircle, Calendar, ChevronDown, ChevronUp, Clock, FileText, Medal, User } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import SlotPicker from './slot-picker'
import AppointmentForm from './appointment-form'
import { useRouter } from 'next/navigation'

const DoctorProfile = ({doctor , availableDays}) => {
  const [showBooking,setShowBooking]=useState(false);
  const [selectedSlot,setSelectedSlot]=useState(null);
  const router=useRouter()

  const handleSlotSelect=(slot)=>{
    setSelectedSlot(slot)
  }
  const totalSlots=availableDays.reduce((total,day)=>total+day.slots.length,0)

  const toggleBooking=()=>{
    setShowBooking(!showBooking)

    if(!showBooking){
    setTimeout(()=>{
      document.getElementById("booking-section")?.scrollIntoView({
        behavior:"smooth"
      })

    },100)
  }
}

const handleBookingComplete=()=>{
  router.push('/appointments')

}


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      
      <div className='md:col-span-1'>
        <div className='md:sticky md:top-24'>
          <Card>
            <CardContent className="pt-6">
              <div className='flex flex-col items-center text-center'>
                <div className='relative w-32 h-32 rounded-full overflow-hidden mb-4 '>
                  {doctor.imageUrl?(<Image src={doctor.imageUrl} alt={doctor.name} fill className='object-cover'/>):(<div className='w-full h-full flex items-center justify-center'>
                    <User className='h-16 w-16 text-emerald-400'/>
                  </div>
                )}
                </div>
                <h2 className='text-xl font-bold'>
                  Dr.{doctor.name}
                </h2>
                <Badge variant="outline" className="bg-emerald-900/20 border-emerald-900/30 text-emerald-400 mb-4 shadow-[0_0_10px_#34d399] backdrop-blur-sm rounded-md mt-1">
                  {doctor.speciality}
                </Badge>
                
                <div className='flex items-center justify-center mb-2'>
                  <Medal className='text-emerald-400 h-4 w-4 mr-2'/>
                  <span className='text-muted-foreground'>
                    {doctor.experience} years experience
                  </span>
                </div>
                <Button onClick={toggleBooking} className="w-full mt-4">
                  {showBooking?(<>Hide Booking <ChevronUp className='ml-2 h-4 w-4'/></>):(<>Book Appointment <ChevronDown className='ml-2 h-4 w-4'/></>)}
                  
                </Button>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
      <div className='md:col-span-2 space-y-6'>
        <Card>
  <CardHeader>
    <CardTitle className="text-xl font-bold">About Dr.{doctor.name} </CardTitle>
    <CardDescription >{doctor.speciality}</CardDescription>
    
  </CardHeader>
  <CardContent className="space-y-6">
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <FileText className='h-5 w-5 text-emerald-400'/>
        <h3 className='font-medium'>Description</h3>
      </div>
      <p className='text-muted-foreground whitespace-pre-line'>{doctor.description}</p>
    </div>
    <Separator/>

    <div>
      <div className='flex items-center gap-2  '>
        <Clock className='h-5 w-5 text-emerald-400 '/>
        <h3 className='font-medium'>Availability</h3>
      </div>
    </div>


    {totalSlots>0 ? <div className='flex items-center '>
      <Calendar className='h-5 w-5 text-emerald-400 mr-2 '/>
      <p className='text-muted-foreground'>{totalSlots} time slots available for booking over the next 4 days</p>

    </div>: <Alert>
      <AlertCircle className='h-4 w-4'/>
      <AlertDescription>
        No  available slots for the next 4 days. Please check back later
      </AlertDescription>
      </Alert>}
  </CardContent>
 
</Card>

{showBooking && <div id="booking-section">
  <Card>
  <CardHeader>
    <CardTitle className="text-xl font-bold">Book an Appointment</CardTitle>
    <CardDescription>Select a time slot and provide details for your consultation</CardDescription>
    
  </CardHeader>
  <CardContent>
    {totalSlots > 0 ?( 
      <> 
      {!selectedSlot && (<SlotPicker days={availableDays} onSelectSlot={handleSlotSelect}/>)}

      {selectedSlot && (
        <AppointmentForm doctorId={doctor.id} slot={selectedSlot} onBack={()=>setSelectedSlot(null)} onComplete={handleBookingComplete}/>
      )}
    
     </> ):( <div className='text-center py-6'>
      <Calendar className='h-12 w-12 mx-auto text-muted-foreground mb-3'/> <h3 className='text-xl font-medium mb-2'>
        No Available Slots</h3>
        <p className='text-muted-foreground'>
          This doctor does&apos;t have any available appointment slots for the next 4 days.Please check back later or try another doctor
        </p>
        </div>
        )}
  </CardContent>
  
</Card>
  
  </div>}
      </div>
    </div>
  )
}

export default DoctorProfile