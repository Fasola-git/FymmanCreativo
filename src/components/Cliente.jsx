
export default function Cliente (id){
      
    const rutaImagen = `../../public/img/cliente (${id.id}).png`;

    return(
        <>
        <div className=" max-w-40 transition duration-300 hover:ease-in-out hover:z-2 hover:scale-[1.2] object-contain rounded-lg aspect-video py-6 flex flex-col justify-center ">
            <img src={rutaImagen} className="min-h-auto max-h-32" alt={`Cliente ${id}`}></img>
        </div>
            
        </>
    )
}