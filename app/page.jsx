import Pricing from "@/components/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { ArrowRight, Check, Stethoscope} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="bg-background">
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline"
            className="bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm font-medium px-4 py-2 shadow-[0_0_10px_#34d399] backdrop-blur-sm rounded-md  tracking-wide">HealthCare Made Simple</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wrap leading-tight">Connect with doctors <br/> <span className="gradient-title">anytime,anywhere</span></h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
              Book appointments, consult via video call, and manage your healthcare journey all in one secure platform.
            </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/onboarding">
              Get Started <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:bg-muted/80">
              <Link href="/doctors">
              Find Doctors 
              </Link>
            </Button>
          </div>
          </div>
        <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
          <Image src="/banner.png" alt="doctor consultation" fill priority className="object-cover md:pt-14 rounded-xl"/>
        </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> How it Works</h2>
          <p className="text-muted-foreground text-lg  max-w-2xl mx-auto">
            Our platform makes healthcare accessible with just a few clicks
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature,index)=>{
            return(
              <Card key={index} className="border-emerald-900/20 hover:border-emerald-800/40 hover:shadow-[0_0_10px_#34d399] transition-all duration-300">
  <CardHeader className="pb-1">
    <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4 shadow-[0_0_10px_#34d399] backdrop-blur-sm">{feature.icon}</div>
    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
  </CardHeader>
  <CardContent className="text-muted-foreground">
    <p>{feature.description}</p>
  </CardContent>
  
  
</Card>

            );
          })}
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm font-medium px-4 py-1 shadow-[0_0_10px_#34d399] backdrop-blur-sm rounded-md  tracking-wide mb-4">Affordable HealthCare</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultation Packages</h2>
          <p className="text-muted-foreground text-lg  max-w-2xl mx-auto">
            Choose the perfect consultation package that fits your healthcare needs
          </p>

        </div>
        <div>
          {/* {pricing tab} */}
          <Pricing/>

          <Card className="mt-12 bg-muted/20 border-emerald-900/30">
  <CardHeader>
    <CardTitle className=" text-xl font-semibold flex items-center"><Stethoscope className="h-5 w-5 mr-2 text-emerald-400  "/> How Our Credit System Works</CardTitle>
 
  </CardHeader>
  <CardContent>
    <ul className="space-y-3">

    {creditBenefits.map((benefit,index)=>{
      return<li key={index} className="flex items-start">
        <div className="mr-3 mt-1 p-1 bg-emerald-900/20 rounded-full">
          <Check className="h-4 w-4 text-emerald-400 shadow-[0_0_10px_#34d399] backdrop-blur-sm rounded-md  tracking-wide "/>
          


        </div>
          <p className="text-muted-foreground" dangerouslySetInnerHTML={{__html:benefit}}/>

      </li>

    })}
    </ul>
  </CardContent>
  
</Card>
        </div>
      </div>
    </section>
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline"
            className="bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-sm font-medium px-4 py-1 shadow-[0_0_10px_#34d399] backdrop-blur-sm rounded-md  tracking-wide mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground text-lg  max-w-2xl mx-auto">
            Hear from patients and doctors who use our platform
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial,index)=>{
            return(
              <Card key={index} className="border-emerald-900/20 hover:border-emerald-800/40 hover:shadow-[0_0_10px_#34d399] transition-all duration-300">
  
  <CardContent className="pt-3">
    <div className="flex items-center mb-4">
    <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4 shadow-[0_0_10px_#34d399] backdrop-blur-sm  tracking-wide">
      <span className="text-emerald-400 font-bold">{testimonial.initials}</span>
    </div>
    <div>
      <h4 className="font-semibold">{testimonial.name}</h4>
      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
    </div>
    
    </div>
      <p className="test-muted-foreground">
        &quot;{testimonial.quote}&quot;
      </p>
  </CardContent>
  
  
</Card>

            );
          })}
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-emerald-900/30 to-teal-700/20 border-emerald-800/20 shadow-[0_0_10px_#34d399] backdrop-blur-sm  tracking-wide">
          <CardContent className="pt-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to take control of your healthcare?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users who have simplified their healthcare journey with our platform. Get started today and experience healthcare the way it should be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" >
                <Button size="lg"  asChild>
                  <Link href="/sign-up">Sign Up Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
 
  </div>
  );
}
