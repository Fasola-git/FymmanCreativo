
export default function Servicios(){
      /* 
        REALIZAR UNA PAGINA MAS PARA EL QUIENES SOMOS
        CAMBIAR EL NOMBRE DE NOSOTROS
        CLIENTES ELIMINAR TEXTO Y AÑADIR LOS SERVICIOS DE CANVA
        AÑADIR LINKS DEBAJO DE CLIENTES CON IMG O GIF A CONFIRMAR
        */
    return(
        <>
            <div id="Servicios" className="min-h-screen gap-5 flex flex-col items-center bg-7 pb-[5dvh] lg:pb-[15dvh] lg:gap-20 bg-cover bg-no-repeat bg-[center_bottom_-5rem]" style={{backgroundImage: 'url("../../public/img/Ondas2.svg")'}}>
                    <h2 className=" text-2 text-center text-2xl lg:text-6xl py-10">¿QUE ES LO QUE HACEMOS?</h2>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-16 mb-[15dvh]">
                        <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:mx-0 lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8 text-2xl lg:text-4xl">-</span>IMAGEN CORPORATIVA</h3>
                                <p className="text-2 text-lg lg:text-2xl">La imagen corporativa es el significado que adquiere una empresa ante la sociedad, la misma repercute en la percepción de los productos, servicios y comunicación externa de una empresa.</p>
                            </div>
                            <div className="max-w-[65%] lg:max-w-[25%] rounded-full flex flex-col justify-center">
                                <img src="../../public/img/taza.svg" className=" w-full pl-5 rounded-2xl "alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8  text-2xl lg:text-4xl">-</span>LOGOTIPO</h3>
                                <p className="text-2 text-lg lg:text-2xl">Los logotipos identifican la marca, mediante símbolos que los clientes utilizan para reconocerla. Te separa de la competencia. Transmite tus valores y muestra a los consumidores por qué no eres como tus competidores.</p>
                            </div>
                            <div className="max-w-[65%] lg:max-w-[23%] flex flex-col justify-center items-center">
                                <img src="../../public/img/logoestilo.svg" className="w-full rounded-full" alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8  text-2xl lg:text-4xl">-</span>ESTILO DE MARCA</h3>
                                <p className="text-2 text-lg lg:text-2xl">Hace que tu comunicación sea única y propia, acompaña a la empresa para saber cómo transmitir con un estilo propio. Hace que tus clientes y audiencia reconozcan cada imagen o vídeo, textos, etc.</p>
                            </div>
                            <div className="max-w-[65%] lg:max-w-[25%] flex flex-col justify-center items-center">
                                <img src="../../public/img/colors.svg" className="w-full " alt="" />
                                <img src="../../public/img/logoestilo.svg" className="w-full " alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8  text-2xl lg:text-4xl">-</span>PÁGINA WEB</h3>
                                <p className="text-2 text-lg lg:text-2xl">Una página web dependiendo de las necesidades del cliente y la empresa, desde una página de presentacion de la empresa hasta una tienda virtual funcional. Todo con el dominio incluido en la web</p>
                            </div>
                            <div className="max-w-[65%] lg:max-w-[25%] flex flex-col justify-center items-center ">
                                <div className="flex flex-row bg-1 justify-center items-center rounded-full">
                                     <img src="../../public/img/Web2.png" className="w-9/12" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8  text-2xl lg:text-4xl">-</span>IDENTIDAD SONORA </h3>
                                <p className="text-2 text-lg lg:text-2xl">Puede ser definida como el conjunto de rasgos sonoros. Es la identidad característica de un conjunto de: Melodías y Frases comerciales de una Marca. Profundica la identificación de la empresa a tal punto que el consumidor interpreta como propio, parte de él.</p>
                            </div>
                            <div className="max-w-[50%] lg:max-w-[25%] flex flex-col justify-center items-center ">
                                <div className="flex flex-row rounded-full bg-1">
                                    <img src="../../public/img/music.svg" alt="" className="w-full rounded-3xl" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8  text-2xl lg:text-4xl">-</span>CRM</h3>
                                <p className="text-2 text-lg lg:text-2xl">Utilizamos este software Profesional como una herramienta escencial en la gestión de las relaciones entre una empresa y sus clientes. Se encarga de estructurar toda la información que ingresa por las diferentes plataformas. Contribuye y ayuda a la organización en la optimización de tiempo y esfuerzos por parte del equipo.</p>
                            </div>
                            <div className="max-w-[50%] lg:max-w-[25%] flex flex-col justify-center items-center">
                                <img src="../../public/img/CRM.png" className="rounded-full bg-1" alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8  text-2xl lg:text-4xl">-</span>COMUNITY MANAGER</h3>
                                <p className="text-2 text-lg lg:text-2xl">La tarea principal de un Comunity Manager es mantener y planificar la comunicación del contenido publicitario de una Empresa o Marca, a traves de estrategias comerciales.
                                <ul>
                                    <li><span className="text-8  text-xl">-</span> Elabora y crear contenido.</li>
                                    <li><span className="text-8  text-xl">-</span> Copywriting.</li>
                                    <li><span className="text-8  text-xl">-</span> Cuida la comunidad online.</li>
                                    <li><span className="text-8  text-xl">-</span> Publicita.</li>
                                    <li><span className="text-8  text-xl">-</span> Genera actividades para mantener el interés del público.</li>
                                    <li><span className="text-8  text-xl">-</span> Atrae a nuevos usuarios y aumenta la visibilidad de la marca.</li>
                                    <li><span className="text-8  text-xl">-</span> Analiza y hace seguimientos de la competencia.</li>
                                    <li><span className="text-8  text-xl">-</span> Realiza tareas de medición.</li>
                                    <li><span className="text-8  text-xl">-</span> Sabe actuar frente a una crisis de reputación.</li>
                                </ul>
                                </p>
                            </div>
                            <div className="max-w-[50%] lg:max-w-[25%] flex justify-center items-center">
                                <img src="../../public/img/Comunity.png" className="rounded-full bg-1" alt="" />
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row items-center w-full lg:justify-evenly lg:h-full">
                            <div className="flex flex-col gap-5 mx-[5%] lg:gap-10 lg:w-1/2">
                                <h3 className="text-2 text-xl lg:text-3xl"><span className="text-8  text-2xl lg:text-4xl">-</span>DOCUMENTOS </h3>
                                <p className="text-2 text-lg lg:text-2xl">Se utilizan el Estilo de Marca en todos los comprobantes extendidos por escrito en los que se deja constancia de las operaciones que se realizan en la actividad mercantil.</p>
                            </div>
                            <div className="max-w-[50%] lg:max-w-[25%]  flex justify-center items-center">
                                <img src="../../public/img/docs.svg" className="w-full rounded-2xl" alt="" />
                            </div>
                        </div>
                    </div>
               </div>
        </>
    )
}