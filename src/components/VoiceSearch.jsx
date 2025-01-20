import React, { useEffect, useState } from 'react'

    export default function VoiceSearch({ onResult, isActive, setIsActive }) {
      const [transcript, setTranscript] = useState('')
      const recognitionRef = useRef(null)

      useEffect(() => {
        if (window.webkitSpeechRecognition || window.SpeechRecognition) {
          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
          recognitionRef.current = new SpeechRecognition()
          recognitionRef.current.continuous = false
          recognitionRef.current.interimResults = false
          recognitionRef.current.lang = 'en-US'

          recognitionRef.current.onresult = (event) => {
            const transcript = event.results[0][0].transcript
            setTranscript(transcript)
            onResult(transcript)
            setIsActive(false)
          }

          recognitionRef.current.onerror = (event) => {
            console.error('Voice recognition error:', event.error)
            setIsActive(false)
          }
        }
      }, [onResult, setIsActive])

      const toggleVoiceSearch = () => {
        if (isActive) {
          recognitionRef.current.stop()
          setIsActive(false)
        } else {
          recognitionRef.current.start()
          setIsActive(true)
        }
      }

      return (
        <button 
          className={`voice-search-button ${isActive ? 'active' : ''}`}
          onClick={toggleVoiceSearch}
        >
          {isActive ? 'Stop' : 'Voice Search'}
        </button>
      )
    }
