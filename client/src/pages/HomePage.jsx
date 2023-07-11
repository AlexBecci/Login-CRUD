import React from 'react'

function HomePage() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-100 my-4">¡Bienvenido a mi plataforma de creación de tareas!</h1>
      <p className="text-base sm:text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto my-4 text-gray-200">¿Alguna vez has deseado tener una forma sencilla y eficiente de organizar tus tareas diarias? ¡No busques más! Esta página web está diseñada específicamente para ayudarte a administrar tu tiempo de manera efectiva y mantener un registro claro de todas tus actividades.</p>
      <p className="text-base sm:text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto my-4 text-gray-200">La
      interfaz intuitiva y fácil de usar te permite crear notas y tareas de forma rápida y sencilla.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-sky-500 inline-flex"></div>
      </div>
    </div>
    
    <a href="/register">

    <button className="flex mx-auto mt-16 text-white border-2 border-sky-500 py-2 px-8 focus:outline-none hover:border-sky-300  text-lg rounded-full hover:scale-105 duration-200">Comenzar</button>
    </a>
  </div>
</section>
  )
}

export default HomePage