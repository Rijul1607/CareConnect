

import { PageHeader } from '@/components/page-header';
import React from 'react'
import { getDoctorsBySpecialty } from "@/actions/doctors-listing";
import DoctorCard from '@/components/doctor-card';


const SpecialityPage = async ({params}) => {
  
    const {speciality}= await params;
     if (!speciality) {
    redirect("/doctors");
  }

  // Fetch doctors by specialty
  const { doctors, error } = await getDoctorsBySpecialty(speciality);

  if (error) {
    console.error("Error fetching doctors:", error);
  }

    return <div>
        <PageHeader
        
        title={speciality.split("%20").join(" ")}
        backLink="/doctors"
        backLabel="All Specialities"

        />

        {doctors && doctors.length>0?( <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> 
            {doctors.map((doctor)=>(
                <DoctorCard key={doctor.id} doctor={doctor}/>

            ))}
        </div>):(<div className='text-center py-12'>
            <h3 className='text-xl font-medium mb-2'>No doctors available</h3>
            <p className='text-muted-foreground'>
                There are currently no verified doctors in this speciality.Please check back later or choose another speciality
            </p>
        </div>)}
    </div>
  
};

export default SpecialityPage