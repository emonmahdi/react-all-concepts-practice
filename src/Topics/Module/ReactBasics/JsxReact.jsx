 

const JsxReact = () => {
  return (
    <div>
        <p><b>JSX Gets Transformed:</b> JSX is not directly understood by browsers. So, it gets converted into JavaScript by a tool called Babel. After conversion, the JSX becomes equivalent to React.createElement() calls. After transformation JSX becomes.</p>
        <p><b>React Creates Elements:</b> React takes the JavaScript code generated from JSX and uses it to create real DOM elements that the browser can render on the screen.</p>
    </div>
  )
}

export default JsxReact