const page = () => {
  return (
    <>
   <div className="md:flex md:justify-around">
    <div className="p-5 mt-16">  
<h1 className="text-4xl text-white font-bold">Hello I am <span className="text-5xl text-orange-500">Fatima</span></h1>
<h2 className="text-2xl text-white font-bold mt-3">Frontend Developer</h2>
<p className="text-white mt-2 font-serif">Hello I am frontend developer.This is my space to share my skills,<br></br> thoughts, and experience.
  So stay here with me ,to get more knowladge <br></br> abuot you want.I dedicated to crafting visually stunning and <br></br>highly functional web experiences. With a keen eye for design and a<br></br> deep understanding of modern web technologies, I transform ideas into <br></br>reality, ensuring every project is both beautiful and user-friendly.

</p>
<button className='bg-white h-[50px] w-[130px] text-orange-700 font-bold rounded-xl border-[9px] border-orange-500 mt-[15px] text-[15px] hover:bg-orange-500 hover:border-white hover:text-white'>Hire Me</button>
</div>
<div>
  <img src="profiile.png" className="h-[500px] w-[270]"></img>
</div>
    
</div>
    
    </>
  )
}

export default page;