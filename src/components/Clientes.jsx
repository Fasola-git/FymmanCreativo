import Cliente from "./Cliente";

export default function Clientes(){
      return (

         <div id="Clientes" className="min-h-[100dvh] flex flex-col gap-10 lg:gap-12 bg-1 justify-center" >
                {/* <div className="flex flex-row justify-around">
                    <h2 className="text-6 text-6xl basis-1/3 whitespace-nowrap">Nuestros Clientes</h2>
                    <div></div>
                    <div></div>
                </div>
                <p className="text-3xl text-9 mx-[10%] flex"> FYMMAN Creativo, cuenta con una amplia cartera de 
                clientes, de diferentes Rubros, que confían en nuestro 
                trabajo. Esto es debido al rendimiento y a las diferentes 
                tareas que determinan soluciones inmediatas según su 
                visión de negocio.</p>
                <p className="text-3xl text-9 mx-[10%] flex">Creemos que la metodología de trabajo en equipo es 
                fundamental para el desarrollo de la comercialización
                que esperan de nosotros.</p> */}
                <div className="flex flex-col gap-5 lg:gap-0 min-h-[100dvh]">
                    <div className="flex flex-row justify-between items-center mx-[5%] lg:mx-[10%]">
                        <div className=" w-5/12 lg:w-2/12 ">
                            <img src="../../public/img/tumarca-persona.png" alt="" className=" left-[25%]" />
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-5 w-6/12 lg:w-1/2 ">
                            <h3 className="text-6 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>TU MARCA</h3>
                            <p className="text-9 text-lg lg:text-2xl">Ofrecemos simplicidad y versatilidad de diseño en la creación de tu logotipo.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-[5%] lg:mx-[10%]">
                        <div className="flex flex-col gap-1 lg:gap-5 w-6/12 lg:w-1/2">
                            <h3 className="text-6 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>TU PROPIA WEBSITE</h3>
                            <p className="text-9 text-lg lg:text-2xl">Construimos tu marca en línea con nuestros servicios de diseño web.</p>
                        </div>
                        <div className="w-5/12 lg:w-3/12">
                            <img src="../../public/img/tuweb-persona.png" alt="" className="  left-[25%]" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-[5%] lg:mx-[10%]">
                        <div className="w-5/12 lg:w-2/12 ">
                            <img src="../../public/img/jingle-persona.png" alt="" className=" left-[25%] -top-24" />
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-5 w-6/12 lg:w-1/2">
                            <h3 className="text-6 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>JINGLE</h3>
                            <p className="text-9 text-lg lg:text-2xl">Creamos la conexión emocional con el público a través de la Composición y Dirección Musical para tu marca.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-[5%] lg:mx-[10%]">
                        <div className="flex flex-col gap-1 lg:gap-5 w-6/12 lg:w-1/2">
                            <h3 className="text-6 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>VIDEO</h3>
                            <p className="text-9 text-lg lg:text-2xl">Realizamos la creación de Videos Institucionales, generando el interés de los clientes adecuados.</p>
                        </div>
                        <div className="w-5/12 lg:w-2/12">
                            <img src="../../public/img/video-persona.png" alt="" className="" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-[5%] lg:mx-[10%]">
                        <div className="w-5/12 lg:w-2/12 ">
                            <img src="../../public/img/fotoproducto-persona.png" alt="" className=" left-[25%] -top-24" />
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-5 w-6/12 lg:w-1/2">
                            <h3 className="text-6 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>FOTO-PRODUCTO</h3>
                            <p className="text-9 text-lg lg:text-2xl">Tenemos la opción de crear tu propio Catálogo de Productos para instalarlos en tu tienda online.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-[5%] lg:mx-[10%]">
                        <div className="flex flex-col gap-1 lg:gap-5 w-6/12 lg:w-1/2">
                            <h3 className="text-6 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>IMPULSAMOS TU NEGOCIO</h3>
                            <p className="text-9 text-lg lg:text-2xl">Crearemos el "Contenido Adecuado"para tu Negocio o Emprendiento.</p>
                        </div>
                        <div className="w-5/12 lg:w-2/12">
                            <img src="../../public/img/impulsamos-persona.png" alt="" className=" left-[25%]" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mx-[5%] lg:mx-[10%]">
                        <div className="w-5/12 lg:w-1/6 ">
                            <img src="../../public/img/gestiona-persona.png" alt="" className=" left-[25%] -top-24" />
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-5 w-6/12 lg:w-1/2">
                            <h3 className="text-6 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>GESTIONA</h3>
                            <p className="text-9 text-lg lg:text-2xl">Tus Redes Sociales con Profesionales.</p>
                        </div>
                    </div>              
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="Marquee flex w-full lg:w-full select-none overflow-hidden border-2 "> 
                      <div className=" shrink-0 flex items-center justify-around overflow-hidden whitespace-nowrap w-[300%] lg:w-full animate-scrollX">
                          <div className=" flex place-items-center w-full">
                              <Cliente id={1}></Cliente>
                              <Cliente id={2}></Cliente>
                              <Cliente id={3}></Cliente>
                              <Cliente id={4}></Cliente>
                              <Cliente id={5}></Cliente>
                              <Cliente id={6}></Cliente>
                              <Cliente id={7}></Cliente>
                              <Cliente id={8}></Cliente>
                              <Cliente id={9}></Cliente>
                              <Cliente id={10}></Cliente>
                              <Cliente id={11}></Cliente>
                          </div>
                      </div>
                      <div className=" shrink-0 flex items-center justify-around overflow-hidden whitespace-nowrap w-[300%] lg:w-full animate-scrollX">
                          <div className=" flex place-items-center w-full">
                              <Cliente id={1}></Cliente>
                              <Cliente id={2}></Cliente>
                              <Cliente id={3}></Cliente>
                              <Cliente id={4}></Cliente>
                              <Cliente id={5}></Cliente>
                              <Cliente id={6}></Cliente>
                              <Cliente id={7}></Cliente>
                              <Cliente id={8}></Cliente>
                              <Cliente id={9}></Cliente>
                              <Cliente id={10}></Cliente>
                              <Cliente id={11}></Cliente>
                          </div>
                      </div>
                  </div>
                  <div className="Marquee flex w-full lg:w-full select-none overflow-hidden border-2 "> 
                      <div className=" shrink-0 flex items-center justify-around overflow-hidden whitespace-nowrap w-[300%] lg:w-full animate-scrollXReverse">
                          <div className=" flex place-items-center w-full">
                              <Cliente id={12}></Cliente>
                              <Cliente id={13}></Cliente>
                              <Cliente id={14}></Cliente>
                              <Cliente id={15}></Cliente>
                              <Cliente id={16}></Cliente>
                              <Cliente id={17}></Cliente>
                              <Cliente id={18}></Cliente>
                              <Cliente id={19}></Cliente>
                              <Cliente id={20}></Cliente>
                              <Cliente id={21}></Cliente>
                              <Cliente id={22}></Cliente>
                          </div>
                      </div>
                      <div className=" shrink-0 flex items-center justify-around overflow-hidden whitespace-nowrap w-[300%] lg:w-full animate-scrollXReverse">
                          <div className=" flex place-items-center w-full">
                              <Cliente id={12}></Cliente>
                              <Cliente id={13}></Cliente>
                              <Cliente id={14}></Cliente>
                              <Cliente id={15}></Cliente>
                              <Cliente id={16}></Cliente>
                              <Cliente id={17}></Cliente>
                              <Cliente id={18}></Cliente>
                              <Cliente id={19}></Cliente>
                              <Cliente id={20}></Cliente>
                              <Cliente id={21}></Cliente>
                              <Cliente id={22}></Cliente>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-center lg:basis-1/12 pb-[15%] lg:pb-[5%]">
                    <p className="text-2xl text-center lg:text-5xl text-6 mx-5 lg:mx-20">Vivimos en una comunidad que demanda Creatividad, nuestros clientes merecen y necesitan un cambio radical.</p>
                </div>
        </div>
      );
}