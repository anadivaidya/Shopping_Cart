export default function CardCart({url, name, price}) {
    return(

            <div className="border-2 rounded-md flex flex-row items-center justify-between p-4 mt-10 mb-10 ml-20 mr-20">
                <img src={url} alt={name} className="w-40"/>
                    
                <h2 className="text-2xl font-light">
                    {name}
                </h2>
                <h2 className="text-xl font-medium">
                    {price}
                </h2>
            </div>
            
    )
}