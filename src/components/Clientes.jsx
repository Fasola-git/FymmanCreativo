import Cliente from "./Cliente";

export default function Clientes(){
      return (

         <div id="Clientes" className="min-h-[100dvh] flex flex-col gap-12 bg-2 pt-[4dvh]" >
                <div className="flex flex-row justify-around">
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
                que esperan de nosotros.</p>
                <div className="flex flex-col justify-center items-center">
                  <div className="Marquee flex select-none overflow-hidden border-2 "> 
                      <div className=" flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-scrollX">
                          <div className=" flex place-items-center">
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
                      <div className=" flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-scrollX">
                          <div className=" flex place-items-center">
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
                  <div className="Marquee flex select-none overflow-hidden border-2 "> 
                      <div className=" flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-scrollXReverse">
                          <div className=" flex place-items-center">
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
                      <div className=" flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-scrollXReverse">
                          <div className=" flex place-items-center">
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
                <p className="text-3xl text-6 mx-20 place-self-center">Vivimos en una comunidad que demanda Creatividad, nuestros clientes merecen y necesitan un cambio radical.</p>
        </div>
      );
}