import Customer from "../index.js"
import Link from "next/link"
// import "/edit.css"
export default function Edit(){
    // console.log(props)

    const editModal = {
        
    }
    return(
        
        <dev>
            
                <form className="edit-modal">
                    <div>
                        <label>
                            name
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>
                            value
                        </label>
                        <input type="text" />
                    </div>
                </form>
            
        </dev>
    )
}