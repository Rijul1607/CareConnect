"use client"
import { updateDoctorStatus } from '@/actions/admin';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import useFetch from '@/hooks/use-fetch';
import { format } from 'date-fns';

import { Check, ExternalLink, FileText, Medal, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {BarLoader} from "react-spinners";

const PendingDoctors = ({doctors}) => {
    const [selectedDoctor,setSelectedDoctor]=useState(null);

    const{
        loading,
        data,
        fn:submitStatusUpdate,
    }=useFetch(updateDoctorStatus);

    const handleViewDetails=(doctor)=>{
        setSelectedDoctor(doctor);
    }
    const handleCloseDialog=()=>{
        setSelectedDoctor(null);
    }
    const handleUpdateStatus=async(doctorId,status)=>{
        if(loading)return;

        const formData=new FormData();
        formData.append("doctorId",doctorId);
        formData.append("status",status);

        await submitStatusUpdate(formData);


    }

    useEffect(()=>{
        if(data && data?.success){
            handleCloseDialog();
        }
    },[data]);
  return (
    <div><Card className="bg-muted/20">
  <CardHeader>
    <CardTitle className="text-xl font-bold">Pending Doctor Verification</CardTitle>
    <CardDescription>Review and Approve doctor applications</CardDescription>
    
  </CardHeader>
  <CardContent>
    {doctors.length===0?(<div className='text-center py-8 text-muted-foreground'>No pending verification requests at this time</div>):(<div className='space-y-4'> {doctors.map(doctor=>(
        <Card key={doctor.id} className="bg-background border-emerald-900/20 hover:border-emerald-700/30 hover:shadow-[0_0_10px_#34d399] backdrop-blur-sm transition-all">
            <CardContent className="p-4">
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                <div className='flex items-center gap-3' >
                    <div className='bg-muted/20 rounded-full p-2 shadow-[0_0_10px_#34d399] backdrop-blur-sm '>
                        <User className='h-5 w-5 text-emerald-400'/>
                    </div>
                    <div>
                        <h3 className='font-medium'>
                            {doctor.name}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            {doctor.speciality} • {doctor.experience} years experience
                        </p>
                    </div>
            </div>
                    <div className="flex items-center gap-2 self-end md:self-auto">
                        <Badge variant="outline" className="bg-amber-900/20 border-amber-900/30 text-amber-400 ">
                            Pending
                        </Badge>
                        <Button variant="outline" size="sm" className="border-bg-background" onClick={()=>handleViewDetails(doctor)}>
                            View Details

                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    ))}</div>)}
  </CardContent>
  
</Card>
{
    selectedDoctor && (
        <Dialog open={!!selectedDoctor} onOpenChange={handleCloseDialog}>
  
  <DialogContent className="max-w-3xl">
    <DialogHeader>
      <DialogTitle className="text-xl font-bold">Doctor Verification Details</DialogTitle>
      <DialogDescription>
        Review the doctor&apos;s information carefully before making a decision
      </DialogDescription>
    </DialogHeader>
     <div className="space-y-6 py-4">
              {/* Basic Info */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Full Name
                  </h4>
                  <p className="text-base font-medium text-white">
                    {selectedDoctor.name}
                  </p>
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Email
                  </h4>
                  <p className="text-base font-medium text-white">
                    {selectedDoctor.email}
                  </p>
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Application Date
                  </h4>
                  <p className="text-base font-medium text-white">
                    {format(new Date(selectedDoctor.createdAt), "PPP")}
                  </p>
                </div>
              </div>
              <Separator/>
              <div className='space-y-4'>
                <div className='flex items-center gap-2'>
                    <Medal className='h-5 w-5 text-emerald-400' />
                    <h3 className='font-medium'>
                        Professional Information
                    </h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6'>

                <div className='space-y-1'>
                    <h4 className='text-sm text-muted-foreground font-medium'>
                        Specialty
                    </h4>
                    <p>
                        {selectedDoctor.speciality}
                    </p>
                </div>
                <div className='space-y-1'>
                    <h4 className='text-sm text-muted-foreground font-medium'>
                        Years of Experience
                    </h4>
                    <p>
                        {selectedDoctor.experience} years
                    </p>
                </div>

                <div className='space-y-1 col-span-2'>
                    <h4 className='text-sm text-muted-foreground font-medium'>
                        Credentials
                    </h4>

                    <div className='flex items-center'>
                        <a href={selectedDoctor.credentialUrl} target='_blank' rel="noopener noreferrer" className='flex items-center text-emerald-400 hover:text-emerald-300'>
                            View Credentials <ExternalLink className='h-4 w-4 ml-1'/>
                        </a>
                    </div>
                </div>

              </div>
              </div>
              <Separator/>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <FileText className='h-5 w-5 text-emerald-400'/>
                    <h3 className='font-medium'>
                        Service Description
                    </h3>
                </div>
                <p className='text-muted-foreground whitespace-pre-line'> {selectedDoctor.description} </p>
              </div>
                </div>
                {loading && <BarLoader width={"100%"} color="#36d7b7"/>}

<DialogFooter className="flex sm:justify-between">
    <Button  disabled={loading} className="bg-red-600 hover:bg-red-800"
    
    onClick={()=>handleUpdateStatus(selectedDoctor.id,"REJECTED")}>
        <X className='h-4 w-4 mr-2'/>
        Reject
    </Button>
    <Button
    disabled={loading} className="bg-emerald-600 hover:bg-emerald-700" onClick={()=>handleUpdateStatus(selectedDoctor.id,"VERIFIED")}>
        <Check className='h-4 w-4 mr-2' />
        Approve
    </Button>

</DialogFooter>
  </DialogContent>
</Dialog>

    )}

</div>
  )
}

export default PendingDoctors