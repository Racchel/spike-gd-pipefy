import { useEffect } from "react"
import { pipefyService } from "../src/services/pipefyService"

export default function Home() {
  
  const auth = async () => {
    const response = await pipefyService.auth()
    console.log("auth", response)
    return response
  }

  const getAllCards = async () => {
    await auth()
    const response = await pipefyService.getCardByOrderId()
    console.log("getAllCards", response)
    return response
  }

  useEffect(() => {
    getAllCards()
  }, [])

  return (
   <div>
    <p>oiii</p>
   </div>
  )
}
