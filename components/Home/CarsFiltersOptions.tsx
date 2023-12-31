import React from 'react'

const CarsFiltersOptions = () => {
    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
                <h2> Explore our cars you might likes </h2>
            </div>

            <div className='flex gap-5'>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Price</option>
                <option value={-1}>Min to Max</option>
                <option value={1}>Max to Min</option>
            </select>
            <select className="select select-bordered w-full md:block max-w-xs hidden">
                <option disabled selected>Manufactural</option>
                {/* {brandList&&brandList.map((brand:string,index:number)=>( */}
                {/* <option key={index}>{brand}</option> */}
                {/* <option key={index}>{brand}</option> */}
                <option>Honda</option>
                <option>BMW</option>
                <option>Ford</option>
            </select>
            </div>
        </div>
    )
}

export default CarsFiltersOptions