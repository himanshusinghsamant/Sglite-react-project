const Element = ({label="", type=null,rows='6',Pholder='How can we help'})=>{
    return(
      <div className="last-name-inp flex flex-col md:w-[100%] md:mr-3 lg:mr-5">
      <label
        className="text-black font-semibold tracking-widest md:text-start md:mb-2 lg:mb-2 lg:text-start "
        htmlFor=""
      >
        {label}
      </label>
      {type === 'input' ? ( <input
        className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-slate-100 hover:text-black"
        type="text"
        placeholder={`Enter your ${label}`}
      />) : ( <textarea
        className="px-1 py-2 border-blue-200 border-2 rounded-lg hover:bg-slate-100 hover:text-black"
        type="text"
        placeholder={Pholder}
        rows={rows}
        cols={50}
      />) }
     
    </div>
    )
  }

  export default Element;