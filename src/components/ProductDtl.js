import Button from "./Button";
const DetailDiv =({text1=''})=>{
    return(
        <div className="text-box-1 md:w-[25rem] space-y-5 py-3 px-3">
        <h1 className="text-3xl font-bold">
            {text1}
        </h1>
       <div className="flex space-x-2">
       <span>Price Starting From
        </span>
          <h3 className="text-blue-500"> Rs 50 / Square Feet</h3>
       </div>
        <p className="text-xs">
          Copy PC hollow sheet is a Remarkable Insulation Glazing Material
          manufactured using latest technologies as Co-extruded production
          line For UV Coating . PC Hollow Sheet is stronger and lighter
          than most glazing material, installation is easier and less
          structure support is required. As extruded in multi-wall sheet
          form, it’s optical and impact properties in particular render
          this material an ideal candidate for a wide range of roofing and
          cladding applications.
        </p>
        <h2 className="font-semibold">Specification</h2>
        <p className="text-xs"> Size : 4mm, 6mm, 8 mm, 10mm Colour :- CLEAR, BROWN , SILVER , OPEL WHITE , BLUE , GREEN Standard size: 2100 x 11800, 2100 x 5800, 1220 x11800, 1220 x 5800, [ Customise size also available]</p>

      <div className="btn-sec flex items-center space-x-3">
          <Button text='Submit'/>
          <h4 className="text-blue-500 text-xs font-bold">View Full Specifications</h4>
      </div>
      </div>
    )
}


export default DetailDiv;