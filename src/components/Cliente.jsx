
export default function Cliente (id){
      
    const rutaImagen = `../../public/img/cliente (${id.id}).jpeg`;

    return(
        <>
        <div className=" max-w-[50%] transition duration-300 hover:ease-in-out hover:z-2 hover:scale-[1.2] object-contain rounded-lg aspect-video px-4 lg:px-5 py-1.5 flex flex-col justify-center ">
            <img src={rutaImagen} alt={`Cliente ${id}`}></img>
        </div>
            
        </>
    )
}