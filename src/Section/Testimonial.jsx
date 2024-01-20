
import ClientGrid from '../Components/ClientGrid'
import { clients } from '../exports'

const Testimonial = () => {
  return (
    <section id='testimonial' className='w-full flex flex-col gap-5 h-fit p-5 lg:p-10 '>
      <p className='text-center text-xl '>Testimonial</p>
      <h1 className='text-green-600 font-bold text-2xl text-center leading-[68px] '>What Clients Says</h1>
      <p className='text-slate-950 text-2xl text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, laboriosam iusto architecto cupiditate possimus maxime quo. Vitae incidunt explicabo inventore.</p>
      <div className='flex justify-center items-center flex-wrap mt-5 w-full gap-6 '>
        {clients.map((cli) => (
          <div key={cli.name} className='w-60'>
            <ClientGrid  {...cli} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
