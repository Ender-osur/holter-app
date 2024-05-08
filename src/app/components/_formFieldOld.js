export default function formField({ id, type, placeholder, register, requiredMessage, errors }) {
  return (
    <>
      <label
        className="text-xl p-3 rounded block mb-2 bg-transparent text-slate-100 w-full"
        htmlFor={id}
      >
        {placeholder}
      </label>
      <input 
        id={id}
        type={type}
        placeholder={placeholder}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        {...register(id, {
          required: {
            value: true,
            message: requiredMessage,
          }
        })} 
      />
      {errors[id] && (<span className="text-red-500" >{errors[id].message} </span>)}
    </>
  )
}
