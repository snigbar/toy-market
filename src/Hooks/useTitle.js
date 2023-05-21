import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `Littols | ${title}`;
    },[title])
}

export default useTitle;