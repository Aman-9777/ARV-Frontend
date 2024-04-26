"use client"

import { useEffect  } from "react"

function CoreuiClient(){
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.js')
    }, []);

    return null
}

export default CoreuiClient