import React from 'react'
import { Link } from 'react-router-dom'
import DocNavbar from './DocNavbar'
const DocDashboard = () => {
  return (
    <>
    <DocNavbar/>
     <div className='relative'>
  <img className='object-cover w-full h-auto col-span-1' src='https://st4.depositphotos.com/9999814/22690/i/450/depositphotos_226904298-stock-photo-male-doctor-using-mobile-phone.jpg' alt='banner1' />
  {/* 1st banner */}
  <div className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:flex flex-col justify-center items-center">
    <span className="block text-black text-4xl p-2 font-semibold">Revolutionize your health care experience with Medico</span>
    <Link to=''>
      <button className='bg-blue-900  text-white rounded-md mt-8 px-6 py-3 c'>Take an Appointment</button>
    </Link>
  </div>
  {/* end of 1st banner */}
  </div>
  <div className='sm:hidden text-center'>
  <span className="block text-black text-xl p-2 font-light">Revolutionize your health care experience with Medico</span>
    <Link to=''>
      <button className='bg-blue-900  text-white rounded-md mt-8 px-3 py-1'>Take an Appointment</button>
    </Link>
  </div>


      {/* specialisation cards */}
      <h1 className='flex justify-center font-semibold text-4xl mt-1'>Our specializations</h1>
      <div className='bg-gray-200 h-auto'>
        <div className='flex justify-evenly'>

        <div className='w-auto h-auto bg-white my-7 mx-7'> 
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.khadehospital.com/wp-content/uploads/2021/03/Gynaecology.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gynecology</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">"Gynecology, a branch of medicine dedicated to women's reproductive health,Our gynecology services prioritize women's well-being by offering compassionate care, Whether you're seeking routine care or specialized treatment, our team of experienced gynecologists is here to support you at every stage of your reproductive health journey.".</p>
            </div>
           </a>
        </div>

        <div className='w-auto h-auto bg-white my-7 mx-7 '> 
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIk6FFOG9bUl_pGUpnAyqtbhhm5bzeGwgFGm4ZW-_Qd83CIA4r_UrK9t3TfLre2tv5xTA&usqp=CAU" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cardiology</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                "Cardiology, the specialized field of medicine focusing on the heart and cardiovascular system. Our cardiology services prioritize heart health through thorough assessments,and personalized treatment plans. With a team of dedicated cardiologists, we aim to provide exceptional care to enhance heart wellness and improve quality of life.".</p>
            </div>
           </a>
        </div>

        </div>
        <div className='flex justify-evenly'>
        <div className='w-auto h-auto bg-white my-7 mx-7'> 
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://media.istockphoto.com/id/1388254153/photo/shot-of-a-baby-sitting-on-her-mothers-lap-while-being-examined-by-a-doctor.jpg?s=612x612&w=0&k=20&c=PBzQWrBVp8pIyYBH_ds8Bu8y4Y4j2jdL3Z2n8L1W0v4=" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pediatrics</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">"Pediatrics, the branch of medicine dedicated to the health of children,Our pediatric services prioritize the needs of children, providing preventive care With an experienced team of pediatricians, we focus on promoting healthy growth and empowering families with the knowledge they need to nurture their child's health".</p>
            </div>
           </a>
        </div>

        <div className='w-auto h-auto bg-white my-7 mx-7 '> 
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shutterstock.com/image-photo/dermatology-clinic-skilled-female-dermatologist-260nw-1166006287.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dermatology</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            "Dermatology focuses on skin health, offering personalized care for various conditions. Our expert dermatologists provide thorough evaluations and tailored treatments to promote clear, healthy skin. Whether it's acne, eczema, or other concerns, we're dedicated to enhancing your skin's well-being and boosting your confidence."
            .</p>
            </div>
           </a>
        </div>
        </div>
     </div>
      {/* end of specialisation */}


        {/* how its works session */}
      <h1 className='flex justify-center font-semibold text-4xl mt-1'>How it works</h1>
      <div className='bg-gray-200 h-96 flex justify-around'>
        <div className='mx-24 my-24'>
          <img className='w-24 h-auto mx-16' src='https://media.istockphoto.com/id/1225961106/vector/doctor-flat-line-icon-vector-outline-illustration-of-male-physician-in-coat-with-stethoscope.jpg?s=612x612&w=0&k=20&c=HIO_PYuz5h8lHAPUFWVLq5wrTmRDrKxu5-G4_4t9Z0A=' alt='doctor'></img>
          <h1 className='font-medium text-xl text-black mx-10 mb-2 p-5'>Choose your doctor</h1>
        </div>

        <div className='mx-24 my-24'>
            <img className='w-24 h-auto mx-16' src='https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-event-schedule-icon-planner-abstract-png-image_5116181.png' alt='doctor'></img>
            <h1 className='font-medium text-xl text-black mx-10 mb-2 p-5'>Book an Appointment</h1>
          </div>

          <div className='mx-24 my-24'>
            <img className='w-24 h-auto mx-16' src='https://t3.ftcdn.net/jpg/05/12/67/90/360_F_512679017_Ajq44deli5DOVpY8jzHhSrhDre1vQBdB.jpg' alt='doctor'></img>
            <h1 className='font-medium text-xl text-black mx-10 mb-2 p-5'>Make payment</h1>
          </div>

          <div className='mx-24 my-24'>
            <img className='w-24 h-auto mx-16' src='https://png.pngtree.com/png-clipart/20230925/original/pngtree-flat-vector-image-of-remote-video-consultation-with-family-doctor-vector-png-image_12864336.png' alt='doctor'></img>
            <h1 className='font-medium text-xl text-black mx-10 mb-2 p-5'>Start session</h1>
          </div>
      </div>
      {/* end of how it works */}

    </>
  );
}
export default DocDashboard
