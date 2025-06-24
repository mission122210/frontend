// utils/useOnlineUserManager.js
import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function useOnlineUserManager() {
  const [onlineUsers, setOnlineUsers] = useState({})
  const [userId, setUserId] = useState(null)
  const activityTimeoutRef = useRef(null)

  // Generate unique ID once per visitor
  useEffect(() => {
    if (!userId) {
      const id = uuidv4()
      setUserId(id)
    }
  }, [userId])

  // Handle user activity tracking
  useEffect(() => {
    if (!userId) return

    const markActive = () => {
      setOnlineUsers((prev) => ({
        ...prev,
        [userId]: true,
      }))

      clearTimeout(activityTimeoutRef.current)

      activityTimeoutRef.current = setTimeout(() => {
        setOnlineUsers((prev) => {
          const updated = { ...prev }
          delete updated[userId]
          return updated
        })
      }, 15000) // 15s timeout for inactivity
    }

    // Initial mark
    markActive()

    // Events to track
    window.addEventListener("mousemove", markActive)
    window.addEventListener("keydown", markActive)
    window.addEventListener("scroll", markActive)
    window.addEventListener("click", markActive)

    return () => {
      clearTimeout(activityTimeoutRef.current)
      window.removeEventListener("mousemove", markActive)
      window.removeEventListener("keydown", markActive)
      window.removeEventListener("scroll", markActive)
      window.removeEventListener("click", markActive)
      setOnlineUsers((prev) => {
        const updated = { ...prev }
        delete updated[userId]
        return updated
      })
    }
  }, [userId])

  const activeUsers = Object.keys(onlineUsers)

  return { userId, activeUsers }
}
