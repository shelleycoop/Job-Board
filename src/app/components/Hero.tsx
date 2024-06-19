export default function Hero (){
    return (
    <section className="py-12"> 
        <h1 className="text-4xl font-bold text-center">
            Find Your Next <br/> Dream Job
        </h1>
        <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Doloribus repellat error expedita, doloremque labore eum 
            sapiente commodi natus in magnam iste? Modi enim, vero impedit quos sequi 
            itaque magnam sed?</p>
        <form>
            <input 
             type="search" 
             className="border border-gray-400 w-full py-2 px-3 rounded-md" 
             placeholder="Search Phrase..."/>

            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
        </form>    
    </section>
)
}