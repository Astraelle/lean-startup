<<<<<<< Updated upstream
export default function Temoignages(){
    return(
        <>
            <section className="pt-40 h-screen w-full">
                <div className='grid justify-items-center'>
                    <p className='bg-[#32BF84] w-40 h-10 text-center text-white grid items-center rounded-3xl -rotate-1'>RESSOURCES</p>
                </div>
                <h2 className="xl:text-6xl font-bold text-center pt-10">Témoignages de nos kollabers</h2>
                <p className="text-center pt-10">Lorem ipsum dolor sit amet consectetur. Tempor diam interdum arcu gravida ipsum nisl nec pellentesque.<br/> Ullamcorper quis nunc lacinia faucibus accumsan proin sapien.</p>
            </section>
        </>
    )
=======
import Breadcrumb from '../../(components)/ui/Breadcrumb';

export default function Temoignages(){
    return(
        <>
            <div className="pt-40">
                <div className="px-4 sm:px-6 py-2">
                    <Breadcrumb />
                </div> 
                <section className="h-screen w-full">
                    <div className='grid justify-items-center'>
                        <p className='bg-[#32BF84] w-40 h-10 text-center text-white grid items-center rounded-3xl -rotate-1'>RESSOURCES</p>
                    </div>
                    <h2 className="xl:text-6xl font-bold text-center pt-10">Témoignages de nos kollabers</h2>
                    <p className="text-center pt-10">Lorem ipsum dolor sit amet consectetur. Tempor diam interdum arcu gravida ipsum nisl nec pellentesque.<br/> Ullamcorper quis nunc lacinia faucibus accumsan proin sapien.</p>
                </section>
            </div>
        </>
    )
>>>>>>> Stashed changes
}