/* eslint-disable react/prop-types */
 

const Button = ( {children}) => {
  return (
    <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
    {children}
  </button>
  )
}

export default Button