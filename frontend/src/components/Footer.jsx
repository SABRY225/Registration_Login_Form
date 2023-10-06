
export default function Footer() {
    
    return (
        <div style={{padding: "12px 0px", backgroundColor : "rgb(232, 227, 227)", textAlign: 'center', position:'fixed', width: '100%',height : '85px', bottom : '0', left: '0', right: '0', zIndex : '999'}}>
            
            <div className="text-center">
                    <h5>
                        Made with ❤️ by <a href="https://akshata-ganbote.netlify.app/" style={{textDecoration : "none", color: "red"}}>Ahmed Sabry</a>
                    </h5>
            </div> 

            <div className="text-center pt-1">
                <a href="https://www.linkedin.com/in/ahmed-sabry-41b0b5268/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                </a>

                <a href="https://github.com/SABRY225" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>

                <a href="mailto:ahmedsabrymahmoud225@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{fontSize : "21px"}}></i>
                </a>
            </div>
        </div>
       
    )
}
