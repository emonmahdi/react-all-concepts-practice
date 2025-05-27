 const RenderingEvent = () => {
    
    // console.log(bodyStyle)
    const handleBgColor = () => {
          document.body.style.backgroundColor = 'green';
        alert('click the btn')
    }
  return (
    <div>
        <button onClick={handleBgColor}>Change the bg color</button>
    </div>
  )
}

export default RenderingEvent